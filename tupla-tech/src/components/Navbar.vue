<template>
  <nav class="navbar">
    <router-link to="/" class="logo">Tupla Tech</router-link>
    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/servicios">Servicios</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>


