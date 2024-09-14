<template>
	<view class="preview-container">
		<swiper class="swiper-container" :current="currentIndex" circular @change="changeSwiper">
			<swiper-item class="swiper-item" v-for="(item,index) in classList" :key="item._id">
				<image v-if="readImgs.includes(index)" class="pic" :src="item.picUrl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="mask">
			<view class="back" :style="{top: getStatuBarHeight() + 'px'}" @click="toback">
				<uni-icons type="back" color="#ffffff" size="20"></uni-icons>
			</view>
			<view class="count">{{+currentIndex + 1}} / {{classList.length}}</view>
			<view class="time">23:50</view>
			<view class="date">08月10日</view>
			<view class="footer">
				<view class="footer-item flex jcc aic" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="footer-item flex jcc aic" @click="clickStar">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">{{currentInfo.userScore ?  currentInfo.userScore || currentInfo.score : currentInfo.score}} 分</view>
				</view>
				<view class="footer-item flex jcc aic" @click="downloadImg">
					<uni-icons type="download" size="24"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="popupRef" type="bottom" is-mask-click>
			<view class="popup-content">
				<view class="popup-header">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickClose">
						<uni-icons type="closeempty" size="18" color="#999999"></uni-icons>
					</view>
				</view>
				<scroll-view class="scorll" scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text selectable class="value">{{currentInfo._id}}</text>
						</view>
						<!-- <view class="row">
							<view class="label">分类：</view>
							<text selectable class="value classify">明星分类</text>
						</view> -->
						<view class="row">
							<view class="label">发布者：</view>
							<text selectable class="value">{{currentInfo.nickname}}</text>
						</view>
						<view class="row">
							<view class="label">评分：</view>
							<uni-rate :value="currentInfo.score" readonly allowHalf :touchable="false"></uni-rate>
							<text selectable class="value rate">{{currentInfo.score}} 分</text>
						</view>
						<view class="row">
							<view class="label">摘要：</view>
							<text selectable class="value">{{currentInfo.description}}</text>
						</view>
						<view class="row">
							<view class="label">标签：</view>
							<text selectable class="value tags">
								<text class="tag" v-for="(item, index) in currentInfo.tags" :key="index">{{item}}</text>
							</text>
						</view>
						
						<view class="row tips">
							声明：本图片来用户投稿，非商业使用，用于免费学
							习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报
							至平台，邮箱513894357@qq.com， 管理将删除侵
							权壁纸，維护您的权益。
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<uni-popup ref="popupStarRef" :is-mask-click="false">
			<view class="popupStar">
				<view class="popup-header">
					<view></view>
					<view class="title">{{currentInfo.userScore ? '已评分~' : '壁纸评分'}}</view>
					<view class="close" @click="clickStarClose">
						<uni-icons type="closeempty" size="18" color="#999999"></uni-icons>
					</view>
				</view>
				
				<view class="content">
					<uni-rate :disabled="currentInfo.userScore ? true : false" disabled-color="#e96900" v-model="starValue" allow-half />
					<view class="text">{{starValue}}分</view>
				</view>
				<view class="footer">
					<button :disabled="!starValue || currentInfo.userScore" type="default" plain size="mini" @click="submitStar">确定评分</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import {getStatuBarHeight} from '@/utils/system.js'
	import {SetStar, SetDownloadLog} from '@/api/index.js'
	const popupRef = ref()
	const popupStarRef = ref()
	let starValue = ref(0)
	const classList = ref([])
	const currentId = ref()
	const currentIndex = ref()
	const readImgs = ref([])
	const currentInfo = ref({})
	const clickInfo = () => {
		popupRef.value.open()
	}
	const clickClose = () => {
		popupRef.value.close()
	}
	
	const clickStar = () => {
		starValue.value = currentInfo.value.userScore || currentInfo.value.score
		console.log(starValue.vaue, currentInfo)
		popupStarRef.value.open()
	}
	const clickStarClose = () => {
		popupStarRef.value.close()
	}
	const submitStar = () => {
		const {classid, _id:wallId} = currentInfo.value
		uni.showLoading({
			title:'正在加载...',
			mask:true
		})
		SetStar({
			classid,
			wallId,
			userScore: starValue.value
		}).then(result =>{
			if(result.errCode === 0) {	
				classList.value[currentIndex.value] = {...currentInfo.value, userScore: starValue.value, score: starValue.value}
				console.log('classList', classList.value)
				currentInfo.value = Object.assign(currentInfo.value, {
					userScore: starValue.value
				})
				uni.setStorageSync('storageClassList', classList.value)
				uni.showToast({
					title: result.errMsg,
					icon: 'none',
					mask:true,
					duration: 2000
				})
				clickStarClose()
			}
		}).finally(() => {
			uni.hideLoading()
		})
	}
	
	const toback = () => {
		uni.navigateBack()
	}
	const changeSwiper = (e) => {
		currentIndex.value = e.detail.current
		filterReadImgs()
		currentInfo.value = classList.value[currentIndex.value]
	} 
	
	const filterReadImgs = () => {
		readImgs.value.push(
			currentIndex.value - 1 < 0 ? classList.value.length - 1 : currentIndex.value - 1,
			currentIndex.value,
			currentIndex.value + 1 > classList.value.length - 1 ? 0 : currentIndex.value + 1
		)
		readImgs.value = [...new Set(readImgs.value)]
	}
	
	const downloadImg = () =>{ 
		// #ifdef H5
		uni.showModal({
			title:'长按图片保存！',
			showCancel:true
		})
		// #endif
		
		// #ifndef H5
		uni.showLoading({
			title: '下载中...',
			mask:true
		})
		SetDownloadLog({
			classid: currentId.value,
			wallId: currentInfo.value._id
		}).then(() => {
			uni.getImageInfo({
				src: currentInfo.value.picUrl,
				success:(result) => { 
					if(result.errMsg == "getImageInfo:ok") {
						uni.saveImageToPhotosAlbum({
							filePath: result.path,
							success:(respone) =>{ 
								uni.showModal({
									title: '温馨提示',
									content: '保存成功',
									showCancel:false
								})
							},
							fail:(err) =>{
								if(err.errMsg == 'saveImageToPhotosAlbum:fail cancel') {
									return
								}
								uni.showModal({
									title: '温馨提示',
									content: '保存到相册需要授权',
									success:(res) =>{
										if (res.confirm) {
											uni.openSetting({
												success:(authConfig) => {
													if (authConfig.authSetting['scope.writePhotosAlbum']) {
														uni.showToast({
															title: '获取授权成功',
															icon: 'none'
														})
													} else {
														uni.showToast({
															title: '获取授权失败',
															icon: 'none'
														})
													}
												}
											})
										}
									}
								})
								
							}
						})
					}
				},
				fail:(err) =>{
					uni.showModal({
						title: '温馨提示',
						content: '获取图片信息失败',
						showCancel:false
					})
				},
				complete:() => {
					uni.hideLoading()
				}
			})
		}).catch((err) => {
			uni.hideLoading()
			throw err
			return 
		})
		// #endif
	}
	
	onLoad((e) =>{
		console.log(e)
		currentId.value = e.currentId
		const list = uni.getStorageSync('storageClassList') || []
		console.log('list', list)
		classList.value = list.map(item => { 
			return {
				...item,
				picUrl: item.smallPicurl.replace('_small.webp','.jpg')
			}
		})
		currentIndex.value = classList.value.findIndex(item => item._id === currentId.value)
		console.log(currentIndex.value, +'aaa11')
		filterReadImgs()
		currentInfo.value = classList.value[currentIndex.value]
		console.log(readImgs)
		console.log('classList', classList)
	})
