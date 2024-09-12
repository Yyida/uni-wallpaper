"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          type: "download",
          size: "20"
        }),
        c: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaaaaa"
        }),
        d: common_vendor.p({
          type: "star",
          size: "20"
        }),
        e: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaaaaa"
        }),
        f: common_vendor.p({
          type: "chatboxes",
          size: "20"
        }),
        g: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaaaaa"
        }),
        h: common_vendor.p({
          type: "notification",
          size: "20"
        }),
        i: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaaaaa"
        }),
        j: common_vendor.p({
          type: "flag",
          size: "20"
        }),
        k: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaaaaa"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
