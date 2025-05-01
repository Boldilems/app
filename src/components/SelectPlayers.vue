<template>
    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-body text-center">
                <h2 class="card-title mb-4">Selecciona el modo de juego</h2>

                <div class="d-flex flex-column gap-3 mb-4">
                    <button v-for="option in opciones" :key="option.value" :class="[
                        'btn btn-lg',
                        jugadores === option.value ? 'btn-primary' : 'btn-outline-primary'
                    ]" @click="jugadores = option.value">
                        {{ option.label }}
                    </button>
                </div>

                <form @submit.prevent="confirmarJugadores" v-if="jugadores">
                    <div v-for="index in jugadores" :key="index" class="mb-3">
                        <label :for="'nombre-' + index" class="form-label">Nombre del jugador {{ index }}</label>
                        <input :id="'nombre-' + index" v-model="nombres[index - 1]" class="form-control" required>
                    </div>
                    <div v-for="index in jugadores" :key="index" class="mb-3">
                        <label :for="'color-' + index" class="form-label">Color del jugador {{ index }}</label>
                        <select :id="'color-' + index" v-model="colores[index - 1]" class="form-select" required>
                            <option value="#e74c3c">Rojo</option>
                            <option value="#3498db">Azul</option>
                            <option value="#2ecc71">Verde</option>
                            <option value="#f4d03f">Amarillo</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success w-100">Confirmar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()
const jugadores = ref(null)
const nombres = ref([])
const colores = ref([])

const opciones = [
    { label: 'Un jugador', value: 1 },
    { label: 'Dos jugadores', value: 2 },
]

function confirmarJugadores() {
    if (!jugadores.value || nombres.value.length !== jugadores.value || colores.value.length !== jugadores.value) return

    const jugadoresData = nombres.value.map((nombre, index) => {
        return { name: nombre, color: colores.value[index] }
    })

    // Guardar los jugadores en algún lugar, por ejemplo, en el store
    store.setJugadores(jugadoresData)
}
</script>
