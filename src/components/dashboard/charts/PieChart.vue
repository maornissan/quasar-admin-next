<template>
  <Pie
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
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
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
  chartId = 'pie-chart',
  width = 400,
  height = 400,
  cssClasses = '',
  styles = {},
  plugins = [],
} = defineProps<Props>();
const chartData = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10],
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style></style>
