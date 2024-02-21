import { createApp } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { createPinia } from 'pinia';
import 'bootstrap/scss/bootstrap.scss';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(Loading);
app.use(createPinia());
app.use(router);

app.mount('#app');
