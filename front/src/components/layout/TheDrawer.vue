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

            <span class="drawer__item-price">
              {{ formatPrice(item.price) }} × {{ item.quantity }}
            </span>

            <span class="drawer__item-subtotal">
              {{ formatPrice(item.price * item.quantity) }}
            </span>
          </div>

          <button @click="cart.removeFromCart(item.id)" class="drawer__remove-button">
            Remove
          </button>
        </li>
      </ul>

      <div class="drawer__footer" v-if="cart.items.length > 0">
        <strong class="drawer__total">
          Total: {{ formatPrice(totalPrice) }}
        </strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/drawer.js'
import { useCurrencyStore } from '@/store/currency.js'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const cart = useCartStore()
const currencyStore = useCurrencyStore()

const closeDrawer = () => emit('close')

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function formatPrice(price) {
  const amount = Number(price)
  const currency = currencyStore.selectedCurrency
  const rates = currencyStore.rates

  if (currency === 'EUR') {
    return `${amount.toFixed(2)} €`
  }

  const rate = rates[currency]

  if (!rate) {
    return `${amount.toFixed(2)} €`
  }

  const converted = amount * rate

  if (currency === 'USD') {
    return `$${converted.toFixed(2)}`
  }
  if (currency === 'GBP') {
    return `£${converted.toFixed(2)}`
  }
  return `${amount.toFixed(2)} €`
}
</script>

<style lang="scss" scoped>
@import '../../styles/layout/TheDrawer.scss';
</style>