<template>
    <h1 class="m-2 text-center">Dilemas Predefinidos</h1>
    <div class="m-2 d-flex justify-content-center align-items-stretch w-100 flex-wrap gap-3">
        <div v-for="(file, index) in files" :key="index" class="dilems card text-center" style="width: 18rem;"
            :disabled="store.disableDilem(file)">
            <img :src="`/app/DefaultDilems/${file}/img.png`" class="card-img-top img-fluid" alt="Imagen"
                style="height: 180px; object-fit: cover;" />
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{{ file }}</h5>
                <button @click="dilemas(file)" class="btn btn-primary mt-auto" :disabled="store.disableDilem(file)">
                    Seleccionar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGameStore } from '../stores/useGameStore'

const store = useGameStore()

const files = [
    'Fast Dilemas Casual',
    'Conocerte Mejor',
    'Dilems Amor Edition',
    'Dilems Red PIll',
]

async function dilemas(file) {
    await store.cargarDilemsPredefinidas(file)
    redirect()
}

function redirect() {
    store.router.push({ name: 'playDilems' })
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

.dilems[disabled="true"]:hover {
    transform: scale(1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
    cursor: not-allowed;
}
</style>
