# Vue 3 + TypeScript + Vite

此项目使用 Vue 3 + TypeScript + Vite 作为技术栈

# 项目功能

此项目实现了目前功能主要为两个：

1、Mint Token 和展示 Token 相关信息

2、Mint Nft 和展示 Nft 相关信息

目录结构请查看下方`基本代码结构`

# 集成工程化所需工具

## 使用 pnpm 管理 npm 包

安装快速，方便做多包管理

## 集成 eslint prettier、husky

使用 eslint 校验语法，使用 prettier 校验代码格式，使用 husky 在提交代码时做检查，保证代码规范

## 集成 commitizen、commitlint

使用 commitizen 方便我们书写 git commit message，使用 commitlint + husky 在提交时对 commit message 做检查

## 集成 vitest

可以使用 vitest 对 ts、tsx、vue 单文件组件做测试。

## 集成 vue-router

使用 vue-router 做路由管理

## 集成 pinia

使用 pinia 做状态管理

## 集成 Axios

使用 Axios 请求数据

## 集成 element-plus

自动导入使用到的 element-plus 组件

## 集成 element-plus/icons-vue

自动导入使用到的 Icon

# 基本代码结构

```
src
├─App.vue // 根组件
├─global.d.ts // 定义全局type
├─main.ts // 入口文件
├─vite-env.d.ts // vite需要的全局type
├─wallet // 钱包相关操作
|   ├─connect.ts // 连接钱包逻辑
|   ├─index.ts // 统一导出钱包里的方法
|   ├─initializeContract.ts // 初始化合约相关方法，包括初始化Token合约和Nft合约
|   ├─utils.ts // 钱包相关工具函数
|   ├─interactWithToken // Token和链上交互的一些逻辑
|   |         └index.ts
|   ├─interactWithNft // Nft和线上交互的一些逻辑
|   |        └index.ts
├─views
|   ├─MintToken // Token页面
|   |     ├─MintToken.vue // Token页面组件
|   |     ├─index.ts // 导出Token页面组件
|   |     ├─hooks // hooks，按功能将Token页面相关的逻辑拆分成对应的Hook
|   |     |   ├─index.ts // 统一导出
|   |     |   ├─useMintToken // Mint相关逻辑
|   |     |   |      └index.ts
|   |     |   ├─useAddressInfo // 获取地址和Token余额相关逻辑
|   |     |   |       └index.ts
|   ├─MintNft // Nft页面
|   |    ├─MintNft.vue // Nft页面组件
|   |    ├─NftsCard.vue // 负责展示Nft卡片
|   |    ├─index.ts
|   |    ├─types.ts // 定义Nft相关type
|   |    ├─hooks // 拆分逻辑到对应的Hook
|   |    |   ├─index.ts // 统一导出
|   |    |   ├─useMint // Mint相关逻辑
|   |    |   |    └index.ts
|   |    |   ├─useGetNfts // 获取Nft相关逻辑
|   |    |   |     ├─index.ts
|   |    |   |     └utils.ts
|   |    |   ├─useAddresssInfo // 获取地址信息、余额相关逻辑
|   |    |   |        └index.ts
├─utils // 全局工具方法
|   └sum.ts
├─styles // 全局样式
|   └index.scss
├─store // 全局状态
|   ├─index.ts // 统一导出全局状态
|   ├─modules // 全局状态按功能拆分到各个模块
|   |    ├─address.ts // 地址相关的全局状态
|   |    ├─contract.ts // 合约相关的全局状态
|   |    ├─network.ts // 网络相关的全局状态
|   |    ├─nft.ts // Nft相关的全局状态
|   |    └token.ts // Token相关的全局状态
├─router // 路由
|   ├─index.ts // 统一导出路由
|   ├─modules // 路由按功能划分成模块
|   |    └base.ts
├─contract // 合约
|    ├─BuildWeb3Token.json
|    └MyDigiNft.json
├─components // 公共组件
|     ├─HeaderCom.vue
|     └SideMenu.vue
├─assets // 保存静态资源
|   ├─svgs
|   |  └vue.svg
|   ├─images
|   |   └logo.png
├─apis
|  ├─index.ts // 统一导出apis里的接口
|  ├─modules // 将不同业务的接口拆分到不同模块
|  |    ├─index.ts // 统一导出不同业务接口
|  |    ├─nft // nft业务
|  |    |  ├─index.ts // nft业务接口
|  |    |  └types.ts // nft业务接口类型定义
|  ├─instances // Axios实例
|  |     ├─commonConfig.ts // 实例的通用配置
|  |     ├─create.ts // 创建实例逻辑
|  |     ├─index.ts // 导出实例
|  |     └types.ts // 实例相关的类型定义
```
