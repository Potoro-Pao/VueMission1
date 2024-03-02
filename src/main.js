import { createApp } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faLine,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import 'bootstrap';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import en from './en.json'; // 确保路径正确

import './assets/all.scss';
import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({
    en: en.messages, // 假设你的语言包有一个 messages 对象
  }),
  // 其他全局配置...
  validateOnInput: true, // 例如，设置为在输入时即进行验证
});

const app = createApp(App);

// 使用 Vue Loading 插件
app.use(Loading);

// 使用 Pinia 狀態管理
app.use(createPinia());

// 使用 Vue Router
app.use(router);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

// 添加 FontAwesome 圖標
library.add(faFacebook, faInstagram, faLine);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
