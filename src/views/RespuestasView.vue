<template>
    <div>
        <DownloadRespuestas />
    </div>
</template>

<script setup>
import DownloadRespuestas from '../components/DownloadRespuestas.vue'
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()

import { useRouter } from 'vue-router'
const $router = useRouter()

function goToLoadDilems() {
    $router.push({ name: 'loadDilems' })
}
</script>
