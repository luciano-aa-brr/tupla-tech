import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue' 
import Servicios from '../views/Servicios.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  {path: '/', name: 'Inicio', component: Inicio},
  {path: '/Servicios', name: 'Servicios', component: Servicios},
  {path: '/Contacto', name: 'Contacto', component: Contacto}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router