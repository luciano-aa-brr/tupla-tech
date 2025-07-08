<template>
  <section class="inicio">
    <div class="contenido">
      <h1>Bienvenido a <span class="marca">Tupla Tech</span></h1>
      <p>Reparación profesional de celulares y desarrollo de soluciones digitales a medida.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Por ahora no necesitamos lógica, pero podemos sumar props o composables más adelante
</script>

<style scoped>
.inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  background-color: #1B2430; /* Fondo principal oscuro de tu paleta */
  color: #F5F5F5;
  padding: 2rem;
}

.contenido h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contenido p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.marca {
  color: #92C7CF; /* Azul verdoso característico de tu logo */
}
</style>