import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  // Загружаем из localStorage при инициализации
  const saved = localStorage.getItem('cart-items')
  if (saved) {
    items.value = JSON.parse(saved)
  }

  // Сохраняем в localStorage при изменении items
  watch(items, (newItems) => {
    localStorage.setItem('cart-items', JSON.stringify(newItems))
  }, { deep: true })

  function addToCart(product) {
    const existing = items.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(productId) {
    items.value = items.value.filter(item => item.id !== productId)
  }

  function clearCart() {
    items.value = []
  }

  return { items, addToCart, removeFromCart, clearCart }
})
