<template>
  <div>
    <h2>{{ scores.value }}</h2>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const scores = ref({})
async function getScores() {
  const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  const data = await response.json()
  scores.value = data
}
onMounted(function () {
  getScores(route.params)
})
</script>

<style scoped></style>
