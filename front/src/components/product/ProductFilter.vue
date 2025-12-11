<template>
  <div class="product-filter">
    <label>
      Filter by type:
      <select v-model="filterCriteria.type">
        <option value="">All types</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </label>

    <label>
      Sort by:
      <select v-model="filterCriteria.sort">
        <option value="name-asc">Name A → Z</option>
        <option value="name-desc">Name Z → A</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
      </select>
    </label>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const filterCriteria = inject('filterCriteria')

if (!filterCriteria) {
  throw new Error('filterCriteria is not provided')
}

const types = ["Knives", "Fixed", "Multitools", "Machete", "Axe", "Shovel", "Crossbow"]
</script>

<style scoped lang="scss">
@import '../../styles/product/ProductFilter.scss';

</style>
