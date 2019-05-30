<template>
	<view class="black">
		<image 
		:src="cover" 
		mode="widthFix"
		class="cover"
		@longpress="opertor"
		></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:""
			}
		},
		methods: {
			opertor(){
				var me = this;
				uni.showActionSheet({
					itemList:["下载图片"],
					success: (res) => {
						if(res.tapIndex ==0){
							uni.showLoading({
								title:"图片保存中..."
							})
							uni.downloadFile({
								url:me.cover,
								success: (result) => {
									var temFilePath = result.tempFilePath;
									uni.saveImageToPhotosAlbum({
										filePath:temFilePath,
										success: () => {
											uni.showToast({
												title:"保存成功",
												duration:2000
											})
											
										}
									})
								},
								complete: () => {
									uni.hideLoading()
								}
							})
						}
					}
				})
			}
		},
		onLoad(params) {
			this.cover = params.cover;
			//通过api设置导航栏的属性
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#000000"
			})
			
		}
	}
</script>

<style>
.black {
	background-color: #000000;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
}
.cover {
	align-self: center;
}
</style>
