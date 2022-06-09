import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    darkMode: false,
  }),

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
  persist: true,
});
