<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale)

const data = {
  labels: ['A', 'B'],
  datasets: [{ data: [1, 2] }],
}
</script>

<template>
  <div style="height: 400px">
    <Bar :data="data" />
  </div>
</template>
