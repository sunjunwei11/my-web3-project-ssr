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
import { ElAlert, ElTag, ElDivider, ElButton, ElLoadingDirective } from "element-plus/lib";
import { u as useContractStore, a as useCurrentAddressStore, b as useTokenStore, c as useContractAddressStore, _ as _export_sfc } from "../entry-server.js";
import { a as addToken2Metamask, i as initializeTokenContract, c as connectWallet } from "./initializeContract.a476b3e3.js";
import { ref, defineComponent, onMounted, unref, withCtx, createTextVNode, toDisplayString, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import { ethers } from "ethers";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";
import "vue-router";
import "@metamask/detect-provider";
import "@vue/server-renderer";
function updateTokenBalance() {
  return __async(this, null, function* () {
    const contractStore = useContractStore();
    const {
      contracts: { tokenContract }
    } = contractStore;
    const currentAddressStore = useCurrentAddressStore();
    const { currentAddress } = currentAddressStore;
    if (!tokenContract || !currentAddress)
      return;
    const balance = ethers.utils.formatEther(
      yield tokenContract.balanceOf(currentAddress)
    );
    const tokenStore = useTokenStore();
    const { setTokenBalance } = tokenStore;
    setTokenBalance(balance);
  });
}
function mintToken() {
  return __async(this, null, function* () {
    const contractStore = useContractStore();
    const {
      contracts: { tokenContract }
    } = contractStore;
    const tx = yield tokenContract.mint().catch((error) => {
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
      message: receipt.status ? "Congratulations!! You get 10M 'BuildWeb3' Token" : "Mint Fail",
      type: receipt.status ? "success" : "error"
    });
  });
}
function resetToken() {
  const currentAddressStore = useCurrentAddressStore();
  const { setCurrentAddress } = currentAddressStore;
  setCurrentAddress("");
  const tokenStore = useTokenStore();
  const { setTokenBalance } = tokenStore;
  setTokenBalance("0");
}
function useAddressInfo() {
  const currentAddressStore = useCurrentAddressStore();
  const { currentAddress } = storeToRefs(currentAddressStore);
  const contractAddressStore = useContractAddressStore();
  const { tokenContractAddress } = storeToRefs(contractAddressStore);
  const tokenStore = useTokenStore();
  const { tokenBalance } = storeToRefs(tokenStore);
  return {
    currentAddress,
    tokenContractAddress,
    tokenBalance
  };
}
function useMintToken() {
  const minting = ref(false);
  const doMintToken = () => __async(this, null, function* () {
    try {
      minting.value = true;
      yield mintToken();
      yield updateTokenBalance();
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
  return { minting, doMintToken };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MintToken",
  __ssrInlineRender: true,
  setup(__props) {
    const { currentAddress, tokenContractAddress, tokenBalance } = useAddressInfo();
    const { minting, doMintToken } = useMintToken();
    const tokenBalanceIsLoading = ref(true);
    const init = () => __async(this, null, function* () {
      if (!currentAddress)
        return;
      tokenBalanceIsLoading.value = true;
      yield initializeTokenContract();
      yield updateTokenBalance();
      tokenBalanceIsLoading.value = false;
    });
    const doConnectWallet = () => __async(this, null, function* () {
      yield connectWallet();
      yield init();
    });
    onMounted(() => __async(this, null, function* () {
      yield init();
    }));
    window.ethereum && window.ethereum.on("accountsChanged", (accounts) => __async(this, null, function* () {
      resetToken();
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
      const _directive_loading = ElLoadingDirective;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c16acfd6>`);
      _push(ssrRenderComponent(_component_el_alert, {
        title: "'BuildWeb3' Token Introduce",
        type: "info",
        description: "'BuildWeb3' Token is a free mint MEME token, you can spend a little gas to mint 10M for fun.",
        closable: false
      }, null, _parent));
      if (unref(tokenContractAddress)) {
        _push(`<div class="contract-address" data-v-c16acfd6> Contract Address: `);
        _push(ssrRenderComponent(_component_el_tag, { type: "warning" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(tokenContractAddress))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(tokenContractAddress)), 1)
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
              _push2(` Connect Wallet `);
            } else {
              return [
                createTextVNode(" Connect Wallet ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[-->`);
        if (unref(currentAddress)) {
          _push(`<div class="current-address" data-v-c16acfd6> Wallet Connetted!! Wallet Address: `);
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
          _push(`<div class="current-address" data-v-c16acfd6> You have `);
          _push(ssrRenderComponent(_component_el_tag, mergeProps({
            class: "ml-2",
            type: "success"
          }, ssrGetDirectiveProps(_ctx, _directive_loading, tokenBalanceIsLoading.value)), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(tokenBalance))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(tokenBalance)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(` BuildWeb3 Token </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_el_button, {
          type: "success",
          onClick: unref(doMintToken),
          loading: unref(minting)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Free Mint`);
            } else {
              return [
                createTextVNode("Free Mint")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        _push(ssrRenderComponent(_component_el_button, {
          type: "primary",
          onClick: unref(addToken2Metamask)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add &quot;BuildWeb3&quot; Token to Metamask`);
            } else {
              return [
                createTextVNode('Add "BuildWeb3" Token to Metamask')
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
const MintToken_vue_vue_type_style_index_0_scoped_c16acfd6_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/MintToken/MintToken.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MintToken = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c16acfd6"]]);
export {
  MintToken as default
};
