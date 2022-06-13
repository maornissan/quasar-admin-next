<template>
  <div class="q-pa-md">
    <q-table
      :loading="loading"
      flat
      title="Products"
      bordered
      dense
      wrap-cells
      binary-state-sort
      :rows="rows.products"
      :columns="columns"
      row-key="id"
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
            <q-badge
              class="hover:cursor-pointer"
              @click="toggleProductCategoryDialog(props.row.id)"
              color="primary"
            >
              {{ props.row.category }}
            </q-badge>
          </q-td>
          <q-td auto-width key="image" :props="props">
            <q-img
              class="rounded w-10"
              @click="toggleImageDialog(props.row.image)"
              :src="props.row.image"
            />
          </q-td>
          <q-td auto-width key="rating" :props="props">
            <q-badge color="accent">
              {{ props.row.rating.rate }}
            </q-badge>
          </q-td>
          <q-td auto-width class="mx-auto text-center">
            <q-btn
              icon="delete"
              align="center"
              dense
              flat
              label="Delete"
              @click="promptDelete(props.row.id)"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog class="p-2" v-model="imageUploadDialog.toggle">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="file_upload"
            color="primary"
            rounded
            size="1.5rem"
            text-color="white"
          /><span class="ml-2">Upload new image</span>
        </q-card-section>
        <q-space />
        <q-card-section class="p-3">
          <q-img class="p-3" :src="imageUploadDialog.image" />
          <q-uploader
            class="my-2"
            color="teal"
            flat
            bordered
            style="max-width: 300px"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Save" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog class="p-2" v-model="productDeleteDialog.toggle">
      <q-card>
        <q-card-section class="row items-center">
          <q-icon name="x" />
          <span
            >Are you sure you want to delete product id
            {{ productDeleteDialog.productId }}</span
          >
        </q-card-section>
        <q-space />

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Confirm"
            color="error"
            v-close-popup
            @click="deleteProduct"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog class="p-2" v-model="productCategoryDialog.toggle">
      <q-card>
        <q-card-section class="row items-center">
          <q-btn-dropdown label="Select category">
            <q-list>
              <q-item
                clickable
                v-close-popup
                v-for="category in products.categories"
                :key="category"
                @click="productCategoryDialog.selectedCategory = category"
              >
                <q-item-section>
                  <q-item-label>{{ category }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-card-section>
        <span>Selected: {{ productCategoryDialog.selectedCategory }}</span>

        <q-space />

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Confirm"
            color="error"
            v-close-popup
            @click="deleteProduct"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from 'src/types/Product';
import { onMounted, reactive, ref } from 'vue';
const columns = [
  {
    name: 'id',
    required: true,
    label: 'Id',
    align: 'left',
    field: (row: any) => row.name,
    format: (val: any) => `${val}`,
    sortable: true,
  },

  {
    name: 'title',
    align: 'left',
    label: 'Title',
    field: 'title',
    sortable: true,
  },
  {
    name: 'price',
    align: 'left',
    label: 'Price',
    field: 'price',
    sortable: true,
  },

  {
    align: 'left',

    name: 'description',
    label: 'Description',
    field: 'description',
    sortable: true,
  },
  {
    name: 'category',
    align: 'left',
    label: 'Category',
    field: 'category',
    sortable: true,
  },
  { name: 'image', label: 'Image', field: 'image' },
  {
    name: 'rating',
    label: 'Rating',
    field: 'rating',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: 'actions', label: 'Action', align: 'center', field: 'action' },
];
const imageUploadDialog = reactive({
  image: '',
  toggle: false,
});
const productDeleteDialog = reactive({
  productId: -1,
  toggle: false,
});
const productCategoryDialog = reactive({
  productId: -1,
  toggle: false,
  selectedCategory: '',
});
const loading = ref(true);
const selected = ref([{}]);
const products = ref({
  categories: [],
});
const rows = reactive({
  products: [] as IProduct[],
});
onMounted(async () => {
  await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => (rows.products = json))
    .finally(() => (loading.value = false));
  await fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((json) => (products.value.categories = json));
});

function toggleImageDialog(image: any) {
  imageUploadDialog.image = image;
  imageUploadDialog.toggle = true;
}

function promptDelete(id: number) {
  productDeleteDialog.productId = id;
  productDeleteDialog.toggle = true;
}

function toggleProductCategoryDialog(id: number) {
  productCategoryDialog.productId = id;
  productCategoryDialog.toggle = true;
  productCategoryDialog.selectedCategory = '';
}
function deleteProduct() {
  const product: IProduct | undefined = rows.products.find(
    (p) => p.id === productDeleteDialog.productId
  );
  if (product) {
    for (let i = 0; i < rows.products.length; i++) {
      if (rows.products[i] === product) {
        rows.products.splice(i, 1);
      }
    }
  }
}
</script>

<style></style>
