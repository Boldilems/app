<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div>
            <h1>Aplicaciones para Dilems de ¿Qué prefieres?</h1>
            <h2 class="m-3 mb-5">Primero se tienen que cargar las dilems:</h2>
            <p>Las dilems se pasan por JSON con el siguiente formato:</p>
            <FieldCodeJson :jsonObject="data" />
        </div>
    </div>
</template>

<script setup>
import FieldCodeJson from '../components/FieldCodeJson.vue'

import { ref } from 'vue'

const data = ref(
    [
        {
            "dilem": "Que prefieres?",
            "opciones": [
                {
                    "opcion": "Respuesta 1"
                },
                {
                    "opcion": "Respuesta 2"
                }
            ]
        },
        {
            "dilem": "Que prefieres?",
            "opciones": [
                {
                    "opcion": "Respuesta 1"
                },
                {
                    "opcion": "Respuesta 2"
                }
            ]
        },
    ]
)

</script>
