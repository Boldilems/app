import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
    state: () => ({
        questions: [], // Aquí se cargarán las preguntas desde el archivo JSON
        currentIndex: 0, // Índice de la pregunta actual
        playerAnswers: {
            player1: [],
            player2: [],
        }, // Respuestas de los jugadores
        currentPlayer: 1, // Jugador actual (1 o 2)
    }),

    actions: {
        // Cargar las preguntas desde un archivo JSON
        loadQuestions(data) {
            this.questions = data
        },

        // Seleccionar la respuesta para el jugador actual
        selectAnswer(answer) {
            this.playerAnswers[`player${this.currentPlayer}`].push({
                questionId: this.currentIndex,
                answer,
            })
        },

        // Pasar a la siguiente pregunta
        nextQuestion() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++
            } else {
                // Juego finalizado
                this.saveGameResults()
            }
        },

        // Cambiar al siguiente jugador
        switchPlayer() {
            this.currentPlayer = this.currentPlayer === 1 ? 2 : 1
        },

        // Guardar las respuestas de los jugadores en localStorage
        saveGameResults() {
            localStorage.setItem('gameResults', JSON.stringify(this.playerAnswers))
        },

        // Cargar las respuestas desde localStorage (si existen)
        loadGameResults() {
            const savedResults = localStorage.getItem('gameResults')
            if (savedResults) {
                this.playerAnswers = JSON.parse(savedResults)
            }
        },
    },
})
