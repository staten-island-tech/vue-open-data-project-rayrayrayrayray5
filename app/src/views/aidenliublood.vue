<template>
  <div>
    <h2>{{ scores.school_name }}</h2>
    <h2>{{ scores.sat_math_avg_score }}</h2>
    <h2>{{ scores.sat_writing_avg_score }}</h2>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const scores = ref({})
async function getScores(liu) {
  const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  const data = await response.json()
  scores.value = data
}
onMounted(function () {
  getScores(route.params.liu)
})
watch(
  () => route.params.liu,
  function (liu) {
    getScores(liu)
  },
)
</script>

<style scoped></style>
