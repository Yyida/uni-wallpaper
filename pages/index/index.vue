<template>
	<view class="home-layout-contaner">
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
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
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
	.home-layout-contaner {
		.banner-container {
			width: 750rpx;
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
				.notice-text {
					font-size: 30rpx;
					font-weight: 600;
					margin-left: 5rpx;
					color: #28b389;
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
	}
</style>
