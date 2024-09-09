<template>
	<view class="common-title">
		<view class="text">
			<slot name="text"></slot>
		</view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss">
	.common-title {
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
</style>