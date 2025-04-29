<!-- src/views/GameView.vue -->
<template>
    <div v-if="store.preguntas.length !== 0"
        class="min-h-screen d-flex align-items-center justify-content-center bg-gray-100 dark:bg-gray-900 p-4">
        <SelectPlayers v-if="!store.numJugadores" />
        <Game v-else />
    </div>
    <div v-else
        class="min-h-screen d-flex flex-column align-items-center justify-content-center bg-gray-100 dark:bg-gray-900 p-4">
        <h1 class="m-3 mb-5">Primero se tienen que cargar las preguntas:</h1>
        <button @click="goToLoadQuestions" class="btn btn-primary">Ir a Cargar Preguntas</button>
    </div>
</template>

<script setup>
import SelectPlayers from '../components/SelectPlayers.vue'
import Game from '../components/Game.vue'
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()

import { useRouter } from 'vue-router'
const $router = useRouter()

function goToLoadQuestions() {
    $router.push({ name: 'loadDilems' })
}
</script>
