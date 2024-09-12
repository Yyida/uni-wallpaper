"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_custom_nav_tar2 = common_vendor.resolveComponent("custom-nav-tar");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_tar2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_tar = () => "../../components/custom-nav-tar/custom-nav-tar.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_tar + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    const classify = common_vendor.ref([]);
    const getClasses = () => {
      common_vendor.index.showLoading({
        title: "数据加载中...",
        mask: true
      });
      api_index.GetClassify({ pageSize: 99 }).then((result) => {
        classify.value = result.data;
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    };
    common_vendor.onLoad(() => {
      getClasses();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(classify.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "2e1a1a89-1-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
