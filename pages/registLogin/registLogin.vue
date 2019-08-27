<template>
	<view class="body">
		<form @submit="formSubmit" >
			<view class="face-wapper">
				<image src="/static/icos/default-face.png" class="face"></image>
			</view>
			
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input type="text" name="username" value="" class="input" placeholder="请输入用户名称" />
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input type="text" name="password" password="true" class="input" value="" placeholder="请输入密码" />
			</view>
			
			<button 
				type="primary" 
				style="margin-top: 60upx;width: 90%;" 
				form-type="submit"
				class="input" 
				>注册/登陆</button>
		</form>
		
		<!-- 第三方登录H5不支持，所以隐藏掉 -->
		<!-- #ifndef H5 -->
			<view class="third-wapper">
				
				<view class="third-line">
					<view class="single-line">
						<view class="line"></view>
					</view>
					
					<view class="third-words">第三方账号登录</view>
					
					<view class="single-line">
						<view class="line"></view>
					</view>
				</view>
				
				<view class="third-icos-wapper">
					<!-- 5+app 用qq/微信/微博 登录 小程序用微信小程序登录 h5不支持 -->
					<!-- #ifdef APP-PLUS -->
						<image src="/static/icos/weixin.png" data-logintype="weixin" @click="appOAuthLogin" class="third-ico"></image>
						<image src="/static/icos/QQ.png" data-logintype="qq" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
						<image src="/static/icos/weibo.png" data-logintype="sinaweibo" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
						<button open-type='getUserInfo' @getuserinfo="wxLogin" class="third-btn-ico">
						</button>
					<!-- #endif -->
				</view>
			</view>
		<!-- #endif -->
	</view>
	
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			appOAuthLogin(e){
				var me = this;
				//获取用户的登陆类型
				var loginType = e.currentTarget.dataset.logintype;
				//授权登陆
				uni.login({
					provider:loginType,
					success(loginRes) {
						//授权登陆成功后，获取用户信息
						uni.getUserInfo({
							provider:loginType,
							success(info) {
								var userInfo = info.userInfo;
								var face = "";
								var nickname = ""; 
								var openIdOrUid =  "";
								if(loginType == 'weixin'){
									face = userInfo.avatarUrl;
									nickname = userInfo.nickName;
									openIdOrUid = userInfo.openId;
								}else if( loginType == "qq") {
									face = userInfo.figureurl_qq_2;
									nickname = userInfo.nickName;
									openIdOrUid = userInfo.openId;
								}else if(loginType == "sinaweibo"){
									face = userInfo.avatar_large;
									nickname = userInfo.nickname;
									openIdOrUid = userInfo.id;
								}
								
								// 调用开发者后台，执行一键注册或登录
								uni.request({
									url: common.serverUrl + `/appUnionLogin/"${loginType}?qq=${me.qq}` , 
									data: {
										"loginType":loginType,
										"appLoginUserBO":info,
										"openIdOrUid": openIdOrUid,
										"nickname": nickname,
										"face": face
									},
									method: "POST",
									success(result) {
										if (result.data.status == 200) {
											var userInfo = result.data.data;
											uni.showToast({
												title:"登陆成功",
												mask:false,
												duration:1500
											})
											// 保存用户信息到全局的缓存中
											uni.setStorageSync("globalUser", userInfo);
											// 切换页面跳转，使用tab切换的api
											uni.switchTab({
												url: "../me/me"
											});
										}
									}
								})
							}
						})
					}
				})
				
			},
			//实现在微信小程序端的微信登陆
			wxLogin(e){
				var me = this;
				var userInfo = e.detail.userInfo;
				//实现微信登陆
				uni.login({
					provider:"weixin",
					success(loginResult) {
						//获得微信登陆的code授权码
						var code = loginResult.code
						console.log(loginResult)
						//设置登陆到那个对应的微信小程序。 可以根据自己的后端实现业务参数
						// [0:NEXT超英预告][1:超英预告][2:NEXT学院电影预告]
						var loginToWhichMP = 1;
						uni.request({
							url:common.localUrl + `/user/mpWXLogin/${code}?qq=${me.qq}`,
							data:{
								"avatarUrl": userInfo.avatarUrl,
								"nickName": userInfo.nickName,
								"whichMP": loginToWhichMP
							},
							method: "POST",
							success(userResult) {
								console.log(userResult);
								var userInfo = userResult.data.data;
								// 保存用户信息到全局的缓存中
								uni.showToast({
									title:"登陆成功",
									mask:false,
									duration:1500
								})
								uni.setStorageSync("globalUser", userInfo);
								// 切换页面跳转，使用tab切换的api
								uni.switchTab({
									url: "../me/me"
								});
							}
						})
					}
				})
			},
			formSubmit(e){
				var me = this;
				var username = e.detail.value ? e.detail.value.username : "";
				var password = e.detail.value ? e.detail.value.password : "";
				// uni.request({
				// 	url: common.serverUrl + '/user/registOrLogin?qq='+this.qq,
				// 	method: "POST",
				// 	header:{
				// 		'content-type':'application/json;charset=UTF-8'
				// 	},
				// 	data:{
				// 		"username": username,
				// 		"password": password
				// 	},
				// 	success: (res) => {
				// 		// 获取真实数据之前，务必判断状态是否为200
				// 		if (res.data.status == 200) {
				// 			var userinfo = res.data.data
				// 			//保存用户信息到全局的缓存中
				// 			uni.setStorageSync("globalUser",userinfo)
				// 			//切换页面跳转，使用tab切换的api
				// 			uni.switchTab({
				// 				url:"../me/me"
				// 			})
				// 		} else if (res.data.status == 500) {
				// 			uni.showToast({
				// 				title:res.data.msg,
				// 				duration:2000,
				// 				image:"/static/icos/error.png"
				// 			})
				// 		}
				// 	},
				// 	complete() {
				// 		
				// 	}
				// })
				uni.request({
					url: common.localUrl + '/user/registOrLogin',
					method: "POST",
					data:{
						"username": username,
						"password": password
					},
					success: (res) => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code === 0) {
							var userinfo = res.data.data
							//保存用户信息到全局的缓存中
							uni.setStorageSync("globalUser",userinfo)
							uni.showToast({
								title:"登陆成功",
								mask:false,
								duration:1500
							})
							//切换页面跳转，使用tab切换的api
							uni.switchTab({
								url:"../me/me"
							})
						} else {
							uni.showToast({
								title:res.data.msg,
								duration:2000,
								image:"/static/icos/error.png"
							})
						}
					},
					complete() {
						
					}
				})
			}
		},
		onLoad() {
			
			
		}
	}
</script>

<style>
@import url("registLogin.css");
</style>
