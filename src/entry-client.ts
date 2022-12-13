import { createApp } from './main';
import '@/styles/index.scss';
import '@/styles/elementCom';

const { app, router, pinia } = createApp();

// 初始化 pini
// 注意：__INITIAL_STATE__需要在 src/types/shims-global.d.ts中定义
if (window.__INITIAL_STATE__) {
  pinia.state.value = JSON.parse(window.__INITIAL_STATE__);
}

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app');

  console.log('hydrated');
});
