<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chartId="chartId"
    :width="width"
    :height="height"
    :cssClasses="cssClasses"
    :styles="styles"
    :plugins="plugins"
  />
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  Plugin,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

interface Props {
  chartId?: string;
  width?: number;
  height?: number;
  cssClasses?: string;
  styles?: object;
  plugins?: [];
}
// eslint-disable-next-line vue/no-setup-props-destructure
const {
  chartId = 'doughnut-chart',
  width = 400,
  height = 400,
  cssClasses = '',
  styles = {},
  plugins = [],
} = defineProps<Props>();
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
const chartData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      backgroundColor: ['#005f73', '#0a9396', '#94d2bd', '#e9d8a6'],
      data: [40, 20, 80, 10],
    },
  ],
};
</script>

<style></style>
