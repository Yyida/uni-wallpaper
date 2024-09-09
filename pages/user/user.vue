<template>
	<view class="user-layout pageBg">
		<view class="user-info">
			<view class="avatar">
				<image class="pic" src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">127.0.0.1</view>
			<view class="addresss">来自于：广东</view>
		</view>
		<view class="scetion">
			<view class="scetion-list">
				<view class="scetion-row">
					<view class="row-lf">
						<view class="row-icon">
							<uni-icons type="download" size="20" color="#28b389"></uni-icons>
						</view>
						<view class="row-text">我的下载</view>
					</view>
					<view class="row-rg">
						<view class="row-text">3</view>
						<uni-icons type="right" size="15" color="#aaaaaa"></uni-icons>
					</view>
				</view>
				<view class="scetion-row">
					<view class="row-lf">
						<view class="row-icon">
							<uni-icons type="star" size="20" color="#28b389"></uni-icons>
						</view>
						<view class="row-text">我的评分</view>
					</view>
					<view class="row-rg">
						<view class="row-text">3</view>
						<uni-icons type="right" size="15" color="#aaaaaa"></uni-icons>
					</view>
				</view>
				<view class="scetion-row">
					<view class="row-lf">
						<view class="row-icon">
							<uni-icons type="chatboxes" size="20" color="#28b389"></uni-icons>
						</view>
						<view class="row-text">联系客服</view>
						<!-- #ifdef MP -->
							<button open-type="contact">联系客服</button>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<button class="row-text" @click="onClickConcat">联系客服</button>
						<!-- #endif -->
					</view>
					<view class="row-rg">
						<!-- <view class="row-text">3</view> -->
						<uni-icons type="right" size="15" color="#aaaaaa"></uni-icons>
					</view>
				</view>
			</view>
			
			
			<view class="scetion-list">
				<view class="scetion-row">
					<view class="row-lf">
						<view class="row-icon">
							<uni-icons type="notification" size="20" color="#28b389"></uni-icons>
						</view>
						<view class="row-text">订阅更新</view>
					</view>
					<view class="row-rg">
						<!-- <view class="row-text">3</view> -->
						<uni-icons type="right" size="15" color="#aaaaaa"></uni-icons>
					</view>
				</view>
				<view class="scetion-row">
					<view class="row-lf">
						<view class="row-icon">
							<uni-icons type="flag" size="20" color="#28b389"></uni-icons>
						</view>
						<view class="row-text">常见问题</view>
					</view>
					<view class="row-rg">
						<!-- <view class="row-text">3</view> -->
						<uni-icons type="right" size="15" color="#aaaaaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
	const onClickConcat = () =>{ 
		console.log('打电话')
		uni.makePhoneCall({
			phoneNumber: '114' //仅为示例
		});
	}
</script>

<style lang="scss">
	.user-layout {
		.user-info {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding:50rpx 0;
			.avatar {
				width: 140rpx;
				height: 140rpx;
				border-radius: 50%;
				overflow: hidden;
				.pic {
					width:100%;
					height: 100%;
				}
			}
			.ip {
				font-size: 44rpx;
				padding: 30rpx 0 5rpx;
			}
			.addresss {
				font-size: 28rpx;
				color: #aaa;
			}
		}
		
			
		.scetion {
			.scetion-list {
				width: 690rpx;
				margin: 50rpx auto;
				border-radius: 10rpx;
				box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
				.scetion-row {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100rpx;
					padding: 0 30rpx;
					border-bottom: 1px solid #eeeeee;
					background: #ffffff;
					position: relative;
					&:last-child {
						border-bottom: none;
					}
					button {
						position: absolute;
						left: 0;
						top: 0;
						height:100rpx;
						width: 100%;
						opacity: 0;
					}
					.row-lf {
						display: flex;
						align-items: center;
						.row-icon {
							margin-right: 5px;
						}
						.row-text {
							color: #a1a1a1;
						}
					}
					.row-rg {
						display: flex;
						align-items: center;
						.row-text {
							color: #999999;
						}
					}
				}
			}
		}
	}
</style>
