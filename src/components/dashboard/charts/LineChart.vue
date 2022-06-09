<template>
  <Line
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
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);
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
  chartId = 'line-chart',
  width = 400,
  height = 400,
  cssClasses = '',
  styles = {},
  plugins = [],
} = defineProps<Props>();
const chartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Total orders per month',
      backgroundColor: '#f87979',
      data: [
        51, 80, 101, 191, 401, 705, 811, 899, 1024, 1301, 1399, 1591, 1822,
      ],
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style></style>
