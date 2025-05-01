<!-- src/components/Game.vue -->
<template>
    <div class="container-fluid h-100">
        <div class="text-center mt-4">
            <p class="fs-4 fw-bold">Descargar las Respues que se han recgido en formato JSON</p>
            <button @click="descargarRespuestas" class="btn btn-success mt-4">
                Descargar Respuestas
            </button>
        </div>
    </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()

function descargarRespuestas() {
    const jugadorKey = `jugador1`
    const respuestas = store.respuestas[jugadorKey]

    const blob = new Blob([JSON.stringify(respuestas, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'respuestas.json'
    link.click()
    URL.revokeObjectURL(url)
}
</script>
