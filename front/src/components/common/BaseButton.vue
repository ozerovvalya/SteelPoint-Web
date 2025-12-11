<template>
  <button :class="['base-button', ...modifiers]">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modifier: {
    type: String,
    default: '', // e.g., 'hover active large'
  },
})

const modifiers = computed(() =>
  props.modifier
    .split(' ')
    .filter(Boolean)
    .map(mod => `base-button--${mod}`)
)
</script>

<style lang="scss" scoped>
@import '../../styles/common/BaseButton.scss';

</style>
