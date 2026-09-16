<template>
  <header>
    <nav>
      <h2>Muebles San Pedro</h2>

      <div class="menu">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/productos">Productos</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding: 20px;
  background: #f5f5f5;
}

nav {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
  gap: 20px;
}

.menu a {
  text-decoration: none;
  color: #333;
}
</style>
