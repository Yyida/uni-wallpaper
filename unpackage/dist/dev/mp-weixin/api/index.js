"use strict";
const utils_request = require("../utils/request.js");
const GetBannerList = () => {
  return utils_request.request({ url: "/homeBanner", method: "get", data: {} });
};
const GetRandomList = () => {
  return utils_request.request({ url: "/randomWall" });
};
const GetNews = (params) => {
  return utils_request.request({ url: "/wallNewsList", data: params });
};
const GetClassify = (params) => {
  return utils_request.request({ url: "/classify", data: params });
};
const GetClassifyList = (params) => {
  return utils_request.request({ url: "/wallList", data: { ...params } });
};
const SetStar = (params) => {
  return utils_request.request({ url: "/setupScore", data: params });
};
exports.GetBannerList = GetBannerList;
exports.GetClassify = GetClassify;
exports.GetClassifyList = GetClassifyList;
exports.GetNews = GetNews;
exports.GetRandomList = GetRandomList;
exports.SetStar = SetStar;
