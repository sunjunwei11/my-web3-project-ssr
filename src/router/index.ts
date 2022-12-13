import {
  createRouter as _createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router';

import baseRouters from './modules/base';

const routes = [...baseRouters];

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
