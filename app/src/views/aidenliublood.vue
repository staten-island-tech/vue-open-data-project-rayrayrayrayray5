<template>
  <div>
<<<<<<< HEAD
    <input v-model="search" placeholder="Search school..." class="search" />

    <SatChart :scores="filteredScores" />

    <AidenLiu v-for="score in filteredScores" :key="score.dbn" :scores="score" />
=======
    <AidenLiu v-for="score in scores" :key="score.dbn" :scores="score"></AidenLiu>
>>>>>>> parent of 74c5ff1 (mr whalen can you say gambare gambare)
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AidenLiu from '@/components/aidenliurawlambchops.vue'
const scores = ref([])
async function getScores() {
  const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  const data = await response.json()
  console.log(data)
  scores.value = data
}
onMounted(() => {
  getScores()
})
</script>

<style scoped></style>
