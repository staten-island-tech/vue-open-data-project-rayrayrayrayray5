<template>
  <div class="card">
    <h2>{{ scores.school_name }}</h2>
    <h2>Math: {{ scores.sat_math_avg_score }}</h2>
    <h2>Reading: {{ scores.sat_critical_reading_avg_score }}</h2>
    <h2>Writing: {{ scores.sat_writing_avg_score }}</h2>
  </div>
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
