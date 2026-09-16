<template>
  <main>
    <section class="hero">
      <h1>Bienvenido a Muebles San Pedro</h1>
      <p>Encuentra muebles para transformar y mejorar los espacios de tu hogar.</p>

      <RouterLink to="/productos" class="btn"> Ver productos </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 80px 20px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 6px;
  background: #333;
  color: white;
}
</style>
