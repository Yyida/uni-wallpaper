"use strict";
const filterTimerDiff = (timestamp) => {
  const now = Date.now();
  const inputTime = new Date(timestamp);
  const diff = now - inputTime;
  const minute = 1e3 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  if (diff > month) {
    return "1个月前";
  } else if (diff > week) {
    return "7天前";
  } else if (diff > day * 3) {
    return "3天前";
  } else if (diff > day) {
    return "1天前";
  } else if (diff > hour) {
    return "1小时前";
  } else {
    return `刚刚（${Math.floor(diff / minute)}分钟前）`;
  }
};
exports.filterTimerDiff = filterTimerDiff;
