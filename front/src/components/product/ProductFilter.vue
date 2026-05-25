<template>
  <div class="product-filter">
    <div class="product-filter__item">
      <label for="type-filter">Filter by type:</label>
      <select id="type-filter" v-model="filterCriteria.type">
        <option value="">All types</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

    <div class="product-filter__item">
      <label for="sort-filter">Sort by:</label>
      <select id="sort-filter" v-model="filterCriteria.sort">
        <option value="name-asc">Name A → Z</option>
        <option value="name-desc">Name Z → A</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
      </select>
    </div>
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

.product-filter {
  display: flex;
  align-items: flex-end;
  gap: 28px;
}
.product-filter__item {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 18px;
    font-weight: 600;
  }
  select {
    min-width: 160px;
    padding: 8px 12px;
    font-size: 16px;
  }
}
</style>
