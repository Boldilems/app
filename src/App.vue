<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <!-- Menú -->
    <AppMenu />

    <header class="bg-blue-600 text-white dark:text-gray-100  py-4 shadow">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold">Juego de Preguntas</h1>
      </div>
    </header>

    <main class="container mx-auto px-4 py-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import AppMenu from './components/AppMenu.vue'; // Asegúrate de importar el componente
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>
