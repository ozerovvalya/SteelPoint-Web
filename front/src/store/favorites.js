// store/favorites.js
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const items = ref([])

  const saved = localStorage.getItem('favorite-items')
  if (saved) {
    items.value = JSON.parse(saved)
  }

  watch(items, (newItems) => {
    localStorage.setItem('favorite-items', JSON.stringify(newItems))
  }, { deep: true })

  function toggleFavorite(product) {
    const index = items.value.findIndex(p => p.id === product.id)
    if (index === -1) {
      items.value.push(product)
    } else {
      items.value.splice(index, 1)
    }
  }

  function isFavorite(id) {
    return items.value.some(p => p.id === id)
  }

  return { items, toggleFavorite, isFavorite }
})