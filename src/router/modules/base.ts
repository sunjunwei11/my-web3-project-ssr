import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/ssr',
    redirect: () => {
      return { name: 'mintToken' };
    },
  },
  {
    path: '/ssr/mint-token',
    name: 'mintToken',
    component: () => import('@/views/MintToken'),
  },
  {
    path: '/ssr/mint-nft',
    name: 'mintNft',
    component: () => import('@/views/MintNft'),
  },
];

export default routes;
