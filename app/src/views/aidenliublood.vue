<template>
  <div>
    <input
      :value="search"
      @input="searchAidenLiu"
      placeholder="Search For Schools"
      class="aidenliusearchbox"
    />
    <SatChart :scores="filter" :key="filter.length" />

    <AidenLiu v-for="score in filter" :key="score.dbn" :score="score" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { computed } from 'vue'
import AidenLiu from '@/components/aidenliurawlambchops.vue'
import SatChart from '@/components/ganbareganbare.vue'
const scores = ref([])
const search = ref('')

function searchAidenLiu(gambare) {
  search.value = gambare.target.value
}

onMounted(getScores)

const filter = computed(() => {
  const vincent = search.value.toLowerCase().trim()

  if (!vincent) return scores.value

  return scores.value.filter((whalen) => whalen.school_name?.toLowerCase().includes(vincent))
})

async function getScores() {
  const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  const data = await response.json()
  scores.value = data
}
</script>

<style scoped></style>
