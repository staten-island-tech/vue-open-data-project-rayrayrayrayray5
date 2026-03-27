<template>
  <div>
    <SatChart :scores="scores" />

    <AidenLiu v-for="score in scores" :key="score.dbn" :scores="score" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AidenLiu from '@/components/aidenliurawlambchops.vue'
import SatChart from '@/components/SatChart.vue'

const scores = ref([])

async function getScores() {
  const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  const data = await response.json()
  scores.value = data
}

onMounted(getScores)
</script>
