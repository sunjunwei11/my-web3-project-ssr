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
import { ElLoadingDirective, ElAlert, ElTag, ElDivider, ElButton, ElTabs, ElTabPane } from "element-plus/lib";
import { u as useContractStore, a as useCurrentAddressStore, e as useNftStore, _ as _export_sfc, c as useContractAddressStore } from "../entry-server.js";
import { g as getRandomNft, b as initializeNftContract, c as connectWallet } from "./initializeContract.d272d663.js";
import { defineComponent, mergeProps, useSSRContext, watch, ref, onMounted, unref, withCtx, createTextVNode, toDisplayString, isRef, createVNode } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";
import axios from "axios";
import "vue-router";
import "@metamask/detect-provider";
import "@vue/server-renderer";
import "ethers";
function updateNftBalance() {
  return __async(this, null, function* () {
    const contractStore = useContractStore();
    const {
      contracts: { nftContract }
    } = contractStore;
    const currentAddressStore = useCurrentAddressStore();
    const { currentAddress } = currentAddressStore;
    if (!nftContract || !currentAddress)
      return;
    const balance = yield nftContract.balanceOf(currentAddress);
    const tokenStore = useNftStore();
    const { setNftBalance } = tokenStore;
    setNftBalance(balance);
  });
}
function mintNft() {
  return __async(this, null, function* () {
    const contractStore = useContractStore();
    const {
      contracts: { nftContract }
    } = contractStore;
    const tx = yield nftContract.safeMint(`https://ipfs.io/ipfs/${getRandomNft()}`).catch((error) => {
      if ((error == null ? void 0 : error.code) === "ACTION_REJECTED") {
        return;
      }
      throw new Error("Mint failed");
    });
    const receipt = yield tx.wait();
    if (receipt.status === 0) {
      throw new Error("Transaction failed");
    }
    ElMessage({
      message: receipt.status ? "Congratulations!! You Mint a Digi girl Nft Sucessfully" : "Mint Fail",
      type: receipt.status ? "success" : "error"
    });
  });
}
function getTokenOfOwnerByIndex(address, index) {
  return __async(this, null, function* () {
    const contractStore = useContractStore();
    const {
      contracts: { nftContract: contract }
    } = contractStore;
    const tokenId = yield contract.tokenOfOwnerByIndex(
      address,
      index
    );
    return tokenId;
  });
}
function getTokenURI(tokenId) {
  return __async(this, null, function* () {
    const contractStore = useContractStore();
    const {
      contracts: { nftContract: contract }
    } = contractStore;
    const tokenUri = yield contract.tokenURI(tokenId);
    return tokenUri;
  });
}
function getTotalSupply() {
  return __async(this, null, function* () {
    const contractStore = useContractStore();
    const {
      contracts: { nftContract: contract }
    } = contractStore;
    const total = yield contract.totalSupply();
    return total;
  });
}
const elTabPane = "";
const elTabs = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NftsCard",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean },
    nfts: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_loading = ElLoadingDirective;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nfts-wrap" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, __props.loading)))} data-v-23226baf>`);
      if (!__props.loading && !__props.nfts.length) {
        _push(`<div class="no-nft" data-v-23226baf> You have no Digi Girls Nft now, You can Mint for free </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(__props.nfts, (nft) => {
          _push(`<div class="nft-item" data-v-23226baf><img class="nft-img"${ssrRenderAttr("src", nft.image)} data-v-23226baf><div class="nft-info" data-v-23226baf><div class="info-item" data-v-23226baf>${ssrInterpolate(nft.name)}</div><div class="info-item" data-v-23226baf>ID: ${ssrInterpolate(nft.tokenId)}</div><div class="info-item" data-v-23226baf>Hair Color: ${ssrInterpolate(nft.hairColor)}</div><div class="info-item" data-v-23226baf>Cloth: ${ssrInterpolate(nft.cloth)}</div></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const NftsCard_vue_vue_type_style_index_0_scoped_23226baf_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/MintNft/components/NftsCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NftsCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23226baf"]]);
function resetNft() {
  const currentAddressStore = useCurrentAddressStore();
  const { setCurrentAddress } = currentAddressStore;
  setCurrentAddress("");
  const nftStore = useNftStore();
  const { setNftBalance } = nftStore;
  setNftBalance("0");
}
const commonRequestConfig = {
  baseURL: "/",
  timeout: 3e3,
  withCredentials: false
};
const commonRequestInterceptors = [
  {
    onFulfilled: (config) => {
      return config;
    },
    onRejected: (error) => {
      const errorMsg = (error == null ? void 0 : error.message) || "Request Error";
      ElMessage({
        message: errorMsg,
        type: "error"
      });
      return Promise.reject(error);
    }
  }
];
const commonResponseInterceptors = [
  {
    onFulfilled: (response) => {
      const { data } = response;
      return data;
    },
    onRejected: (error) => {
      const { response } = error;
      let message = "";
      const status = response == null ? void 0 : response.status;
      switch (status) {
        case 401:
          message = "token \u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55";
          break;
        case 403:
          message = "\u62D2\u7EDD\u8BBF\u95EE";
          break;
        case 404:
          message = "\u8BF7\u6C42\u5730\u5740\u9519\u8BEF";
          break;
        case 500:
          message = "\u670D\u52A1\u5668\u6545\u969C";
          break;
        default:
          message = "\u7F51\u7EDC\u8FDE\u63A5\u6545\u969C";
      }
      ElMessage({
        message,
        type: "error"
      });
      return Promise.reject(error);
    }
  }
];
function createInstance(config, requestInterceptors, responseInterceptors) {
  const instance = axios.create(__spreadValues(__spreadValues({}, commonRequestConfig), config));
  const allRequestInterceptors = [
    ...commonRequestInterceptors,
    ...requestInterceptors
  ];
  allRequestInterceptors.forEach((requestInterceptor) => {
    instance.interceptors.request.use(
      requestInterceptor.onFulfilled,
      requestInterceptor.onRejected
    );
  });
  const allResponseInterceptors = [
    ...commonResponseInterceptors,
    ...responseInterceptors
  ];
  allResponseInterceptors.forEach((responseInterceptor) => {
    instance.interceptors.response.use(
      responseInterceptor.onFulfilled,
      responseInterceptor.onRejected
    );
  });
  function post(url, data = {}, params = {}) {
    return instance({
      method: "post",
      url,
      data,
      params
    });
  }
  function get(url, params = {}) {
    return instance({
      method: "get",
      url,
      params
    });
  }
  function put(url, data = {}, params = {}) {
    return instance({
      method: "put",
      url,
      params,
      data
    });
  }
  function _delete(url, params = {}) {
    return instance({
      method: "delete",
      url,
      params
    });
  }
  return {
    instance,
    post,
    get,
    put,
    _delete
  };
}
const baseInstance = createInstance({}, [], []);
createInstance(
  {
    baseURL: "/v1"
  },
  [],
  []
);
const getNftJson$1 = (src) => {
  return baseInstance.get(src);
};
const nftApi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getNftJson: getNftJson$1
}, Symbol.toStringTag, { value: "Module" }));
const { getNftJson } = nftApi;
let allNfts = [];
let myNfts = [];
function watchCurrentAddress() {
  const currentAddressStore = useCurrentAddressStore();
  const { currentAddress } = storeToRefs(currentAddressStore);
  watch(currentAddress, () => {
    myNfts = [];
  });
}
watchCurrentAddress();
function getAllDigiNfts() {
  return __async(this, null, function* () {
    const totalSupply = yield getTotalSupply();
    const tokenIds = [];
    for (let i = allNfts.length; i < totalSupply; i++) {
      tokenIds.push(i);
    }
    const nftJsons = yield getJsonByTokenIds(tokenIds);
    allNfts = [...allNfts, ...nftJsons];
    return allNfts;
  });
}
function getMyDigiNfts() {
  return __async(this, null, function* () {
    const currentAddressStore = useCurrentAddressStore();
    const { currentAddress } = currentAddressStore;
    const nftStore = useNftStore();
    const { nftBalance } = nftStore;
    const ownerBalance = Number(nftBalance) || 0;
    let tokenIds = [];
    const temp = [];
    for (let i = myNfts.length; i < ownerBalance; i++) {
      temp.push(getTokenOfOwnerByIndex(currentAddress, i));
      if (temp.length === 5 || i >= ownerBalance - 1) {
        const res = yield Promise.all(temp);
        tokenIds = [...tokenIds, ...res];
      }
    }
    const nftJsons = yield getJsonByTokenIds(tokenIds);
    myNfts = [...myNfts, ...nftJsons];
    return myNfts;
  });
}
function getJsonByTokenIds(tokenIds) {
  return __async(this, null, function* () {
    let nfts = [];
    const tokenIdsLength = tokenIds.length;
    let temp = [];
    for (let i = 0; i < tokenIdsLength; i++) {
      temp.push(getTokenURI(tokenIds[i]));
      if (temp.length === 5 || i >= tokenIdsLength - 1) {
        const urlRes = yield Promise.all(temp);
        const jsonPromiseArray = [];
        for (let j = 0; j < urlRes.length; j++) {
          jsonPromiseArray.push(getNftJson(urlRes[j]));
        }
        const jsonRes = yield Promise.all(jsonPromiseArray);
        nfts = [...nfts, ...jsonRes];
        temp = [];
      }
    }
    nfts.forEach((item, index) => {
      item.tokenId = tokenIds[index];
      item.attributes.forEach((attr) => {
        if (attr.trait_type === "Hair Length") {
          item.hairLength = attr.value;
        }
        if (attr.trait_type === "Hair Color") {
          item.hairColor = attr.value;
        }
        if (attr.trait_type === "Cloth") {
          item.cloth = attr.value;
        }
      });
    });
    return nfts;
  });
}
function useGetNfts() {
  const allNftLoading = ref(false);
  const myNftLoading = ref(false);
  const allNfts2 = ref([]);
  const myNfts2 = ref([]);
  let NftTab;
  ((NftTab2) => {
    NftTab2["All"] = "ALL";
    NftTab2["My"] = "My";
  })(NftTab || (NftTab = {}));
  const nftTab = ref("ALL");
  const handleTabChange = (name) => __async(this, null, function* () {
    nftTab.value = name;
    yield getNfts();
  });
  function getNfts() {
    return __async(this, null, function* () {
      const currentAddressStore = useCurrentAddressStore();
      const { currentAddress } = currentAddressStore;
      if (!currentAddress) {
        return;
      }
      if (nftTab.value === "ALL") {
        yield getAllNft();
      } else {
        yield getMyNft();
      }
    });
  }
  function getAllNft() {
    return __async(this, null, function* () {
      var _a;
      allNftLoading.value = true;
      try {
        const nftJsons = yield getAllDigiNfts();
        allNfts2.value = (_a = [...nftJsons]) == null ? void 0 : _a.reverse();
        console.log("allNfts: ", allNfts2.value);
      } catch (err) {
        console.error(err);
      } finally {
        allNftLoading.value = false;
      }
    });
  }
  function getMyNft() {
    return __async(this, null, function* () {
      var _a;
      myNftLoading.value = true;
      const nftJsons = yield getMyDigiNfts();
      myNfts2.value = (_a = [...nftJsons]) == null ? void 0 : _a.reverse();
      console.log("myNfts: ", myNfts2.value);
      myNftLoading.value = false;
    });
  }
  return {
    handleTabChange,
    getNfts,
    allNftLoading,
    myNftLoading,
    allNfts: allNfts2,
    myNfts: myNfts2,
    nftTab,
    NftTab
  };
}
function useAddressInfo() {
  const currentAddressStore = useCurrentAddressStore();
  const { currentAddress } = storeToRefs(currentAddressStore);
  const contractAddressStore = useContractAddressStore();
  const { nftContractAddress } = storeToRefs(contractAddressStore);
  const tokenStore = useNftStore();
  const { nftBalance } = storeToRefs(tokenStore);
  return {
    currentAddress,
    nftContractAddress,
    nftBalance
  };
}
function useMint() {
  const minting = ref(false);
  const doMintNft = () => __async(this, null, function* () {
    try {
      minting.value = true;
      yield mintNft();
      yield updateNftBalance();
    } catch (error) {
      console.error(error);
      ElMessage({
        message: error.message || "Mint Fail",
        type: "error"
      });
    } finally {
      minting.value = false;
    }
  });
  return { minting, doMintNft };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MintNft",
  __ssrInlineRender: true,
  setup(__props) {
    const { currentAddress, nftContractAddress, nftBalance } = useAddressInfo();
    const { doMintNft, minting } = useMint();
    const {
      handleTabChange,
      getNfts,
      allNftLoading,
      myNftLoading,
      allNfts: allNfts2,
      myNfts: myNfts2,
      nftTab,
      NftTab
    } = useGetNfts();
    onMounted(() => __async(this, null, function* () {
      yield init();
      yield getNfts();
    }));
    const nftBalanceIsLoading = ref(true);
    const init = () => __async(this, null, function* () {
      if (!currentAddress)
        return;
      nftBalanceIsLoading.value = true;
      yield initializeNftContract();
      yield updateNftBalance();
      nftBalanceIsLoading.value = false;
    });
    const doConnectWallet = () => __async(this, null, function* () {
      yield connectWallet();
      yield init();
    });
    window.ethereum && window.ethereum.on("accountsChanged", (accounts) => __async(this, null, function* () {
      resetNft();
      const currentAddressStore = useCurrentAddressStore();
      const { setCurrentAddress } = currentAddressStore;
      setCurrentAddress(accounts[0]);
      yield init();
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_alert = ElAlert;
      const _component_el_tag = ElTag;
      const _component_el_divider = ElDivider;
      const _component_el_button = ElButton;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _directive_loading = ElLoadingDirective;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3f9f66fc>`);
      _push(ssrRenderComponent(_component_el_alert, {
        title: "Digi Girls Nft",
        type: "info",
        description: "Digi Girls Nft is a test project, the Nft img is copy from the famous project of DigiDaigaku",
        closable: false
      }, null, _parent));
      if (unref(nftContractAddress)) {
        _push(`<div class="contract-address" data-v-3f9f66fc> Contract Address: `);
        _push(ssrRenderComponent(_component_el_tag, { type: "warning" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(nftContractAddress))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(nftContractAddress)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(nftContractAddress)) {
        _push(`<div class="contract-address" data-v-3f9f66fc> OpenSea Address: `);
        _push(ssrRenderComponent(_component_el_tag, { type: "warning" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`https://opensea.io/collection/digi-girls-gogogo`);
            } else {
              return [
                createTextVNode("https://opensea.io/collection/digi-girls-gogogo")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
      if (!unref(currentAddress)) {
        _push(ssrRenderComponent(_component_el_button, {
          type: "success",
          onClick: doConnectWallet
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Connect Wallet`);
            } else {
              return [
                createTextVNode("Connect Wallet")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[-->`);
        if (unref(currentAddress)) {
          _push(`<div class="current-address" data-v-3f9f66fc> Wallet Connetted!! Current Address: `);
          _push(ssrRenderComponent(_component_el_tag, { type: "success" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(currentAddress))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(currentAddress)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentAddress)) {
          _push(`<div class="current-address" data-v-3f9f66fc> You have `);
          _push(ssrRenderComponent(_component_el_tag, mergeProps({
            class: "ml-2",
            type: "success"
          }, ssrGetDirectiveProps(_ctx, _directive_loading, nftBalanceIsLoading.value)), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(nftBalance))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(nftBalance)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(` Digi Girls </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        _push(ssrRenderComponent(_component_el_button, {
          type: "success",
          onClick: unref(doMintNft),
          loading: unref(minting)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Mint Nft `);
            } else {
              return [
                createTextVNode(" Mint Nft ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        _push(ssrRenderComponent(_component_el_tabs, {
          modelValue: unref(nftTab),
          "onUpdate:modelValue": ($event) => isRef(nftTab) ? nftTab.value = $event : null,
          class: "demo-tabs",
          onTabChange: unref(handleTabChange)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                label: "All Minted Nft",
                name: unref(NftTab).All
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(NftsCard, {
                      nfts: unref(allNfts2),
                      loading: unref(allNftLoading)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(NftsCard, {
                        nfts: unref(allNfts2),
                        loading: unref(allNftLoading)
                      }, null, 8, ["nfts", "loading"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                label: "My Minted Nft",
                name: unref(NftTab).My
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(NftsCard, {
                      nfts: unref(myNfts2),
                      loading: unref(myNftLoading)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(NftsCard, {
                        nfts: unref(myNfts2),
                        loading: unref(myNftLoading)
                      }, null, 8, ["nfts", "loading"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_tab_pane, {
                  label: "All Minted Nft",
                  name: unref(NftTab).All
                }, {
                  default: withCtx(() => [
                    createVNode(NftsCard, {
                      nfts: unref(allNfts2),
                      loading: unref(allNftLoading)
                    }, null, 8, ["nfts", "loading"])
                  ]),
                  _: 1
                }, 8, ["name"]),
                createVNode(_component_el_tab_pane, {
                  label: "My Minted Nft",
                  name: unref(NftTab).My
                }, {
                  default: withCtx(() => [
                    createVNode(NftsCard, {
                      nfts: unref(myNfts2),
                      loading: unref(myNftLoading)
                    }, null, 8, ["nfts", "loading"])
                  ]),
                  _: 1
                }, 8, ["name"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const MintNft_vue_vue_type_style_index_0_scoped_3f9f66fc_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/MintNft/MintNft.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MintNft = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f9f66fc"]]);
export {
  MintNft as default
};
