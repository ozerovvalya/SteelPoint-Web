<template>
  <div>
    <ProductFilter />

    <div class="product-list">
      <div class="product-list__grid" v-if="!loading && !error && pagedProducts.length > 0">
        <ProductCard
          v-for="product in pagedProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <div v-if="loading" class="product-list__status">Loading products...</div>
      <div v-else-if="error" class="product-list__status product-list__status--error">
        Failed to load products.
      </div>
      <div v-else-if="filteredProducts.length === 0" class="product-list__status">
        No products match the filter.
      </div>
    </div>

    <div class="pagination" v-if="totalPages > 1">
      <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, inject } from 'vue'
import ProductCard from './ProductCard.vue'
import ProductFilter from './ProductFilter.vue'
import { fetchAllProducts } from '@/api/products.js'

const products = ref([])
const filteredProducts = ref([])
const loading = ref(true)
const error = ref(false)

const currentPage = ref(1)
const itemsPerPage = 20

const filterCriteria = inject('filterCriteria')

if (!filterCriteria) {
  throw new Error('filterCriteria is not provided')
}

onMounted(async () => {
  try {
    const data = await fetchAllProducts()
    products.value = data
    applyFilters()
  } catch (e) {
    console.error('Product loading error:', e)
    error.value = true
  } finally {
    loading.value = false
  }
})

// Apply filtering and sorting
function applyFilters() {
  let result = [...products.value]

  // Filter by type
  if (filterCriteria.value.type) {
    const selectedType = filterCriteria.value.type.toLowerCase()
    result = result.filter(p => {
      let category = typeof p.category === 'string' ? p.category : p.category?.name
      return category?.toLowerCase() === selectedType
    })
  }

  // Sort based on selected criteria
  switch (filterCriteria.value.sort) {
    case 'name-asc':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      result.sort((a, b) => b.name.localeCompare(a.name))
      break
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
  }

  filteredProducts.value = result
}

// Watch for changes in filters or product list
watch(
  () => [filterCriteria.value.type, filterCriteria.value.sort, products.value],
  () => {
    applyFilters()
    currentPage.value = 1
  },
  { deep: true }
)

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / itemsPerPage)
)

const pagedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProducts.value.slice(start, start + itemsPerPage)
})
</script>

<style scoped lang="scss">
@import '../../styles/product/ProductList.scss';

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 10px;

  button {
    padding: 6px 15px;
    font-size: 14px;
    cursor: pointer;

    &[disabled] {
      opacity: 0.5;
      cursor: default;
    }
  }
}

.product-list__status {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #555;

  &--error {
    color: red;
  }
}
</style>
