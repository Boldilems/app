<!-- src/views/GameView.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <SelectPlayers v-if="!store.numJugadores" />
        <Game v-else />
    </div>
</template>

<script setup>
import SelectPlayers from '../components/SelectPlayers.vue'
import Game from '../components/Game.vue'
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()
</script>
