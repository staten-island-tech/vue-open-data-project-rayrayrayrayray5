<template>
  <router-link :to="satPath" class="card">
    <h2>{{ scores.school_name }}</h2>
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

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>
