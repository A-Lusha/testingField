import { createApp } from 'vue';
import App from '@/App.vue';

import '@/registerServiceWorker';
import '@/assets/scss/main.scss';

import router from '@/router';
import store from '@/store';

const vm = createApp(App).use(store).use(router);
vm.mount('#app');
