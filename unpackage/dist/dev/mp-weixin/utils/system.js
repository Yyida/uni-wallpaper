"use strict";
const common_vendor = require("../common/vendor.js");
const getStatuBarHeight = () => {
  const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
  return SYSTEM_INFO.statusBarHeight || 0;
};
const getMenuButtonBoundingClientRect = () => {
  let { height, top } = common_vendor.index.getMenuButtonBoundingClientRect();
  return (top - getStatuBarHeight()) * 2 + height;
};
const getNavTarbarHeight = () => {
  return getStatuBarHeight() + getMenuButtonBoundingClientRect();
};
exports.getMenuButtonBoundingClientRect = getMenuButtonBoundingClientRect;
exports.getNavTarbarHeight = getNavTarbarHeight;
exports.getStatuBarHeight = getStatuBarHeight;
