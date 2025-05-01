<template>
    <!-- <div v-if="store.jugadores.length > 1" class="d-flex justify-content-center my-3"> -->
    <div class="d-flex justify-content-center my-3">
        <button id="changeJugador" title="Cambiar jugador" @click="store.lastJugador">
            <i class="bi bi-arrow-left-right"></i>
        </button>
    </div>
    <div class="w-100 text-white rounded shadow text-center current-player">
        <h2 class="fw-bold p-2 titulo">Turno de:</h2>
        <h1 class="display-5 p-3 fw-bold" :style="{ backgroundColor: store.jugadorCurrent.color || '#6c757d' }">
            {{ store.jugadorCurrent.name }}
        </h1>
    </div>
</template>

<style scoped>
#changeJugador {
    background-color: #0d6efd;
    /* Azul Bootstrap */
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    color: white;
    font-size: 1.25rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#changeJugador:hover {
    background-color: #0b5ed7;
    transform: scale(1.05);
}

#changeJugador:active {
    transform: scale(0.95);
}

#changeJugador i {
    margin-right: 0;
}

.titulo {
    border-bottom: 3px solid var(--darkreader-background-0d6efd, #134ea5) !important;
    background-color: var(--darkreader-background-dc3545, #8a242e) !important;
    margin-bottom: 0;
}
</style>

<script setup>
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()
</script>
