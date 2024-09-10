<template>
	<view class="home-layout-contaner pageBg">
		<view class="banner-container">
			<swiper class="swiper-container bbox" autoplay :interval="3000" :duration="200" circular indicator-dots indicator-color="rgba(255,255,255,.5)" indicator-active-color="rgba(255,255,255)" >
				<swiper-item v-for="item in 3">
					<view class="swiper-item bbox">
						<image src="../../common/images/banner3.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice-container bbox flex jcc aic">
			<view class="lf-col flex jcc aic">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="notice-text">公告</text>
			</view>
			<view class="cn-col">
				<swiper class="notice-swiper" vertical autoplay :interval="1500" :duration="200" circular>
					<swiper-item v-for="item in 3">
						<view class="notice-swiper-item">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="rg-col flex jcc aic">
				<uni-icons type="right" size="16" color="#c1c1c1"></uni-icons>
			</view>
		</view>
		
		
		<view class="select-container">
			<common-title>
				<template #text>
					<view class="common-title-lf">
						每日推荐
					</view>
				</template>
				<template #custom>
					<view class="common-title-rg">
						<view class="date-icon">
							<uni-icons type="calendar" size="20" ></uni-icons>
						</view>
						<view class="date-text">
							<uni-dateformat :date="Date.now()" format="dd号"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="select-content">
				<scroll-view class="select-scorll" scroll-x>
					<view class="select-item" v-for="item in 8">
						<image class="item-image" src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme-container">
			<common-title>
				<template #text>
					<view class="common-title-lf">
						精选推荐
					</view>
				</template>
				<template #custom>
					<view class="common-title-rg">
						<view class="common-title-rg-text">
							More+
						</view>
					</view>
				</template>
			</common-title>
			
			<view class="theme-content">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.common-title-lf {
		font-size: 40rpx;
	}
	.common-title-rg {
		color: $brand-theme-color;
		display: flex;
		align-items: center;
		.date-icon {
			:deep() {
				.uni-icons {
					color: $brand-theme-color !important;
				}
			}
		}
		.common-title-rg-text {
			color: #888888;
			font-size: 32rpx;
		}
	}
	.home-layout-contaner {
		.banner-container {
			width: 750rpx;
			padding-top: 30rpx;
			.swiper-container {
				width: 750rpx;
				height: 340rpx;
				padding: 0 30rpx;
				.swiper-item {
					width: 100%;
					height: 100%;
					image {
						width: 100%;
						height: inherit;
						border-radius: 10rpx;
					}
				}
			}
		}
		
		.notice-container {
			height: 80rpx;
			width: 690rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 30rpx auto;
			border-radius: 80rpx;
			.lf-col{
				width: 140rpx;
				:deep() {
					.uni-icons {
						color:$brand-theme-color !important;
					}
				}
				.notice-text {
					font-size: 30rpx;
					font-weight: 600;
					margin-left: 5rpx;
					color: $brand-theme-color;
				}
			}
			.cn-col{
				flex:1;
				color: #333;
				
				.notice-swiper {
					width: 100%;
					height: 80rpx;
					.notice-swiper-item {
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
			.rg-col{
				width: 70rpx;
			}
		}
		
		
		.select-container {
			padding: 0 30rpx;
			.select-content {
				width: 720rpx;
				margin-top: 30rpx;
				.select-scorll {
					white-space: nowrap;
					.select-item {
						display: inline-block;
						width: 200rpx;
						height: 430rpx;
						margin-right: 15rpx;
						.item-image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
					.select-item:last-child {
						margin-right: 30rpx;
					}
				}
			}
		}
		
		.theme-container {
			padding: 50rpx 30rpx;
			padding-bottom: 140rpx;
			.theme-content {
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
