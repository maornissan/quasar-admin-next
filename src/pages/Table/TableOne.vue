<template>
  <div class="q-pa-md">
    <q-table
      :loading="loading"
      flat
      bordered
      wrap-cells
      binary-state-sort
      :rows="rows.products"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td auto-width key="title" :props="props">
            {{ props.row.title }}
            <q-popup-edit v-model="props.row.title" buttons v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td auto-width key="price" :props="props">
            ${{ props.row.price }}
            <q-popup-edit
              auto-save
              v-model="props.row.price"
              buttons
              v-slot="scope"
            >
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td auto-width key="description" :props="props">
            {{ props.row.description }}
            <q-popup-edit
              v-model="props.row.description"
              buttons
              v-slot="scope"
            >
              <q-input
                v-model="scope.value"
                dense
                autofocus
                counter
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>
          <q-td auto-width key="category" :props="props">
            <q-badge color="primary">
              {{ props.row.category }}
            </q-badge>
          </q-td>
          <q-td auto-width key="image" :props="props">
            <q-img class="rounded w-10" :src="props.row.image" />
          </q-td>
          <q-td auto-width key="rating" :props="props">
            <q-badge color="accent">
              {{ props.row.rating.rate }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from 'src/types/Product';
import { onMounted, reactive, ref } from 'vue';
const loading = ref(true);
const rows = reactive({
  products: [] as IProduct[],
});
onMounted(async () => {
  await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => (rows.products = json))
    .finally(() => (loading.value = false));
});
</script>

<style></style>
