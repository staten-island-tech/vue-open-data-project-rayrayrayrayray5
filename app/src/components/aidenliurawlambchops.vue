<template>
  <router-link :to="satPath" class="card">
    <h2>{{ scores.value }}</h2>
  </router-link>
</template>

<script setup>
const props = defineProps({
  scores: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>
