"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default() {
        return {
          name: "默认分类",
          picurl: "../../common/images/classify1.jpg",
          updateTime: Date.now() - 1e3 * 60 * 60 * 1
        };
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? {
        b: __props.item.picurl,
        c: common_vendor.t(__props.item.name),
        d: common_vendor.t(common_vendor.unref(utils_index.filterTimerDiff)(__props.item.updateTime)),
        e: `/pages/classlist/classlist?id=${__props.item._id}&name=${__props.item.name}`
      } : {}, {
        f: __props.isMore
      }, __props.isMore ? {
        g: common_assets._imports_0$1,
        h: common_vendor.p({
          type: "more",
          size: "26",
          color: "#ffffff"
        })
      } : {});
    };
  }
};
wx.createComponent(_sfc_main);
