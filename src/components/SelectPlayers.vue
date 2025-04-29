<template>
    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">Selecciona el número de jugadores</h2>

                <div class="form-check border rounded p-2 mb-3" v-for="option in opciones" :key="option.value">
                    <input :id="`radio-${option.value}`" type="radio" :value="option.value" v-model="jugadores"
                        name="jugadores" class="form-check-input" />
                    <label :for="`radio-${option.value}`" class="form-check-label ms-2">
                        {{ option.label }}
                    </label>
                </div>

                <button class="btn btn-primary w-100" @click="confirmarJugadores" :disabled="!jugadores">
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