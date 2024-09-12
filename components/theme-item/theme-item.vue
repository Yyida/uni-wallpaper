<template>
		<view class="container">
			<navigator class="theme-item" :url="`/pages/classlist/classlist?id=${item._id}&name=${item.name}`" v-if="!isMore" >
				<image class="pic" :src="item.picurl" mode="aspectFill"></image>
				<view class="mask">{{item.name}}</view>
				<view class="tag">{{filterTimerDiff(item.updateTime)}}</view>
			</navigator>
			<navigator class="theme-item theme-more" v-if="isMore" url="/pages/classlist/classlist" open-type="reLaunch">
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
	import {filterTimerDiff} from '@/utils/index.js'
defineProps({
		isMore: {
			type: Boolean,
			default: false
		},
		item: {
			type: Object,
			default() {
				return {
					name: "默认分类",
					picurl: '../../common/images/classify1.jpg',
					updateTime: Date.now() - 1000 * 60 * 60 * 1
				}
			}
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