<template>
  <header class="header">
    <router-link to="/" @click="resetFilters" class="header__logo-link" title="Home"></router-link>

    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <router-link to="/" @click="resetFilters" class="header__nav-link" title="Home">Home</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/" @click="resetFilters" class="header__nav-link" title="Shop">Shop</router-link>
        </li>
        <li class="header__nav-item">
          <a href="#" class="header__nav-link" title="Coming soon">About Us</a>
        </li>
        <li class="header__nav-item">
          <a href="#" class="header__nav-link" title="Coming soon">Contact</a>
        </li>
      </ul>
    </nav>

    <div class="header__icons">
      <button @click="openDrawer" class="header__icon-btn header__icon-btn--drawer" title="Cart">
        <span v-if="cartCount > 0" class="header__cart-count">{{ cartCount }}</span>
      </button>

      <router-link to="/favorites" class="header__icon-btn header__icon-btn--favorite" title="Favorites">
        <span class="header__tooltip">Favorites</span>
      </router-link>

      <button class="header__icon-btn header__icon-btn--profile" title="Profile">
        <span class="header__tooltip">Guest. Profile is in work yet...</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useCartStore } from '@/store/drawer'

const emit = defineEmits(['toggle-drawer'])
const openDrawer = () => emit('toggle-drawer')

const cart = useCartStore()

const cartCount = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity, 0)
)

const resetFilters = inject('resetFilters')

// Warn if inject is undefined
if (!resetFilters) {
  console.warn('resetFilters is not provided!')
}
</script>

<style scoped lang="scss">
@import '../../styles/layout/TheHeader.scss';

</style>
