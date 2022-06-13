<template>
  <div class="q-pa-md">
    <q-table
      title="Categories"
      :rows="products.categories"
      :columns="columns"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
    >
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from 'src/types/Product';
import { onMounted, reactive, ref } from 'vue';
const products = reactive({
  products: [] as IProduct[],
  categories: [],
});
const selected = ref([]);
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Category name',
    align: 'left',
    field: (row) => row,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'available',
    align: 'center',
    label: 'Available',
    field: 'Available',
    sortable: true,
  },
];

onMounted(async () => {
  await fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((json) => (products.categories = json));
});
</script>

<style></style>
