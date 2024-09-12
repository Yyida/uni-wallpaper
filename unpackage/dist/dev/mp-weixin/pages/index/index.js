"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_custom_nav_tar2 = common_vendor.resolveComponent("custom-nav-tar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_tar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_tar = () => "../../components/custom-nav-tar/custom-nav-tar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_tar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const randowList = common_vendor.ref([]);
    const newList = common_vendor.ref([]);
    const classify = common_vendor.ref([]);
    const toPreview = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/preview/preview?id=${id}`
      });
    };
    const getBannerList = () => {
      common_vendor.index.showLoading({
        title: "数据加载中...",
        mask: true
      });
      api_index.GetBannerList().then((result) => {
        console.log(result);
        bannerList.value = result.data;
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    };
    const getRandowList = () => {
      common_vendor.index.showLoading({
        title: "数据加载中...",
        mask: true
      });
      api_index.GetRandomList().then((result) => {
        randowList.value = result.data;
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    };
    const getNewsList = () => {
      common_vendor.index.showLoading({
        title: "数据加载中...",
        mask: true
      });
      api_index.GetNews({ select: true }).then((result) => {
        newList.value = result.data;
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    };
    const getClasses = () => {
      common_vendor.index.showLoading({
        title: "数据加载中...",
        mask: true
      });
      api_index.GetClassify({ select: true }).then((result) => {
        classify.value = result.data;
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    };
    getBannerList();
    getRandowList();
    getNewsList();
    getClasses();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        c: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        d: common_vendor.f(newList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item._id
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "16",
          color: "#c1c1c1"
        }),
        f: common_vendor.p({
          type: "calendar",
          size: "20"
        }),
        g: common_vendor.p({
          date: Date.now(),
          format: "dd号"
        }),
        h: common_vendor.f(randowList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: common_vendor.o(($event) => toPreview(item._id), item._id)
          };
        }),
        i: common_vendor.f(classify.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              item
            })
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