</script>

<style lang="scss">
	.preview-container {
		width: 100%;
		height: 100vh;
		position: relative;
		.popup-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title {
				font-size: 28rpx;
				color: $text-font-color-2;
			}
			.close {
				padding: 8rpx;
			}
		}
		
		.swiper-container {
			width: 100%;
			height:100%;
			.swiper-item {
				width: 100%;
				height:100%;
				.pic {
					width: 100%;
					height:100%;
				}
			}
		}
		
		.mask {
			&>view {
				position: absolute;
				left: 0;
				right: 0;
				width:fit-content;
				margin: auto;
				color: #ffffff;
			}
			.back {
				margin-left: 40rpx;
				/* #ifndef MP-WEIXIN */
				margin-top: 20rpx;
				/* #endif */
				width: 80rpx;
				height: 80rpx;
				background: rgba(0,0,0,.5);
				backdrop-filter: blur(10rpx);
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.count {
				top: 10vh;
				background: rgba(0,0,0, 0.3);
				border-radius: 40rpx;
				backdrop-filter: blur(5rpx);
				padding: 8rpx 28rpx;
				font-size: 28rpx;
			}
			.time {
				top: calc(10vh + 80rpx);
				font-size: 140rpx;
				font-weight: 100;
				line-height: 1em;
				text-shadow: 0 4rpx rgba(0,0,0,.4);
			}
			.date {
				top: calc(10vh + 230rpx);
				font-size: 44rpx;
				text-shadow: 0 4rpx rgba(0,0,0,.4);
			}
			.footer {
				bottom: 10vh;
				width: 65vw;
				height: 120rpx;
				background: rgba(255,255,255, 0.8);
				backdrop-filter: blur(20rpx);
				border-radius: 120rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				color: $text-font-color-2;
				.footer-item {
					display: flex;
					flex-direction: column;
					padding: 2rpx 12rpx;
					.text {
						font-size: 28rpx;
					}
				}
			}
		}
	
		.popup-content {
			width: 100%;
			padding: 15rpx;
			background: #ffffff;
			border-radius: 30rpx 30rpx 0 0 ;
			.scorll {
				max-height: 60vh;
				.content {
					padding-bottom: 50rpx;
					.row {
						display: flex;
						line-height: 2em;
						padding: 10rpx 0;
						.label {
							width: 140rpx;
							color: $text-font-color-2;
							font-size: 28rpx;
							text-align: right;
						}
						.value {
							flex: 1;
							width: 0;
						}
						.rate {
							padding-left: 10rpx;
						}
						.classify {
							color: $brand-theme-color;
						}
						.tags {
							display: flex;
							.tag {
								border: 1rpx solid $brand-theme-color;
								padding: 6rpx 12rpx;
								color: $brand-theme-color;
								border-radius: 40rpx;
								font-size: 22rpx;
								margin-right: 10rpx;
							}
						}
					}
					
					.tips {
						background: #eeeeee;
						border-radius: 10rpx;
						padding: 20rpx;
						color: $text-font-color-2;
						font-size: 26rpx;
					}
				}
			}
		}
		.popupStar {
			width: 70vw;
			padding: 30rpx;
			background: #ffffff;
			border-radius: 30rpx;
			.content {
				padding: 30rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;
				.text{
					color: #e96900;
					font-size: 26rpx;
					padding-left: 20rpx;
				}
			}
			.footer {
				display: flex;
				padding: 10rpx 0;
				justify-content: center;
				align-items: center;
			}
		}
	}
	
</style>
