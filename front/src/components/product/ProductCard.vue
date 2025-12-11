<template>
  <div class="product-card" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="product-card__top">
      <router-link :to="`/product/${product.id}`" class="product-card__link">
        <img :src="product.image" :alt="product.name" class="product-card__image" />
        <h3 class="product-card__name">{{ product.name }}</h3>
        <p class="product-card__price">{{ product.price }} €</p>
      </router-link>

      <p class="product-card__description" :class="{ visible: hover }">
        {{ product.description }}
      </p>
    </div>

    <div class="button-container">
      <button class="product-card__button" type="button" @click="addToCart">
        Add to cart
      </button>
      <button
        class="product-card__button favorite-button"
        :class="{ active: isFavorite }"
        @click="toggleFavorite"
        title="Add to favorites"
      >
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/store/drawer.js'
import { useFavoritesStore } from '@/store/favorites.js'

const { product } = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const hover = ref(false)
const cart = useCartStore()
const favorites = useFavoritesStore()

const addToCart = () => {
  cart.addToCart(product)
}

const toggleFavorite = () => {
  favorites.toggleFavorite(product)
}

const isFavorite = computed(() => favorites.isFavorite(product.id))
</script>

<style scoped lang="scss">
@import '../../styles/product/ProductCard.scss';

</style>
