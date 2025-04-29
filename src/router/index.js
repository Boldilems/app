// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoadDilemsView from '../views/LoadDilemsView.vue'
import GameView from '../views/GameView.vue'
import HomeView from '../views/HomeView.vue'
// import SummaryView from '../views/SummaryView.vue'



const routes = [
    { path: '/app', component: HomeView, name: 'app' },
    { path: '/load', component: LoadDilemsView, name: 'loadDilems' },
    { path: '/jugar', component: GameView, name: 'playDilems' },
    // { path: '/resumen', component: SummaryView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
