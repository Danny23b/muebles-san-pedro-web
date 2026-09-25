<template>
  <main class="productos">
    <section class="encabezado">
      <h1>Catálogo de productos</h1>
      <p>Conoce algunos de los productos disponibles en Muebles San Pedro.</p>
    </section>

    <div class="categorias">
      <button>Todos</button>
      <button>Salas</button>
      <button>Comedores</button>
      <button>Recámaras</button>
      <button>Sillones</button>
    </div>

    <section class="catalogo">
      <ProductCard v-for="product in productos" :key="product.id" :product="product" />
    </section>
  </main>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";

const productos = [
  {
    id: 1,
    nombre: "Sala contemporánea",
    categoria: "Salas",
    descripcion: "Sala diseñada para brindar comodidad y estilo al hogar.",
    precio: 12500,
    imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  },
  {
    id: 2,
    nombre: "Comedor de madera",
    categoria: "Comedores",
    descripcion: "Comedor de diseño moderno para espacios familiares.",
    precio: 9800,
    imagen: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
  },
  {
    id: 3,
    nombre: "Recámara matrimonial",
    categoria: "Recámaras",
    descripcion: "Conjunto de recámara pensado para brindar comodidad.",
    precio: 15700,
    imagen: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 4,
    nombre: "Sillón individual",
    categoria: "Sillones",
    descripcion: "Sillón individual para complementar diferentes espacios.",
    precio: 4500,
    imagen: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
  },
];
</script>

<style scoped>
.productos {
  padding: 50px 30px;
  max-width: 1200px;
  margin: auto;
}

.encabezado {
  text-align: center;
  margin-bottom: 40px;
}

.encabezado h1 {
  margin-bottom: 10px;
}

.catalogo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.categorias {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 35px;
  flex-wrap: wrap;
}

.categorias button {
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 6px;
  background: white;
  color: #333;
  cursor: pointer;
}

.categorias button:hover {
  background: #333;
  color: white;
}

@media (max-width: 768px) {
  .catalogo {
    grid-template-columns: 1fr;
  }
}
</style>
