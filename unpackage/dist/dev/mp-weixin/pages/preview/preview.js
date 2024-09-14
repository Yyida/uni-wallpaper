"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_index = require("../../api/index.js");
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
    const popupRef = common_vendor.ref();
    const popupStarRef = common_vendor.ref();
    let starValue = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref();
    const currentIndex = common_vendor.ref();
    const readImgs = common_vendor.ref([]);
    const currentInfo = common_vendor.ref({});
    const clickInfo = () => {
      popupRef.value.open();
    };
    const clickClose = () => {
      popupRef.value.close();
    };
    const clickStar = () => {
      starValue.value = currentInfo.value.userScore || currentInfo.value.score;
      console.log(starValue.vaue, currentInfo);
      popupStarRef.value.open();
    };
    const clickStarClose = () => {
      popupStarRef.value.close();
    };
    const submitStar = () => {
      const { classid, _id: wallId } = currentInfo.value;
      common_vendor.index.showLoading({
        title: "正在加载...",
        mask: true
      });
      api_index.SetStar({
        classid,
        wallId,
        userScore: starValue.value
      }).then((result) => {
        if (result.errCode === 0) {
          classList.value[currentIndex.value] = { ...currentInfo.value, userScore: starValue.value, score: starValue.value };
          console.log("classList", classList.value);
          currentInfo.value = Object.assign(currentInfo.value, {
            userScore: starValue.value
          });
          common_vendor.index.setStorageSync("storageClassList", classList.value);
          common_vendor.index.showToast({
            title: result.errMsg,
            icon: "none",
            mask: true,
            duration: 2e3
          });
          clickStarClose();
        }
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    };
    const toback = () => {
      common_vendor.index.navigateBack();
    };
    const changeSwiper = (e) => {
      currentIndex.value = e.detail.current;
      filterReadImgs();
      currentInfo.value = classList.value[currentIndex.value];
    };
    const filterReadImgs = () => {
      readImgs.value.push(
        currentIndex.value - 1 < 0 ? classList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value + 1 > classList.value.length - 1 ? 0 : currentIndex.value + 1
      );
      readImgs.value = [...new Set(readImgs.value)];
    };
    const downloadImg = () => {
      common_vendor.index.showLoading({
        title: "下载中...",
        mask: true
      });
      api_index.SetDownloadLog({
        classid: currentId.value,
        wallId: currentInfo.value._id
      }).then(() => {
        common_vendor.index.getImageInfo({
          src: currentInfo.value.picUrl,
          success: (result) => {
            if (result.errMsg == "getImageInfo:ok") {
              common_vendor.index.saveImageToPhotosAlbum({
                filePath: result.path,
                success: (respone) => {
                  common_vendor.index.showModal({
                    title: "温馨提示",
                    content: "保存成功",
                    showCancel: false
                  });
                },
                fail: (err) => {
                  if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                    return;
                  }
                  common_vendor.index.showModal({
                    title: "温馨提示",
                    content: "保存到相册需要授权",
                    success: (res) => {
                      if (res.confirm) {
                        common_vendor.index.openSetting({
                          success: (authConfig) => {
                            if (authConfig.authSetting["scope.writePhotosAlbum"]) {
                              common_vendor.index.showToast({
                                title: "获取授权成功",
                                icon: "none"
                              });
                            } else {
                              common_vendor.index.showToast({
                                title: "获取授权失败",
                                icon: "none"
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              });
            }
          },
          fail: (err) => {
            common_vendor.index.showModal({
              title: "温馨提示",
              content: "获取图片信息失败",
              showCancel: false
            });
          },
          complete: () => {
            common_vendor.index.hideLoading();
          }
        });
      }).catch((err) => {
        common_vendor.index.hideLoading();
        throw err;
      });
    };
    common_vendor.onLoad((e) => {
      console.log(e);
      currentId.value = e.currentId;
      const list = common_vendor.index.getStorageSync("storageClassList") || [];
      console.log("list", list);
      classList.value = list.map((item) => {
        return {
          ...item,
          picUrl: item.smallPicurl.replace("_small.webp", ".jpg")
        };
      });
      currentIndex.value = classList.value.findIndex((item) => item._id === currentId.value);
      console.log(currentIndex.value, +"aaa11");
      filterReadImgs();
      currentInfo.value = classList.value[currentIndex.value];
      console.log(readImgs);
      console.log("classList", classList);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: item.picUrl
          } : {}, {
            c: item._id
          });
        }),
        b: currentIndex.value,
        c: common_vendor.o(changeSwiper),
        d: common_vendor.p({
          type: "back",
          color: "#ffffff",
          size: "20"
        }),
        e: common_vendor.unref(utils_system.getStatuBarHeight)() + "px",
        f: common_vendor.o(toback),
        g: common_vendor.t(+currentIndex.value + 1),
        h: common_vendor.t(classList.value.length),
        i: common_vendor.p({
          type: "info",
          size: "28"
        }),
        j: common_vendor.o(clickInfo),
        k: common_vendor.p({
          type: "star",
          size: "28"
        }),
        l: common_vendor.t(currentInfo.value.userScore ? currentInfo.value.userScore || currentInfo.value.score : currentInfo.value.score),
        m: common_vendor.o(clickStar),
        n: common_vendor.p({
          type: "download",
          size: "24"
        }),
        o: common_vendor.o(downloadImg),
        p: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999999"
        }),
        q: common_vendor.o(clickClose),
        r: common_vendor.t(currentInfo.value._id),
        s: common_vendor.t(currentInfo.value.nickname),
        t: common_vendor.p({
          value: currentInfo.value.score,
          readonly: true,
          allowHalf: true,
          touchable: false
        }),
        v: common_vendor.t(currentInfo.value.score),
        w: common_vendor.t(currentInfo.value.description),
        x: common_vendor.f(currentInfo.value.tags, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        y: common_vendor.sr(popupRef, "2470b0db-4", {
          "k": "popupRef"
        }),
        z: common_vendor.p({
          type: "bottom",
          ["is-mask-click"]: true
        }),
        A: common_vendor.t(currentInfo.value.userScore ? "已评分~" : "壁纸评分"),
        B: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999999"
        }),
        C: common_vendor.o(clickStarClose),
        D: common_vendor.o(($event) => common_vendor.isRef(starValue) ? starValue.value = $event : starValue = $event),
        E: common_vendor.p({
          disabled: currentInfo.value.userScore ? true : false,
          ["disabled-color"]: "#e96900",
          ["allow-half"]: true,
          modelValue: common_vendor.unref(starValue)
        }),
        F: common_vendor.t(common_vendor.unref(starValue)),
        G: !common_vendor.unref(starValue) || currentInfo.value.userScore,
        H: common_vendor.o(submitStar),
        I: common_vendor.sr(popupStarRef, "2470b0db-7", {
          "k": "popupStarRef"
        }),
        J: common_vendor.p({
          ["is-mask-click"]: false
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
