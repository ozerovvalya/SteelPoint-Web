<template>
  <div class="app">
    <TheHeader @toggle-drawer="isDrawerOpen = true" />

    <!-- Overlay to close drawer by clicking outside -->
    <div
      v-if="isDrawerOpen"
      class="drawer-overlay"
      @click="isDrawerOpen = false"
    ></div>

    <TheDrawer :is-open="isDrawerOpen" @close="isDrawerOpen = false" />

    <!-- Wrapped in main tag -->
    <main class="app-content">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'

import TheHeader from './components/layout/TheHeader.vue'
import TheDrawer from './components/layout/TheDrawer.vue'
import TheFooter from './components/layout/TheFooter.vue'

const isDrawerOpen = ref(false)

const filterCriteria = ref({
  type: '',
  sort: 'name-asc',
})

const applyFilters = () => {
  console.log('Filters applied:', filterCriteria.value)
}

const resetFilters = () => {
  filterCriteria.value = {
    type: '',
    sort: 'name-asc',
  }
  applyFilters()
}

// Provide filter state and reset function to descendants
provide('filterCriteria', filterCriteria)
provide('resetFilters', resetFilters)
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
}
</style>
