<template>
  <section class="contacto">
    <div class="contenedor">
      <h1 class="titulo">Comunicate con Tupla Tech</h1>
      <p class="descripcion">Mandanos tus dudas, ideas o proyectos. ¡Nos encanta ayudar!</p>

      <form class="formulario">
        <label>
          Nombre:
          <input type="text" placeholder="Tu nombre" />
        </label>

        <label>
          Correo electrónico:
          <input type="email" placeholder="tu@correo.com" />
        </label>

        <label>
          Mensaje:
          <textarea placeholder="Dinos tu consulta..."></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
