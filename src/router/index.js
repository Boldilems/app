// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
// import SummaryView from '../views/SummaryView.vue'



const routes = [
    { path: '/app', component: HomeView },
    { path: '/jugar', component: GameView },
    // { path: '/resumen', component: SummaryView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
