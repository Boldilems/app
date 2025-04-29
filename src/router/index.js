// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
// import SummaryView from '../views/SummaryView.vue'



const routes = [
    { path: '/app', component: GameView, name: 'app' },
    { path: '/load', component: HomeView, name: 'loadDilems' },
    { path: '/jugar', component: GameView, name: 'playDilems' },
    // { path: '/resumen', component: SummaryView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
