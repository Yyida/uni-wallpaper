<template>
	<view class="calssify-container pageBg">
		<custom-nav-tar title="分类"></custom-nav-tar>
		<view class="calssify-content">
			<theme-item v-for="item in classify" :key="item._id" :item="item"></theme-item>
		</view>
		
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import {GetClassify} from '@/api/index.js'
	import {ref} from 'vue'
	const classify = ref([])
	const getClasses = () =>{
		uni.showLoading({
			title: '数据加载中...',
			mask: true
		})
		GetClassify({pageSize: 99}).then(result => {
			classify.value = result.data
		}).finally(() => {
			uni.hideLoading()
		})
	}
	onLoad(() => {
		getClasses()
	})
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
