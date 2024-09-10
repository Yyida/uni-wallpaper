"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const popupRef = common_vendor.ref(null);
    const clickInfo = () => {
      popupRef.value.open();
    };
    const clickClose = () => {
      popupRef.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(6, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$2,
        c: common_vendor.p({
          type: "info",
          size: "28"
        }),
        d: common_vendor.o(clickInfo),
        e: common_vendor.p({
          type: "star",
          size: "28"
        }),
        f: common_vendor.p({
          type: "download",
          size: "24"
        }),
        g: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999999"
        }),
        h: common_vendor.o(clickClose),
        i: common_vendor.p({
          value: 3.5,
          readonly: true,
          allowHalf: true,
          touchable: false
        }),
        j: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        k: common_vendor.sr(popupRef, "2470b0db-3", {
          "k": "popupRef"
        }),
        l: common_vendor.p({
          type: "bottom",
          ["is-mask-click"]: true
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
