<template>
  <div class="drawer" v-if="isOpen">
    <div class="drawer__content">
      <button @click="closeDrawer" class="drawer__close-button">×</button>
      <h3 class="drawer__title">Cart</h3>

      <p class="drawer__empty" v-if="cart.items.length === 0">Your cart is empty</p>

      <ul class="drawer__list" v-else>
        <li class="drawer__item" v-for="item in cart.items" :key="item.id">
          <div class="drawer__item-info">
            <strong class="drawer__item-name">{{ item.name }}</strong>
            <span class="drawer__item-price">{{ item.price }} € × {{ item.quantity }}</span>
            <span class="drawer__item-subtotal">{{ item.price * item.quantity }} €</span>
          </div>
          <button @click="cart.removeFromCart(item.id)" class="drawer__remove-button">
            Remove
          </button>
        </li>
      </ul>

      <div class="drawer__footer" v-if="cart.items.length > 0">
        <strong class="drawer__total">Total: {{ totalPrice }} €</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/drawer.js'

const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])

const cart = useCartStore()
const closeDrawer = () => emit('close')

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>

<style lang="scss" scoped>
@import '../../styles/layout/TheDrawer.scss';

</style>
