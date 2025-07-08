<template>
  <section class="contacto">
    <div class="contenedor">
      <h1>Contáctanos</h1>
      <p>¿Necesitás ayuda con tu celular o querés desarrollar tu próxima app? ¡Escribinos!</p>

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
          <textarea placeholder="Escribí tu consulta aquí..."></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
