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

                <button class="btn btn-success w-100" @click="confirmarJugadores" :disabled="!jugadores">
                    Confirmar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()
const jugadores = ref(null)

const opciones = [
    { label: 'Un jugador', value: 1 },
    { label: 'Dos jugadores', value: 2 },
]

function confirmarJugadores() {
    if (!jugadores.value) return
    store.setNumJugadores(jugadores.value)
}
</script>

<style scoped>
.btn-lg {
    padding: 1rem;
    font-size: 1.25rem;
    border-radius: 1rem;
}
</style>
