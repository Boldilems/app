<template>
    <div class="respuesta-option-wrapper position-relative">
        <div class="respuesta-option d-flex justify-content-center align-items-center text-white fw-bold"
            :class="variant === 'one' ? 'bg-primary' : 'bg-danger'" @click="$emit('select', option)">
            <div class="respuesta-option overlay-jugador">
                <span v-for="(jugador, index) in jugadores" :key="index" :style="{ backgroundColor: jugador.color }">{{
                    jugador.name }}</span>
            </div>
            <input class="visually-hidden" type="radio" :id="'option-' + index" name="respuesta" :value="option"
                :checked="selected === option" @change="$emit('select', option)" />
            <label class="stretched-label text-center w-100 h-100 d-flex justify-content-center align-items-center"
                :for="'option-' + index">
                {{ option }}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        option: String,
        index: Number,
        selected: String,
        jugadores: Array, // Recibimos el array de jugadores
        variant: String
    }
}
</script>

<style scoped>
.respuesta-option {
    height: 35vh;
    width: 100%;
    border-radius: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.respuesta-option:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.stretched-label {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    line-clamp: 3;
}

.overlay-jugador.respuesta-option {
    position: absolute;
    top: 0;
    height: 25%;
    width: 100%;
    border-radius: 20px 20px 0 0;
    display: flex;
    align-items: start;
    font-size: 1.1rem;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    padding: 0 10px 0 10px;
}

.overlay-jugador.respuesta-option:hover {
    transform: scale(1);
    box-shadow: 0 0;
}

.overlay-jugador.respuesta-option span {
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.overlay-jugador.respuesta-option span:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
    .respuesta-option {
        height: 50vh;
        /* Aumenta más la altura de las respuestas */
        font-size: 1.5rem;
        /* Tamaño de fuente más grande */
    }

    h3 {
        font-size: 1.75rem;
        /* Aumenta aún más el tamaño del título */
        margin-bottom: 2rem;
        /* Más espacio debajo del título */
    }

    .btn {
        font-size: 1.2rem;
        /* Tamaño de los botones */
        padding: 1rem 2rem;
        /* Botones más grandes */
    }

    .gap-3 {
        gap: 2rem;
        /* Aumenta el espacio entre los elementos */
    }

    .row {
        margin-top: 3rem;
        /* Más espacio arriba */
        margin-bottom: 3rem;
        /* Más espacio abajo */
    }

    .col-md-4 {
        padding-left: 15px;
        /* Reduce el margen de los lados en pantallas grandes */
        padding-right: 15px;
        /* Reduce el margen de los lados en pantallas grandes */
    }

    .container-fluid {
        padding-left: 15px;
        /* Reduce los márgenes laterales */
        padding-right: 15px;
        /* Reduce los márgenes laterales */
    }
}

@media (max-width: 768px) {
    .respuesta-option {
        height: 25vh !important;
        font-size: 1.1rem !important;
    }

    h3 {
        font-size: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .btn {
        font-size: 0.9rem !important;
        padding: 0.5rem 1rem !important;
    }

    .gap-3 {
        gap: 1rem !important;
    }

    .row {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}
</style>
