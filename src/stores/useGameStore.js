// src/store/useGameStore.ts
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'

let nextId = 0

export const useGameStore = defineStore('game', {
    state: () => ({
        router: useRouter(),
        dilems: [],
        dilemsCurrentIndex: 0,
        dilemsCurrent: {},
        respuestas: null,
        mensajes: [],
        jugadorCurrent: {},
        jugadores: [],
        continuar: true,
    }),
    actions: {
        cargarDilems(data) {
            this.dilems = data.map(p => ({
                text: p.dilem,
                options: p.opciones.map(o => o.opcion)
            }))
            this.dilemsCurrentIndex = 0
            this.dilemsCurrent = this.dilems[this.dilemsCurrentIndex]
            this.addMensaje('Dilems cargadas correctamente', 'success')
        },
        setJugadores(jugadores) {
            this.respuestas = {}
            jugadores.forEach((jugador, index) => {
                this.jugadores.push({
                    name: jugador.name,
                    color: jugador.color,
                    id: `jugador${index + 1}`
                });
                this.respuestas[`jugador${index + 1}`] = {
                    name: jugador.name,
                    respuestas: []
                }
            });
            this.jugadorCurrent = this.jugadores[0]
        },
        nextDilem() {
            this.dilemsCurrentIndex++
            if (this.dilems[this.dilemsCurrentIndex] === undefined) {
                return false;
            }
            this.dilemsCurrent = this.dilems[this.dilemsCurrentIndex]
            return true;
        },
        nextJugador() {
            const currentIndex = this.jugadores.findIndex(j => j.id === this.jugadorCurrent.id)
            const changeDilem = (currentIndex) === this.jugadores.length - 1
            if (changeDilem) {
                this.jugadorCurrent = this.jugadores[0]
                return this.nextDilem()
            }
            this.jugadorCurrent = this.jugadores[currentIndex + 1]
            return true;
        },
        saveRespuesta(respuesta) {
            const respuestas = this.respuestas[this.jugadorCurrent.id].respuestas.length
            this.respuestas[this.jugadorCurrent.id].respuestas[respuestas] = { dilems: this.dilems[this.dilemsCurrentIndex].text, respuesta: respuesta, opciones: this.dilems[this.dilemsCurrentIndex].options }
            this.continuar = this.nextJugador()
        },
        continueGame() {
            this.dilems = []
            this.router.push({ name: 'loadDilems' })
            this.continuar = true
        },
        resetGame() {
            this.dilems = []
            this.dilemsCurrentIndex = 0
            this.dilemsCurrent = {}
            this.numJugadores = null
            this.respuestas = null
            this.mensajes = []
            this.jugadorCurrent = {}
            this.jugadores = []
            this.continuar = true
        },
        async cargarDilemsPredefinidas(name) {
            if (!name) {
                this.addMensaje('Nombre de archivo no especificado', 'error')
                return;
            }

            const path = `/app/DefaultDilems/${name}/${name}.json`;
            try {
                const dilems = await fetch(path);
                if (!dilems.ok) throw new Error('Error al cargar el JSON.');
                const data = await dilems.json();
                this.cargarDilems(data);
            } catch (error) {
                this.addMensaje('Error al cargar dilems: ' + error.message, 'error')
            }
        },
        // Agregar un nuevo mensaje
        addMensaje(texto, tipo = 'info') {
            const id = nextId++
            this.mensajes.push({ id, texto, tipo })

            // Eliminar automáticamente a los 5 segundos
            setTimeout(() => this.removeMensaje(id), 5000)
        },

        removeMensaje(id) {
            this.mensajes = this.mensajes.filter(m => m.id !== id)
        }
    }
})
