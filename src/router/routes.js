// src/router/index.js
import LoadDilemsView from '../views/LoadDilemsView.vue'
import GameView from '../views/GameView.vue'
import HomeView from '../views/HomeView.vue'
import RespuestasView from '../views/RespuestasView.vue'
// import SummaryView from '../views/SummaryView.vue'



const routes = [
    { path: '/', redirect: '/app/' },
    { path: '/app/', component: HomeView, name: 'app' },
    { path: '/app/?load', component: LoadDilemsView, name: 'loadDilems' },
    { path: '/app/?jugar', component: GameView, name: 'playDilems' },
    { path: '/app/?download', component: RespuestasView, name: 'downloadDilems' },
]

export default routes