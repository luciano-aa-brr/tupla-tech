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
// La lógica de envío se puede conectar más adelante con una API o un webhook de correo
</script>

<style scoped>
.contacto {
  background-color: #1B2430;
  color: #F5F5F5;
  padding: 3rem 2rem;
}

.contenedor {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

label {
  text-align: left;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background-color: #F5F5F5;
  color: #1B2430;
  font-size: 1rem;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  padding: 0.8rem;
  background-color: #92C7CF;
  color: #1B2430;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #79b5bb;
}
</style>