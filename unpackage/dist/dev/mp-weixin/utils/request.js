"use strict";
const common_vendor = require("../common/vendor.js");
const request = (config = {
  url: "",
  method: "get",
  data: {}
}) => {
  return new Promise((resolve, reject) => {
    const BASE_URL = "https://tea.qingnian8.com/api/bizhi";
    const header = {};
    const { url, data, method } = config;
    header["access-key"] = "yyida123";
    common_vendor.index.request({
      url: BASE_URL + url,
      method,
      data,
      header,
      success: (result) => {
        const { data: data2 } = result;
        if (data2.errCode === 0) {
          resolve(data2);
        } else {
          common_vendor.index.showModal({
            title: "提示信息",
            content: result.data.errMsg,
            showCancel: false
          });
          reject(data2);
        }
      },
      fail: (err) => {
        common_vendor.index.showToast({
          title: err,
          icon: "exception",
          mask: true
        });
      },
      complete: () => {
      }
    });
  });
};
exports.request = request;
