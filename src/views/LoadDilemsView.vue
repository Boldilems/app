<!-- src/views/HomeView.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <LoadQuestions />
        <LoadDefaultQuestions />
    </div>
</template>

<script setup>
import LoadQuestions from '../components/LoadQuestions.vue'
import LoadDefaultQuestions from '../components/LoadDefaultQuestions.vue'
</script>
