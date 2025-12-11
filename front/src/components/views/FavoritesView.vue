<template>
  <div class="favorites">
    <h2>Favorite Products</h2>
    <div v-if="favorites.items.length === 0">
      No favorite products.
    </div>
    <div v-else class="products-list">
      <ProductCard
        v-for="product in favorites.items"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/product/ProductCard.vue'
import { useFavoritesStore } from '@/store/favorites.js'

const favorites = useFavoritesStore()
</script>

<style scoped lang="scss">
@import '../../styles/views/FavoritesView.scss';

</style>
