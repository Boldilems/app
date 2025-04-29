<template>
    <div v-if="currentQuestion" class="mt-4">
        <h3 class="text-center mb-4 fw-bold">
            {{ currentQuestion.text }}
        </h3>

        <ul class="list-group">
            <li v-for="(option, index) in currentQuestion.options" :key="index"
                class="list-group-item d-flex justify-content-between align-items-center">
                <div class="form-check">
                    <input class="form-check-input" type="radio" :id="'option-' + index" name="answer" :value="option"
                        v-model="selectedAnswer" />
                    <label class="form-check-label" :for="'option-' + index">
                        {{ option }}
                    </label>
                </div>
                <svg class="bi bi-arrow-right-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                    <path fill-rule="evenodd"
                        d="M6.354 11.354a.5.5 0 0 1-.708-.708L9.293 7.5 5.646 3.854a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4z" />
                </svg>
            </li>
        </ul>

        <button @click="submitAnswer" :disabled="!selectedAnswer" class="btn btn-primary mt-4 w-100">
            Siguiente
        </button>
    </div>

    <div v-else class="text-center mt-4">
        <p class="fs-4 fw-bold">¡Juego finalizado!</p>
        <!-- Aquí podrías añadir botón para descargar JSON -->
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()

const selectedAnswer = ref(null)
const currentIndex = ref(0)
const currentQuestion = computed(() => store.preguntas[currentIndex.value])


function submitAnswer() {
    if (!selectedAnswer.value) return

    const jugadorKey = `jugador1`
    store.respuestas[jugadorKey].push({
        pregunta: currentQuestion.value.text,
        respuesta: selectedAnswer.value
    })

    selectedAnswer.value = null
    currentIndex.value++
}


</script>