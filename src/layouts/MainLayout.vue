<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer">
          <q-tooltip> Toggle drawer </q-tooltip>
        </q-btn>
        <q-toolbar-title class="absolute mr-10 right-0">
          <q-btn
            flat
            round
            :icon="mainStore.darkMode ? 'light_mode' : 'nightlight'"
            ripple
            @click="toggleDarkLightMode"
          >
            <q-tooltip> Dark mode </q-tooltip>
          </q-btn>

          <q-btn flat round icon="fullscreen" ripple @click="toggleFullScreen">
            <q-tooltip> Fullscreen </q-tooltip>
          </q-btn>
          <q-avatar class="mx-2">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      persistent
      side="left"
      bordered
    >
      <q-scroll-area
        style="height: calc(100% - 150px); border-right: 1px solid #ddd"
      >
        <q-list padding>
          <div v-for="link in links" :key="link.id">
            <q-expansion-item
              v-if="link.children"
              :icon="link.icon"
              :label="link.title"
              expand-separator
              clickable
              :content-inset-level="0.2"
            >
              <q-item
                v-for="child in link.children"
                :key="child.id"
                clickable
                dense
                @click="$router.push({ path: child.url })"
              >
                <q-item-section avatar>
                  <q-icon :name="child.icon" />
                </q-item-section>

                <q-item-section> {{ child.title }} </q-item-section>
              </q-item>
            </q-expansion-item>

            <q-item
              v-else
              active
              clickable
              @click="$router.push({ path: link.url })"
            >
              <q-item-section avatar>
                <q-icon :name="link.icon" />
              </q-item-section>

              <q-item-section> {{ link.title }} </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { links } from 'src/utils/links';
import { useMainStore } from 'src/stores/mainStore';
import { useQuasar } from 'quasar';
const leftDrawerOpen = ref(false);
const $q = useQuasar();
const mainStore = useMainStore();
onMounted(() => {
  $q.dark.set(mainStore.darkMode);
});
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
function toggleDarkLightMode() {
  mainStore.toggleDarkMode();
  $q.dark.set(mainStore.darkMode);
}
function toggleFullScreen() {
  $q.fullscreen.isActive
    ? $q.fullscreen.exit().then(() => {
        console.log('Out of fullscreen mode');
      })
    : $q.fullscreen.request().then(() => console.log('On fullscreen mode'));
}
</script>
