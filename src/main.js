import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router";
import VueTheMask from 'vue-the-mask';

createApp(App).use(store).use(router).use(VueTheMask).mount('#app')
