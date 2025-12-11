<template>
  <div class="product-detail">
    <div class="product-detail__content">
      <div class="skeleton">
        <div class="skeleton__image" />
        <div class="skeleton__line short" />
        <div class="skeleton__line" />
        <div class="skeleton__line" />
        <div class="skeleton__line long" />
      </div>

      <div class="message">
        <h2>Product page under development</h2>
        <p>Nothing here yet, but detailed product information will appear soon.</p>
        <button class="back-button" @click="goBack">Back to Home</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<style scoped lang="scss">
@import '../../styles/views/ProductDetail.scss';

</style>
