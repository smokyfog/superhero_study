<template>
	<view class="page-fill page">
		<!-- 头像 -->
			<view class="page_block info-list">
			<view class="item-wapper face-line-upbottom" @click="operator">
				<view class="info-words">头像</view>
				
				<view class="right-wapper">
					<image :src="globalUser.faceImage" class="face"></image>
					<view class="arrow-block">
						<image src="/static/icos/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!-- 昵称 -->
			<view class="item-wapper" @click="modifyNickName">
				<view class="info-words">昵称</view>
				
				<view class="right-wapper">
					<view class="gray-fields">
						{{globalUser.nickname}}
					</view>
					<view class="arrow-block">
						<image src="/static/icos/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!-- 生日 -->
			<view class="item-wapper" @click="modifyBirthday">
				<view class="info-words">生日</view>
				
				<view class="right-wapper">
					<view class="gray-fields">
						{{globalUser.birthday}}
					</view>
					<view class="arrow-block">
						<image src="/static/icos/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!-- 性别 -->
			<view class="item-wapper" @click="modifySex">
				<view class="info-words">性别</view>
				
				<view class="right-wapper">
					<view class="gray-fields">
						<view v-if="globalUser.sex ==1">
							男
						</view>
						<view v-else-if="globalUser.sex ==0">
							女
						</view>
						<view v-else>
							未选择
						</view>
					</view>
					<view class="arrow-block">
						<image src="/static/icos/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="footer-wapper">
			<view class="footer-words" @click="cleanStorage">
				清理缓存
			</view>
			<view class="footer-words" style="margin-top: 10upx;" @click="logout">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				globalUser: {}
			}
		},
		methods: {
			modifySex(){
				uni.navigateTo({
					url:"../sex/sex"
				})
			},
			modifyBirthday(){
				uni.navigateTo({
					url:"../meBirthday/meBirthday"
				})
			},
			modifyNickName(){
				uni.navigateTo({
					url:"../meNickName/meNickName"
				})
			},
			operator(){
				var me = this;
				var globalUser = me.getGlobalUser("globalUser")
				uni.showActionSheet({
					itemList:["查看我的头像","从相册选择上传"],
					success(res) {
						var index = res.tapIndex;
						if(index == 0){
							//预览头像
							var faceArray = [];
							faceArray.push(globalUser.faceImage)
							uni.previewImage({
								urls:faceArray,
								current:faceArray[0]
							})
						}else if(index == 1){
							uni.chooseImage({
								count:1,
								sizeType:["compressed"],
								sourceType:["album"],
								success(res) {
									//获得临时路径
									var tempFilePaths = res.tempFilePaths[0];
									uni.navigateTo({
										url: "../meFace/meFace?tempFilePaths="+tempFilePaths
									});
								}
							})
						}
					}
				})
			},
			cleanStorage(){
				uni.clearStorageSync()
				uni.showToast({
					title:"清理缓存成功",
					mask:false,
					duration:1500
				})
			},
			logout(){
				var me = this;
				var globalUser = this.getGlobalUser("globalUser")
				uni.request({
					url:  common.serverUrl + `/user/logout?userId=${globalUser.id}&qq=${me.qq}`,
					method: "POST",
					success: (res) => {
						if (res.data.status == 200) {
							// 用户在服务端退出登录
							uni.removeStorageSync("globalUser");
							uni.switchTab({
								url:"../me/me"
							})
						}
					}
				});
			}
		},
		onShow() {
			var me = this;
			var globalUser =  me.getGlobalUser("globalUser")
			me.globalUser = globalUser;
		}
	}
</script>

<style>
@import url("meInfo.css");
</style>
