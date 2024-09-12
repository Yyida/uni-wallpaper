<template>
	<view class="classlist-layout">
		<view v-show="loading" class="lodingLayout">
			<uni-load-more  status="loading"></uni-load-more>
		</view>
		<view class="content-list">
			<view class="content-item" v-for="(item, index) in classList" :key="item._id" @click="toPreview(item._id)">
				<image class="pic" :src="item.smallPicurl" mode="aspectFill"></image>
			</view>
		</view>
		<view v-show="total !== 0 && total >= classList.length" class="lodingLayout">
			<uni-load-more  :status="total > classList.length ? 'loading' : 'noMore'"></uni-load-more>
		</view>
		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script setup>
	import { onLoad, onReachBottom } from '@dcloudio/uni-app'
	import {ref} from 'vue'
	import {GetClassifyList} from '@/api/index.js'
	let params = ref({
		pageNum: 1,
		pageSize: 10,
		classid: ''
	})
	let loading = ref(true)
	const total = ref(0)
	const classList = ref([])
	const getData = () =>{ 
		console.log('getData')
		GetClassifyList(params.value).then(result => {
			classList.value = classList.value.concat(result.data)
			total.value = result.total
			uni.setStorageSync('storageClassList', (classList.value))
		}).finally(() =>{ 
			loading.value = false
		})
	}
	const toPreview = (id) => {
		uni.navigateTo({
			url: `/pages/preview/preview?currentId=${id}`
		})
	}
	onLoad((options) => {
		params.value.classid = options.id
		uni.setNavigationBarTitle({
			title:options.name
		})
		getData()
	})
	onReachBottom(() =>{ 
		if (total.value > classList.value.length) {
			params.value.pageNum++
			getData()
		}
	})
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
