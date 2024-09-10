<template>
	<view class="preview-container">
		<swiper class="swiper-container" circular>
			<swiper-item class="swiper-item" v-for="item in 6">
				<image class="pic" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask">
			<view class="back"></view>
			<view class="count">3 / 6</view>
			<view class="time">23:50</view>
			<view class="date">08月10日</view>
			<view class="footer">
				<view class="footer-item flex jcc aic" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="footer-item flex jcc aic">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">评分</view>
				</view>
				<view class="footer-item flex jcc aic">
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
							<text selectable class="value">12312312312321313</text>
						</view>
						<view class="row">
							<view class="label">分类：</view>
							<text selectable class="value classify">明星分类</text>
						</view>
						<view class="row">
							<view class="label">发布者：</view>
							<text selectable class="value">线下米</text>
						</view>
						<view class="row">
							<view class="label">评分：</view>
							<uni-rate :value="3.5" readonly allowHalf :touchable="false"></uni-rate>
							<text selectable class="value rate">5分</text>
						</view>
						<view class="row">
							<view class="label">摘要：</view>
							<text selectable class="value">摘要文本内容填充，摘要文本内容填充，摘要文本内容填充，摘要文本内容填充</text>
						</view>
						<view class="row">
							<view class="label">标签：</view>
							<text selectable class="value tags">
								<text class="tag" v-for="item in 3">标签名</text>
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
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const popupRef = ref(null)
	const clickInfo = () => {
		popupRef.value.open()
	}
	const clickClose = () => {
		popupRef.value.close()
	}
</script>

<style lang="scss">
	.preview-container {
		width: 100%;
		height: 100vh;
		position: relative;
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
			.back {}
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
	}
	
</style>
