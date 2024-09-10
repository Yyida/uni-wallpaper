<template>
	<view class="classlist-layout">
		<view class="content-list">
			<view class="content-item" v-for="item in 11">
				<image class="pic" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
	.classlist-layout {
		padding: 5rpx;
		.content-list {
			display: grid;
			grid-template-columns: repeat(3,1fr);
			gap: 5rpx;
			.content-item {
				height: 440rpx;
				.pic {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>
