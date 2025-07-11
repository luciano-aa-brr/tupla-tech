import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue' 
import Servicios from '../views/Servicios.vue'
import Contacto from '../views/Contacto.vue'
import Cursos from '@/views/Cursos.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/servicios', name: 'Servicios', component: Servicios },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/cursos', name: 'Cursos', component: Cursos }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router