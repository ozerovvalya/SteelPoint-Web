<template>
  <div class="product-card" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="product-card__top">
      <router-link :to="`/product/${product.id}`" class="product-card__link">
        <img :src="product.image" :alt="product.name" class="product-card__image" />
        <h3 class="product-card__name">{{ product.name }}</h3>
        <p class="product-card__price">{{ formattedPrice }}</p>
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

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  currency: {
    type: String,
    default: 'EUR'
  },
  rates: {
    type: Object,
    default: () => ({})
  }
})

const hover = ref(false)
const cart = useCartStore()
const favorites = useFavoritesStore()

const formattedPrice = computed(() => {
  const price = Number(props.product.price)

  if (props.currency === 'EUR') {
    return `${price.toFixed(2)} €`
  }

  const rate = props.rates[props.currency]

  if (!rate) {
    return `${price.toFixed(2)} €`
  }

  const convertedPrice = price * rate

  if (props.currency === 'USD') {
    return `$${convertedPrice.toFixed(2)}`
  }
  if (props.currency === 'GBP') {
    return `£${convertedPrice.toFixed(2)}`
  }
  return `${price.toFixed(2)} €`
})

const addToCart = () => {
  cart.addToCart(props.product)
}

const toggleFavorite = () => {
  favorites.toggleFavorite(props.product)
}

const isFavorite = computed(() => favorites.isFavorite(props.product.id))
</script>

<style scoped lang="scss">
@import '../../styles/product/ProductCard.scss';

</style>
