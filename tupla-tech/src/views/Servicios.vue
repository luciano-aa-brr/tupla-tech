<template>
  <section>
    <h1>Servicios de Tupla Tech</h1>
    <p>Todo lo que podemos hacer por tus dispositivos y tus ideas digitales.</p>
  </section>
</template>

<script setup lang="ts">
// Por ahora no necesitamos lógica, pero podemos sumar props o composables más adelante
</script>

<style scoped>
.servicios {
  background-color: #F5F5F5; /* fondo claro */
  color: #1B2430;           /* texto oscuro */
  padding: 3rem 2rem;
  min-height: 80vh;
}

.contenedor {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #1B2430;
}

.lista-servicios {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.lista-servicios li {
  background-color: #ffffff;
  border-left: 6px solid #92C7CF; /* azul verdoso de tu marca */
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.lista-servicios li:hover {
  transform: translateY(-5px);
}

.lista-servicios h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #1B2430;
}

.lista-servicios p {
  font-size: 1rem;
  margin: 0;
}
</style>