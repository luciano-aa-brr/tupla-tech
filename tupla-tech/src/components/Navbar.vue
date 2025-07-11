<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
  <img src="@/assets/LogoTransparente.png" alt="Tupla Tech Logo" class="logo-img" />
</router-link>

    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/servicios">Servicios</router-link></li>
      <li><router-link to="/Cursos">Cursos</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>
<script>
  import { RouterLink } from 'vue-router';
</script>


