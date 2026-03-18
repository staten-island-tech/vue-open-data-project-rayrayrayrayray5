<template>
  <div>
    <h2 v-for="score in scores">{{ score.school_name }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const scores = ref({})
async function getScores() {
  const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  const data = await response.json()
  scores.value = data
}
onMounted(() => {
  getScores()
})
</script>

<style scoped></style>
