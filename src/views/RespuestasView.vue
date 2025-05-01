<template>
    <div>
        <DownloadRespuestas />
    </div>
</template>

<script setup>
import DownloadRespuestas from '../components/DownloadRespuestas.vue'
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()

function goToLoadDilems() {
    store.router.push({ name: 'loadDilems' })
}
</script>
