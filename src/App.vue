<template>
  <el-container v-loading="loading">
    <el-header>
      <HeaderCom />
    </el-header>
    <el-container class="container-info">
      <div v-if="!hasMetaMask" class="no-metamask">
        Need install Metamask first
      </div>
      <template v-else>
        <el-aside width="200px"> <SideMenu /> </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </template>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import HeaderCom from '@/components/HeaderCom.vue';
import SideMenu from '@/components/SideMenu.vue';
import { useRoute } from 'vue-router';
import { watch, onMounted, ref } from 'vue';
import { useNetworkStore } from '@/store';
import detectEthereumProvider from '@metamask/detect-provider';

const hasMetaMask = ref(false);
let loading = ref(true);

const init = async () => {
  // 检测是否安装了钱包
  if (!import.meta.env.SSR) {
    const provider = await detectEthereumProvider();
    if (provider) {
      hasMetaMask.value = true;
    }
  }
  loading.value = false;
};
init();

const route = useRoute();
// 根据路由检测环境信息
watch(
  () => route.query.network,
  () => {
    const { checkNetWork } = useNetworkStore();
    checkNetWork(route);
  },
  {
    immediate: true,
  }
);

onMounted(() => {
  window.ethereum &&
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:deep(.el-header) {
  padding: 0;
}

.container-info {
  margin-top: 20px;
}
.no-metamask {
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}
</style>
