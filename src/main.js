import { createApp } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(Loading);
app.use(createPinia());
app.use(router);
library.add(faFacebook, faInstagram, faLine);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
