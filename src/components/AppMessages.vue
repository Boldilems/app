<template>
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 1080">
        <TransitionGroup name="fade" tag="div">
            <div v-for="msg in mensajes" :key="msg.id" class="alert alert-dismissible alert-shadow"
                :class="['fade show', `alert-${msg.tipo}`]" role="alert">
                {{ msg.texto }}
                <button type="button" class="btn-close" aria-label="Close" @click="remove(msg.id)"></button>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGameStore'
import { storeToRefs } from 'pinia'

const store = useGameStore()
const { mensajes } = storeToRefs(store)

function remove(id) {
    store.removeMensaje(id)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.alert-error {
    background-color: #f8d7da;
    color: #721c24;
}
</style>
