// src/store/useGameStore.ts
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
    state: () => ({
        preguntas: [],
        numJugadores: null,
        respuestas: {}
    }),
    actions: {
        cargarPreguntas(data) {
            this.preguntas = data
        },
        setNumJugadores(num) {
            this.numJugadores = num
            // inicializar respuestas para cada jugador
            for (let i = 1; i <= num; i++) {
                this.respuestas[`jugador${i}`] = []
            }
        },
    }
})
