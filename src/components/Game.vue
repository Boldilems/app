<!-- src/components/Game.vue -->
<template>
    <div v-if="store.continuar" class="container-fluid h-100">
        <div class="row h-100 align-items-center justify-content-center g-4">
            <!-- Respuesta 1 -->
            <div class="col-12 col-md-4">
                <FieldRespuesta :option="store.dilemsCurrent.options[0]" :index="0" :selected="selectedRespuesta"
                    :variant="'one'" @select="selectedRespuesta = $event" />
            </div>

            <!-- Botones -->
            <div class="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center gap-3">
                <h3 class="text-center mb-3 fw-bold fs-4 text-dark">
                    {{ store.dilemsCurrent.text }}
                </h3>
                <button @click="submitRespuesta" :disabled="!selectedRespuesta" class="btn btn-primary w-75">
                    Siguiente
                </button>
            </div>

            <!-- Respuesta 2 -->
            <div class="col-12 col-md-4">
                <FieldRespuesta :option="store.dilemsCurrent.options[1]" :index="1" :selected="selectedRespuesta"
                    :variant="'two'" @select="selectedRespuesta = $event" />
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

<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/useGameStore'
import FieldRespuesta from './FieldRespuesta.vue'

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
</script>
