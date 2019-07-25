<template>
	<view class="page page-fill">
		
		<view class="pending-wapper">
			<image id="face" :src="tempFace" class="pending-face" mode="scaleToFill"></image>
		</view>
		
		<view class="notice">
			<view class="notice-words">
				* 请从相册中选择等比宽高的图片噢~
			</view>
		</view>
		
		<view class="footer-opertor">
			<view class="opertor-words" @click="changePendingFace">
				重新选择
			</view>
			<view class="opertor-words" @click="upload">
				确认上传
			</view>
		</view>
		
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		data() {
			return {
				tempFace:""
			};
		},
		onLoad(params) {
			console.log(params)
			var tempFilePaths = params.tempFilePaths;
			this.tempFace = tempFilePaths;
		},
		methods: {
			changePendingFace(){
				var me = this;
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					sourceType:["album"],
					success(res) {
						//获得临时路径
						var tempFilePaths = res.tempFilePaths[0];
						me.tempFace = tempFilePaths
					}
				})
			},
			upload(){
				var me = this;
				var globalUser = me.getGlobalUser("globalUser");
				
				uni.showLoading({
					mask:true,
					title:"上传中,请稍后..."
				})
				uni.uploadFile({
					url:common.localUrl + `/user/uploadFace?userId=${globalUser.id}`,
					filePath:me.tempFace,
					name:"file",
					header:{
						headerUserId: globalUser.id,
						headerUserToken: globalUser.userUniqueToken
					}, 
					success(res) {
						var resData = JSON.parse(res.data) ;
						if(resData.code === 0){
							//获得最新的用户数据
							var userInfo = resData.data;
							uni.setStorageSync("globalUser",userInfo);
							uni.navigateBack({
								delta:1
							})
						} else {
							uni.showToast({
								title:resData.msg,
								image:"/static/icos/error.png",
								duration:2000
							})
						}
					},
					complete() {
						uni.hideLoading()
					}
				})
				
			}
		}
	}
</script>

<style>
/* 页面铺满屏幕 */
.page-fill {
	width:100%;
	height: 100%;
	position: absolute;
	background: black;
}

.pending-wapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	margin-top: 40upx;
}
.pending-face {
	width: 600upx;
	height: 600upx;
}

.notice {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}

.notice-words {
	color: gray;
	font-size: 13px;
	margin-top: 30upx;
	width: 600upx;
}

/* 底部操作 start */
.footer-opertor {
	position: fixed;
	bottom: 0;
	
	border-top: #515050 solid 1px;
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	padding: 30upx;
}
.opertor-words {
	color: #e8e5e5;
	font-size: 16px;
	width: 200upx;
}
/* 底部操作 end */
</style>
