var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { defineComponent, mergeProps, unref, useSSRContext, openBlock, createElementBlock, createElementVNode, resolveComponent, withCtx, createVNode, ref, computed, watch, onMounted, createBlock, Fragment, createSSRApp } from "vue";
import { defineStore, storeToRefs, createPinia } from "pinia";
import { ElMenu, ElMenuItem, ElIcon, ElContainer, ElHeader, ElAside, ElMain, ElLoadingDirective } from "element-plus/lib";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { useRoute, createRouter as createRouter$1, createMemoryHistory } from "vue-router";
import "@metamask/detect-provider";
import { renderToString } from "@vue/server-renderer";
const elLoading = "";
const elMain = "";
const elAside = "";
const elHeader = "";
const elContainer = "";
const logo = "/assets/logo.aa231397.png";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderCom",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-933da916><img class="logo"${ssrRenderAttr("src", unref(logo))} data-v-933da916><div data-v-933da916>Build Web3</div></div>`);
    };
  }
});
const HeaderCom_vue_vue_type_style_index_0_scoped_933da916_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HeaderCom.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderCom = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-933da916"]]);
const _hoisted_1$1 = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872l21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_4 = { name: "ep-milk-tea", render: render$2 };
const _hoisted_1 = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32c37.632 16.128 74.496 45.056 111.488 89.344c96.384 115.264 82.752 372.8-34.752 521.728c-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048c-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904c-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2c-74.112 2.752-116.928-38.08-180.672-132.16c-96.64-142.08-132.608-349.312-55.04-486.4c46.272-81.92 129.92-133.632 220.672-135.04c32.832-.576 60.288 6.848 99.648 22.72c27.136 10.88 34.752 13.76 37.376 14.272c16.256-20.16 27.776-36.992 34.56-50.24c13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112c-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944c52.48-2.112 72.32-34.688 135.872-34.688c63.552 0 81.28 34.688 136.96 33.536c56.448-1.088 75.776-39.04 126.848-103.872c107.904-136.768 107.904-362.752 35.776-449.088c-72.192-86.272-124.672-84.096-151.68-85.12c-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_3 = { name: "ep-apple", render: render$1 };
const elIcon = "";
const elMenuItem = "";
const elMenu = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SideMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_menu = ElMenu;
      const _component_el_menu_item = ElMenuItem;
      const _component_router_link = resolveComponent("router-link");
      const _component_el_icon = ElIcon;
      const _component_IEpApple = __unplugin_components_3;
      const _component_IEpMilkTea = __unplugin_components_4;
      _push(ssrRenderComponent(_component_el_menu, mergeProps({ class: "menu" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_menu_item, { index: "1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_router_link, {
                    to: { name: "mintToken", query: __spreadValues({}, unref(route).query) },
                    class: "menu-item",
                    activeClass: "menu-item-actived"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_icon, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_IEpApple, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_IEpApple)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span data-v-bd575a11${_scopeId3}>Mint Token</span>`);
                      } else {
                        return [
                          createVNode(_component_el_icon, null, {
                            default: withCtx(() => [
                              createVNode(_component_IEpApple)
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Mint Token")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_router_link, {
                      to: { name: "mintToken", query: __spreadValues({}, unref(route).query) },
                      class: "menu-item",
                      activeClass: "menu-item-actived"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(_component_IEpApple)
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Mint Token")
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_menu_item, { index: "2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_router_link, {
                    to: { name: "mintNft", query: __spreadValues({}, unref(route).query) },
                    class: "menu-item",
                    activeClass: "menu-item-actived"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_icon, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_IEpMilkTea, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_IEpMilkTea)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span data-v-bd575a11${_scopeId3}>Mint Nft</span>`);
                      } else {
                        return [
                          createVNode(_component_el_icon, null, {
                            default: withCtx(() => [
                              createVNode(_component_IEpMilkTea)
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Mint Nft")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_router_link, {
                      to: { name: "mintNft", query: __spreadValues({}, unref(route).query) },
                      class: "menu-item",
                      activeClass: "menu-item-actived"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(_component_IEpMilkTea)
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Mint Nft")
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_menu_item, { index: "1" }, {
                default: withCtx(() => [
                  createVNode(_component_router_link, {
                    to: { name: "mintToken", query: __spreadValues({}, unref(route).query) },
                    class: "menu-item",
                    activeClass: "menu-item-actived"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode(_component_IEpApple)
                        ]),
                        _: 1
                      }),
                      createVNode("span", null, "Mint Token")
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              }),
              createVNode(_component_el_menu_item, { index: "2" }, {
                default: withCtx(() => [
                  createVNode(_component_router_link, {
                    to: { name: "mintNft", query: __spreadValues({}, unref(route).query) },
                    class: "menu-item",
                    activeClass: "menu-item-actived"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode(_component_IEpMilkTea)
                        ]),
                        _: 1
                      }),
                      createVNode("span", null, "Mint Nft")
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const SideMenu_vue_vue_type_style_index_0_scoped_bd575a11_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SideMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SideMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bd575a11"]]);
const useNetworkStore = defineStore("network", () => {
  const goerliNetworkId = "5";
  const ethNetworkId = "1";
  const networkId = ref("");
  const isGoerliTestNetWork = ref(false);
  function checkNetWork(route) {
    isGoerliTestNetWork.value = route.query.network === "goerli";
    networkId.value = isGoerliTestNetWork.value ? goerliNetworkId : ethNetworkId;
  }
  return { networkId, isGoerliTestNetWork, checkNetWork };
});
const useCurrentAddressStore = defineStore("currentAddress", () => {
  const currentAddress = ref("");
  function setCurrentAddress(val) {
    currentAddress.value = val;
  }
  return { currentAddress, setCurrentAddress };
});
const useContractAddressStore = defineStore("contractAddress", () => {
  const network = useNetworkStore();
  const { isGoerliTestNetWork } = storeToRefs(network);
  const goerliContractAddress = "0x93C3FFaE436BfDB07Ea9D67a69cf8a5fF90d2512";
  const ethContractAddress = "0x72F7A1F6eB1a799eb5Ce736916bfF44F323f6768";
  const tokenContractAddress = computed(
    () => isGoerliTestNetWork.value ? goerliContractAddress : ethContractAddress
  );
  const goerliNftContractAddress = "0x3E1F3A5e0Ab6a8555eB0489D991a3312958D05b3";
  const ethNftContractAddress = "0xAE1876C9a02AfCD0Cd4d20fCcf279b07cb0E1F72";
  const nftContractAddress = computed(
    () => isGoerliTestNetWork.value ? goerliNftContractAddress : ethNftContractAddress
  );
  return {
    tokenContractAddress,
    nftContractAddress
  };
});
const useContractStore = defineStore("Contract", () => {
  const contracts = {
    tokenContract: null,
    nftContract: null
  };
  const setTokenContract = (contract) => {
    contracts.tokenContract = contract;
  };
  const setNftContract = (contract) => {
    contracts.nftContract = contract;
  };
  return { contracts, setTokenContract, setNftContract };
});
const useTokenStore = defineStore("token", () => {
  const tokenBalance = ref("0");
  const setTokenBalance = (balance) => {
    tokenBalance.value = balance;
  };
  return {
    tokenBalance,
    setTokenBalance
  };
});
const useNftStore = defineStore("nft", () => {
  const nftBalance = ref("0");
  const setNftBalance = (balance) => {
    nftBalance.value = balance;
  };
  return {
    nftBalance,
    setNftBalance
  };
});
createPinia();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const hasMetaMask = ref(false);
    let loading = ref(true);
    const init = () => __async(this, null, function* () {
      loading.value = false;
    });
    init();
    const route = useRoute();
    watch(
      () => route.query.network,
      () => {
        const { checkNetWork } = useNetworkStore();
        checkNetWork(route);
      },
      {
        immediate: true
      }
    );
    onMounted(() => {
      window.ethereum && window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = ElContainer;
      const _component_el_header = ElHeader;
      const _component_el_aside = ElAside;
      const _component_el_main = ElMain;
      const _component_router_view = resolveComponent("router-view");
      const _directive_loading = ElLoadingDirective;
      _push(ssrRenderComponent(_component_el_container, mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_header, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HeaderCom, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HeaderCom)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_container, { class: "container-info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!hasMetaMask.value) {
                    _push3(`<div class="no-metamask" data-v-cd8bd1ee${_scopeId2}> Need install Metamask first </div>`);
                  } else {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_el_aside, { width: "200px" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(SideMenu, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(SideMenu)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_main, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_router_view, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_router_view)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                } else {
                  return [
                    !hasMetaMask.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "no-metamask"
                    }, " Need install Metamask first ")) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_el_aside, { width: "200px" }, {
                        default: withCtx(() => [
                          createVNode(SideMenu)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_main, null, {
                        default: withCtx(() => [
                          createVNode(_component_router_view)
                        ]),
                        _: 1
                      })
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_header, null, {
                default: withCtx(() => [
                  createVNode(HeaderCom)
                ]),
                _: 1
              }),
              createVNode(_component_el_container, { class: "container-info" }, {
                default: withCtx(() => [
                  !hasMetaMask.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "no-metamask"
                  }, " Need install Metamask first ")) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(_component_el_aside, { width: "200px" }, {
                      default: withCtx(() => [
                        createVNode(SideMenu)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_main, null, {
                      default: withCtx(() => [
                        createVNode(_component_router_view)
                      ]),
                      _: 1
                    })
                  ], 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const App_vue_vue_type_style_index_0_scoped_cd8bd1ee_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd8bd1ee"]]);
const routes$1 = [
  {
    path: "/",
    redirect: () => {
      return { name: "mintToken" };
    }
  },
  {
    path: "/mint-token",
    name: "mintToken",
    component: () => import("./assets/index.08f77ea5.js")
  },
  {
    path: "/mint-nft",
    name: "mintNft",
    component: () => import("./assets/index.6a814363.js")
  }
];
const routes = [...routes$1];
function createRouter() {
  return createRouter$1({
    history: createMemoryHistory(),
    routes
  });
}
const createApp = () => {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  const pinia = createPinia();
  app.use(pinia);
  return { app, router, pinia };
};
const render = (url) => __async(void 0, null, function* () {
  const { app, router, pinia } = createApp();
  yield router.push(url);
  yield router.isReady();
  const renderCtx = {};
  const renderedHtml = yield renderToString(app, renderCtx);
  const state = JSON.stringify(pinia.state.value);
  return { renderedHtml, state };
});
export {
  _export_sfc as _,
  useCurrentAddressStore as a,
  useTokenStore as b,
  useContractAddressStore as c,
  useNetworkStore as d,
  useNftStore as e,
  render,
  useContractStore as u
};
