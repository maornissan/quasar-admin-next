<template>
  <q-page padding>
    <div class="row justify-center content-stretch">
      <div class="col-grow mx-1">
        <stat-card :title="'Users'" :amount="'1,291'" :icon="'person'" />
      </div>

      <div class="col-grow mx-1">
        <stat-card :title="'Unread mails'" :amount="'49'" :icon="'email'" />
      </div>
      <div class="col-grow mx-1">
        <stat-card
          :title="'Total orders'"
          :amount="'911'"
          :icon="'shopping_cart'"
        />
      </div>
      <div class="col-grow mx-1">
        <stat-card
          :title="'Total transactions'"
          :amount="'$42,192'"
          :icon="'paid'"
        />
      </div>
    </div>
    <div class="row my-5 items-stretch content-stretch">
      <bar-chart class="mx-3 col-12 col-sm-5" />
      <doughnut-chart class="mx-3 col-12 col-sm-3" />
      <pie-chart class="mx-3 col-12 col-sm-3" />
    </div>
    <div class="row my-2 items-stretch content-stretch">
      <line-chart class="col-12" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import StatCard from '/src/components/dashboard/StatCard.vue';
import BarChart from '/src/components/dashboard/charts/BarChart.vue';
import DoughnutChart from '/src/components/dashboard/charts/DoughnutChart.vue';
import PieChart from '/src/components/dashboard/charts/PieChart.vue';
import LineChart from '/src/components/dashboard/charts/LineChart.vue';
</script>
