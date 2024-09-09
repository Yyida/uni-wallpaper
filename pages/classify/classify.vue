<template>
	<view class="calssify-container pageBg">
		
		<view class="calssify-content">
			<theme-item v-for="item in 8"></theme-item>
		</view>
		
	</view>
</template>

<script setup>
</script>

<style lang="scss">
		
	.calssify-container {
		padding: 0 30rpx;
		.calssify-content {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 15rpx;
		}
	}
	
</style>
