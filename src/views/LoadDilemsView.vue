<!-- src/views/HomeView.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <LoadDilems />
        <LoadDefaultDilems />
    </div>
</template>

<script setup>
import LoadDilems from '../components/LoadDilems.vue'
import LoadDefaultDilems from '../components/LoadDefaultDilems.vue'
</script>
