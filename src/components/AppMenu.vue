<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand d-flex align-items-center" to="/">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" class="me-2" height="30" />
                <span>Flowbite</span>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Company
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><router-link class="dropdown-item" to="/jugar">Jugar</router-link></li>
                        </ul>
                    </li> -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/jugar">Jugar</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
// No se requiere lógica adicional porque Vue Router maneja la navegación.
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>