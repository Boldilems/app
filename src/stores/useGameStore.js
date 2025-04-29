// src/store/useGameStore.ts
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
    state: () => ({
        preguntas: [],
        numJugadores: null,
        respuestas: {
            jugador1: [
                {
                    pregunta: '',
                    respuesta: '',
                    opciones: []
                }
            ],
            jugador2: [
                {
                    pregunta: '',
                    respuesta: '',
                    opciones: []
                }
            ],
        }
    }),
    actions: {
        cargarPreguntas(data) {
            this.preguntas = data.map(p => ({
                text: p.dilem,
                options: p.opciones.map(o => o.opcion)
            }))
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
