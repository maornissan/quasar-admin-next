<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { PropType, reactive } from 'vue-demi';
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
interface Props {
  chartId?: string;
  datasetIdKey?: string;
  width?: number;
  height?: number;
  cssClasses?: string;
  styles?: object;
  plugins?: [];
}
// eslint-disable-next-line vue/no-setup-props-destructure
const {
  chartId = 'bar-chart',
  datasetIdKey = 'label',
  width = 400,
  height = 400,
  cssClasses = '',
  styles = {},
  plugins = [],
} = defineProps<Props>();
const chartData = reactive({
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'September',
    'November',
    'December',
  ],
  datasets: [
    {
      data: [
        51, 80, 101, 191, 401, 705, 811, 899, 1024, 1301, 1399, 1591, 1822,
      ],
      label: 'Total transactions',
      backgroundColor: '#000000',
    },
  ],
});
const chartOptions = reactive({ responsive: true });
</script>

<style></style>
