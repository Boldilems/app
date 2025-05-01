<script setup>
import AppMenu from './components/AppMenu.vue'
import AppMessages from './components/AppMessages.vue'
</script>

<template>


  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <header>
      <AppMenu />
    </header>

    <main class="container-fluid mx-auto px-5 py-5 flex justify-center items-center">
      <RouterView />
    </main>
  </div>
  <AppMessages />
</template>


<style>
/* Add any global styles here */
</style>
