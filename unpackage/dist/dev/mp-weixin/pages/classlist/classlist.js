"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    let params = common_vendor.ref({
      pageNum: 1,
      pageSize: 10,
      classid: ""
    });
    let loading = common_vendor.ref(true);
    const total = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const getData = () => {
      console.log("getData");
      api_index.GetClassifyList(params.value).then((result) => {
        classList.value = classList.value.concat(result.data);
        total.value = result.total;
        common_vendor.index.setStorageSync("storageClassList", classList.value);
      }).finally(() => {
        loading.value = false;
      });
    };
    const toPreview = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/preview/preview?currentId=${id}`
      });
    };
    common_vendor.onLoad((options) => {
      params.value.classid = options.id;
      common_vendor.index.setNavigationBarTitle({
        title: options.name
      });
      getData();
    });
    common_vendor.onReachBottom(() => {
      if (total.value > classList.value.length) {
        params.value.pageNum++;
        getData();
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          status: "loading"
        }),
        b: common_vendor.unref(loading),
        c: common_vendor.f(classList.value, (item, index, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: common_vendor.o(($event) => toPreview(item._id), item._id)
          };
        }),
        d: common_vendor.p({
          status: total.value > classList.value.length ? "loading" : "noMore"
        }),
        e: total.value !== 0 && total.value >= classList.value.length
      };
    };
  }
};
wx.createPage(_sfc_main);
