import { createApp } from 'vue';
import App from '@/App.vue';

import '@/registerServiceWorker';

import '@/assets/scss/main.scss';

import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';


import router from '@/router';
import store from '@/store';

const vm = createApp(App).use(store).use(router);
vm.mount('#app');
