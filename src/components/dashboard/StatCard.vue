<template>
  <div class="col-3">
    <q-card
      @mouseover="hovered = true"
      @mouseout="hovered = false"
      flat
      bordered
    >
      <q-card-section horizontal>
        <q-tooltip>
          <p class="text-h6">{{ props.title + ': ' + props.amount }}</p>
        </q-tooltip>
        <div class="col-3 p-5 items-center flex">
          <q-icon
            class="border p-2"
            :class="
              hovered
                ? 'transition-colors duration-300 bg-black text-white'
                : ''
            "
            size="44px"
            :name="icon"
          />
        </div>
        <div class="col-9 text-right flex flex-col p-2 justify-between">
          <span class="font-semibold p-0">{{ props.title }}</span>
          <span class="text-h6 p-0">{{ props.amount }}</span>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

const props = defineProps({
  title: String,
  amount: String,
  icon: String,
});
const hovered = ref(false);
</script>
