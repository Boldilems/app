// src/store/useGameStore.ts
import { defineStore } from 'pinia'

let nextId = 0

export const useGameStore = defineStore('game', {
    state: () => ({
        preguntas: [],
        numJugadores: null,
        respuestas: {
            jugador1: [{ pregunta: '', respuesta: '', opciones: [] }],
            jugador2: [{ pregunta: '', respuesta: '', opciones: [] }],
        },
        mensajes: [] // ← nuevo array de mensajes
    }),
    actions: {
        cargarPreguntas(data) {
            this.preguntas = data.map(p => ({
                text: p.dilem,
                options: p.opciones.map(o => o.opcion)
            }))
            this.addMensaje('Preguntas cargadas correctamente', 'success')
        },
        setNumJugadores(num) {
            this.numJugadores = num
            for (let i = 1; i <= num; i++) {
                this.respuestas[`jugador${i}`] = []
            }
        },
        async cargarPreguntasPredefinidas(name) {
            if (!name) {
                this.addMensaje('Nombre de archivo no especificado', 'error')
                return;
            }

            const path = `/app/DefaultDilems/${name}/${name}.json`;
            try {
                const respuestas = await fetch(path);
                if (!respuestas.ok) throw new Error('Error al cargar el JSON.');
                const data = await respuestas.json();
                this.cargarPreguntas(data);
            } catch (error) {
                this.addMensaje('Error al cargar preguntas: ' + error.message, 'error')
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
