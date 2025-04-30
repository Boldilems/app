<template>
    <div class="answer-option d-flex justify-content-center align-items-center text-white fw-bold"
        :class="variant === 'one' ? 'bg-primary' : 'bg-danger'" @click="$emit('select', option)">
        <input class="visually-hidden" type="radio" :id="'option-' + index" name="answer" :value="option"
            :checked="selected === option" @change="$emit('select', option)" />
        <label class="stretched-label text-center w-100 h-100 d-flex justify-content-center align-items-center"
            :for="'option-' + index">
            {{ option }}
        </label>
    </div>
</template>

<script setup>
defineProps({
    option: String,
    index: Number,
    selected: String,
    variant: {
        type: String,
        default: 'one'
    }
})
defineEmits(['select'])
</script>

<style scoped>
.answer-option {
    height: 35vh;
    width: 100%;
    border-radius: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.2s ease;
    overflow: hidden;
}

.answer-option:hover {
    transform: scale(1.02);
}

.stretched-label {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    line-clamp: 3;
}

@media (min-width: 768px) {
    .answer-option {
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
    .answer-option {
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
