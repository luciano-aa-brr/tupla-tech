<template>
  <section class="cursos-grid">
    <div class="contenedor">
      <h1>📚 Mis Certificaciones</h1>
      <div class="tarjetas">
        <div v-for="(curso, index) in cursos" :key="index" class="tarjeta">
          <img :src="curso.imagen" :alt="curso.titulo" />
          <h2>{{ curso.titulo }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cursos = [
  {
    titulo: 'Cisco: IT Essentials',
    imagen: 'src/assets/certificados/it-essentials.png'
  },
  {
    titulo: 'Cisco: Networking Basics',
    imagen: 'src/assets/certificados/networking-basics.png'
  },
  {
    titulo: 'cisco: Python Essentials 1',
    imagen: 'src/assets/certificados/python-essentials-1.1.png'
  },
  {
    titulo: 'Cisco: Python Essentials 2',
    imagen: 'src/assets/certificados/python-essentials-2.png'
  }
  
]
</script>