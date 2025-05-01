<!-- src/components/Game.vue -->
<template>
    <div class="container-fluid h-100">
        <div v-if="currentQuestion" class="row h-100 align-items-center justify-content-center g-4">
            <!-- Respuesta 1 -->
            <div class="col-12 col-md-4">
                <AnswerComponent :option="currentQuestion.options[0]" :index="0" :selected="selectedAnswer"
                    :variant="'one'" @select="selectedAnswer = $event" />
            </div>

            <!-- Botones -->
            <div class="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center gap-3">
                <h3 class="text-center mb-3 fw-bold fs-4 text-dark">
                    {{ currentQuestion.text }}
                </h3>
                <button @click="submitAnswer" :disabled="!selectedAnswer" class="btn btn-primary w-75">
                    Siguiente
                </button>
            </div>

            <!-- Respuesta 2 -->
            <div class="col-12 col-md-4">
                <AnswerComponent :option="currentQuestion.options[1]" :index="1" :selected="selectedAnswer"
                    :variant="'two'" @select="selectedAnswer = $event" />
            </div>
        </div>


        <div v-else class="text-center mt-4">
            <p class="fs-4 fw-bold">¡Juego finalizado!</p>
            <button @click="descargarRespuestas" class="btn btn-success mt-4">
                Descargar Respuestas
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '../stores/useGameStore'
import AnswerComponent from './AnswerComponent.vue'

const store = useGameStore()
const selectedAnswer = ref(null)
const currentIndex = ref(0)
const currentQuestion = computed(() => store.preguntas[currentIndex.value])

function submitAnswer() {
    if (!selectedAnswer.value) return

    const jugadorKey = `jugador1`
    store.respuestas[jugadorKey].push({
        pregunta: currentQuestion.value.text,
        respuesta: selectedAnswer.value,
        opciones: currentQuestion.value.options
    })

    selectedAnswer.value = null
    currentIndex.value++

    if (currentIndex.value >= store.preguntas.length) {
        store.preguntas = []
    }
}

function descargarRespuestas() {
    const jugadorKey = `jugador1`
    const respuestas = store.respuestas[jugadorKey]

    const blob = new Blob([JSON.stringify(respuestas, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'respuestas.json'
    link.click()
    URL.revokeObjectURL(url)
}
</script>
