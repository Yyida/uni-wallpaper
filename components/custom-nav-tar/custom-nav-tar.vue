<template>
    <view class="layout">
		<view class="navTar">
			<view class="statTar" :style="{height:getStatuBarHeight() + 'px'}"></view>
			<view class="titleBar" :style="{height: getMenuButtonBoundingClientRect() + 'px'}">
				<view class="title">{{title}}</view>
				<view class="search">
					<uni-icons class="search-icon" type="search" size="18" color="#999999"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height:getNavTarbarHeight() + 'px'}"></view>
    </view>
</template>

<script setup>
	import { getStatuBarHeight, getMenuButtonBoundingClientRect, getNavTarbarHeight } from '@/utils/system.js';
	defineProps({
		title: {
			type: String,
			default: "壁纸"
		}
	})
</script>

<style lang="scss" scoped>
.layout {
	.navTar {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom, transparent , #ffffff 400rpx), // 400rpx 以下就是白色
		linear-gradient(to right, #beecd8 20%, #f4e2d8);
		.titleBar{
			padding: 0 30rpx;
			display: flex;
			align-items: center;
			.title {
				font-size: 44rpx;
				color: $text-font-color-1;
			}
			.search {
				margin-left: 30rpx;
				height: 50rpx;
				width: 220rpx;
				border: 1rpx solid #ffffff;
				border-radius: 60rpx;
				background: rgba(255,255,255,.4);
				font-size: 28rpx;
				color: #999999;
				display: flex;
				align-items: center;
				.search-icon {
					padding-left: 5rpx;
				}
				.text {
					padding-left: 5rpx;
				}
			}
		}
		.fill{}
	}
}
</style>