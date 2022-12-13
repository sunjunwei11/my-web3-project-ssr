import { createApp } from 'vue';
import '@/styles/index.scss';
// element里的组件如果不写在模板里，只作为API在TS中调用，这种情况无法自动导入，需要自己手动引入
import '@/styles/elementCom';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(router).use(store).mount('#app');
