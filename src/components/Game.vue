<!-- src/components/Game.vue -->
<template>
    <div v-if="store.continuar" class="container-fluid h-100">
        <div class="row h-100 align-items-center justify-content-center g-4 game-layout">
            <!-- Respuesta 1 -->
            <div class="col-12 col-md-4">
                <FieldRespuesta :option="store.dilemsCurrent.options[0]" :index="0" :selected="selectedRespuesta"
                    variant="one" @select="selectedRespuesta = $event"
                    :jugadores="getJugadoresPorOpcion(store.dilemsCurrent.options[0])" />
            </div>

            <!-- Contenido central -->
            <div id="central" class="col-12 col-md-4 d-flex  contenido-central">
                <JugadorCurrente class="jugador-currente" />
                <div class="row" id="dilemText">
                    <h3 class="text-center mb-3 fw-bold fs-4 text-dark">
                        {{ store.dilemsCurrent.text }}
                    </h3>
                    <button @click="submitRespuesta" :disabled="!selectedRespuesta" class="btn btn-primary w-75">
                        Siguiente
                    </button>
                </div>
            </div>

            <!-- Respuesta 2 -->
            <div class="col-12 col-md-4">
                <FieldRespuesta :option="store.dilemsCurrent.options[1]" :index="1" :selected="selectedRespuesta"
                    variant="two" @select="selectedRespuesta = $event"
                    :jugadores="getJugadoresPorOpcion(store.dilemsCurrent.options[1])" />
            </div>
        </div>
    </div>

    <!-- Fin del juego -->
    <div v-else class="container-fluid h-100">
        <div class="row h-100 align-items-center justify-content-center g-4">
            <div class="col-12 text-center">
                <h2 class="text-success">Juego terminado</h2>
                <p class="text-muted">Gracias por jugar</p>
                <button @click="nextGame" class="btn btn-primary">Continuar</button>
                <button @click="endGame" class="btn btn-primary">Reset</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#dilemText {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#central {
    flex-direction: column;
}

/* src/assets/styles.css o dentro del componente con <style scoped> */

@media (max-width: 768px) {
    .contenido-central {
        order: -1;
        /* Mueve el bloque central arriba */
    }

    .game-layout {
        flex-direction: column;
    }

}
</style>


<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/useGameStore'
import FieldRespuesta from './FieldRespuesta.vue'
import JugadorCurrente from './JugadorCurrente.vue'

const store = useGameStore()
const selectedRespuesta = ref(null)

function submitRespuesta() {
    if (!selectedRespuesta.value) return
    store.saveRespuesta(selectedRespuesta.value);
    selectedRespuesta.value = null
}

function endGame() {
    store.resetGame()
}
function nextGame() {
    store.continueGame()
}
function getJugadoresPorOpcion(option) {
    let jugadores = []

    if (option === selectedRespuesta.value) {
        jugadores.push(store.jugadorCurrent)
    }


    if (store.jugadores.length > 1) {
        store.jugadores.forEach(jugador => {
            if (jugador.id !== store.jugadorCurrent.id) {
                const j = store.respuestas[jugador.id]
                j.respuestas.forEach((value) => {
                    if (value.respuesta === option) {
                        jugadores.push(jugador)
                    }
                })
            }
        });

    }
    return jugadores
}
</script>
