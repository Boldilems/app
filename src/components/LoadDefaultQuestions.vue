<template>
    <h1 class="m-2 text-center">Dilemas Predefinidos</h1>
    <div class="m-2 d-flex justify-content-center align-items-stretch w-100 flex-wrap gap-3">
        <div v-for="(file, index) in files" :key="index" class="dilems card text-center" style="width: 18rem;">
            <img :src="`/app/DefaultQuestions/${file}/img.png`" class="card-img-top img-fluid" alt="Imagen"
                style="height: 180px; object-fit: cover;" />
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{{ file }}</h5>
                <button @click="dilemas(file)" class="btn btn-primary mt-auto">
                    Seleccionar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useGameStore } from '../stores/useGameStore'

export default {
    name: 'DilemasPredefinidos',
    setup(props, { emit }) {
        const store = useGameStore()

        const files = [
            'dilems',
            'dilems2',
            'dilems3',
            'dilems4',
            'dilems5',
            'dilems6',
        ]

        async function dilemas(file) {
            await store.cargarPreguntasPredefinidas(file)
        }

        return {
            files,
            dilemas,
        }
    },
}

</script>

<style>
.dilems {
    transition: all 0.5s ease-in-out;
}

.dilems:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
</style>
