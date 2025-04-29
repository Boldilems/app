<template>
    <div class="d-flex justify-content-center align-items-center w-100">
        <label for="dropzone-file"
            class="d-flex flex-column justify-content-center align-items-center w-100 max-w-50 h-100 border border-2 border-secondary rounded p-4 bg-light text-center cursor-pointer">
            <div class="d-flex flex-column justify-content-center align-items-center py-3">
                <svg class="mb-3 text-secondary bi bi-cloud-arrow-up" xmlns="http://www.w3.org/2000/svg" width="40"
                    height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 0a5.53 5.53 0 0 0-4.473 2.326 4.5 4.5 0 0 0-.91 8.89A2.5 2.5 0 0 0 5.5 16h5a2.5 2.5 0 0 0 2.383-3.326A4.5 4.5 0 0 0 8 0ZM4.5 4a3.5 3.5 0 0 1 6.5 2.5c0 .538-.12 1.045-.337 1.5H8.5V5.707l1.146 1.147a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L8.5 4.293V8h2.163a3.5 3.5 0 0 1-6.163-2Z" />
                </svg>
                <p class="mb-2 text-secondary">
                    <span class="fw-bold">Haz clic para subir</span> o arrastra el archivo
                </p>
                <p class="text-muted small">JSON (máx. 2MB)</p>
            </div>
            <input id="dropzone-file" type="file" class="d-none" @change="handleFileUpload" />
        </label>
    </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGameStore'
import { useRouter } from 'vue-router'

const store = useGameStore()
const router = useRouter()

function handleFileUpload(event) {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result)
            if (!Array.isArray(data)) throw new Error('El archivo debe contener un array de preguntas.')
            store.cargarPreguntas(data)
            router.push('/jugar') // o a /jugadores si creamos pantalla intermedia
        } catch (error) {
            alert('Archivo inválido: ' + error.message)
        }
    }
    reader.readAsText(file)
}
</script>