<template>
    <div class="container-fluid h-100">
        <div class="text-center mt-4">
            <p class="fs-4 fw-bold">Descargar las Respues que se han recgido en formato JSON</p>
            <button @click="store.downloadRespuestas" class="btn btn-success mt-4">
                Descargar Respuestas
            </button>
        </div>
    </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()
</script>
