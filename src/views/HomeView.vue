<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div>
            <h1>Aplicaciones para Preguntas de ¿Qué prefieres?</h1>
            <h2 class="m-3 mb-5">Primero se tienen que cargar las preguntas:</h2>
            <p>Las preguntas se pasan por JSON con el siguiente formato:</p>
            <FieldCodeJson :jsonObject="data" />
        </div>
    </div>
</template>

<script setup>
import FieldCodeJson from '../components/FieldCodeJson.vue'

import { ref } from 'vue'

const data = ref({
    preguntas: [
        {
            text: "¿Qué prefieres?",
            options: ["Opción 1", "Opción 2"]
        },
        {
            text: "¿Qué prefieres?",
            options: ["Opción 1", "Opción 2"]
        }
    ]
})

</script>
