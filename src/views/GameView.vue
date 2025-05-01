<!-- src/views/GameView.vue -->
<template>
    <div v-if="store.dilems.length !== 0"
        class="min-h-screen d-flex align-items-center justify-content-center bg-gray-100 dark:bg-gray-900 p-4">
        <SelectPlayers v-if="store.jugadores.length === 0" />
        <Game v-else />
    </div>
    <div v-else
        class="min-h-screen d-flex flex-column align-items-center justify-content-center bg-gray-100 dark:bg-gray-900 p-4">
        <h1 class="m-3 mb-5">Primero se tienen que cargar las dilems:</h1>
        <button @click="goToLoadDilems" class="btn btn-primary">Ir a Cargar Dilems</button>
    </div>
</template>

<script setup>
import SelectPlayers from '../components/SelectPlayers.vue'
import Game from '../components/Game.vue'
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()

function goToLoadDilems() {
    store.router.push({ name: 'loadDilems' })
}
</script>
