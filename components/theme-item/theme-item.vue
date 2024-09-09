<template>
		<view class="container">
			<navigator class="theme-item" url="" v-if="!isMore" >
				<image class="pic" src="../../common/images/classify1.jpg" mode="aspectFill"></image>
				<view class="mask">明星分类</view>
				<view class="tag">20小时前</view>
			</navigator>
			<navigator class="theme-item theme-more" v-if="isMore" url="">
				<image class="pic" src="../../common/images/more.jpg" mode="aspectFill"></image>
				<view class="mask">
					<uni-icons type="more" size="26" color="#ffffff"></uni-icons>
					<view class="text">
						更多
					</view>
				</view>
			</navigator>
		</view>
</template>

<script setup>
defineProps({
		isMore: {
			type: Boolean,
			default: false
		}
	})
</script>

<style lang="scss">
	.theme-item{
		height: 480rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
		.pic {
			width: 100%;
		}
		.mask {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 70rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ffffff;
			background: rgba(0,0,0, 0.2);
			backdrop-filter: blur(20rpx);
			font-weight: 600;
		}
		.tag {
			position: absolute;
			left: 0;
			top: 0;
			background: rgba(250, 129, 90,0.7);
			backdrop-filter: blur(20rpx);
			color: #ffffff;
			font-size: 22rpx;
			padding: 6rpx 14rpx;
			border-radius: 0 0 20rpx 0;
			transform: scale(0.8);
			transform-origin: left top;
		}
	}
	
	.theme-more {
		.mask {
			flex-direction: column;
			height: 100%;
			background: rgba(0,0,0, 0.2);
			backdrop-filter: blur(20rpx);
			.text {
				font-size: 26rpx;
			}
		}
	}
</style>