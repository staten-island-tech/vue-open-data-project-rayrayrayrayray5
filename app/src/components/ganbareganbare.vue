<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  scores: Array,
})

const chartData = computed(() => {
  return {
    labels: props.scores.slice(0, 20).map((liu) => liu.school_name),
    datasets: [
      {
        label: 'Math',
        data: props.scores.slice(0, 20).map((liu) => Number(liu.sat_math_avg_score)),
        backgroundColor: 'red',
      },
      {
        label: 'Reading',
        data: props.scores.slice(0, 20).map((liu) => Number(liu.sat_critical_reading_avg_score)),
        backgroundColor: 'blue',
      },
      {
        label: 'Writing',
        data: props.scores.slice(0, 20).map((liu) => Number(liu.sat_writing_avg_score)),
        backgroundColor: 'green',
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>

<style scoped>
canvas {
  max-height: 400px;
}
</style>
