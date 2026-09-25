<template>
  <article class="product-card">
    <img :src="product.imagen" :alt="product.nombre" class="product-image" />

    <div class="product-info">
      <span class="product-category">
        {{ product.categoria }}
      </span>

      <h2>{{ product.nombre }}</h2>

      <p>{{ product.descripcion }}</p>

      <p class="product-price">${{ product.precio.toLocaleString("es-MX") }} MXN</p>

      <button>Solicitar información</button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.product-info {
  padding: 20px;
}

.product-category {
  font-size: 0.85rem;
  color: #666;
}

.product-info h2 {
  margin: 8px 0;
}

.product-info p {
  color: #555;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #222 !important;
}

button {
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  background: #333;
  color: white;
}

button:hover {
  opacity: 0.85;
}
</style>
