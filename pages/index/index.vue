<template>
	<view class="page">
		<!-- <helloComp myval="hello next"></helloComp> -->
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item v-for="caroursel in carourselList" :key="caroursel.id">
				<image 
					:src="caroursel.image" 
					class="carousel"
					></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图  end-->
		
		<!-- 热门超英  start -->
		<view class="page_block super_hot">
			<view class="hot_title_wapper">
				<image src="/static/icos/hot.png" class="hot_ico"></image>
				<view class="hot_title">
					热门超英
				</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="page_block hot">
			<view 
				class="single_poster" 
				v-for="hotSuperheroList in hotSuperheroList" 
				:key="hotSuperheroList.id"
				:data-trailerId="hotSuperheroList.id"
				@click="showTraller"
				>
				<view class="poster_wapper">
					<image :src="hotSuperheroList.cover" class="poster"></image>
					<view class="movie_name">
						{{hotSuperheroList.name}}
					</view>
					<trailerStars :innerScore="hotSuperheroList.score" showNum="1"></trailerStars>
				</view>
			</view>
		</scroll-view>
		<!-- 热门超英 end -->
		
		
		<!-- 热门预告  start -->
		<view class="page_block super_hot">
			<view class="hot_title_wapper">
				<image src="/static/icos/interest.png" class="hot_ico"></image>
				<view class="hot_title">
					热门预告
				</view>
			</view>
		</view>
		
		<view class="hot_movies page_block">
			<video
				:id="trailer.id"
				:data-playIndex="trailer.id"
				@play="meIsPlaying"
				v-for="(trailer,index) in hotTrailerList"
				:key="index"
				:src="trailer.trailer"
				:poster="trailer.poster"
				class="hot_movie_single"
				controls></video>
		</view>
		
		<!-- 热门预告  end -->
		
		<!-- 猜你喜欢 start -->
		<view class="page_block super_hot">
			<view class="hot_title_wapper">
				<image src="/static/icos/guess-u-like.png" class="hot_ico"></image>
				<view class="hot_title">
					猜你喜欢
				</view>
			</view>
		</view>
		
		<view class="page_block guess_u_like">
			
			<view 
				class="single_like_movie" 
				v-for="(guess, gIndex) in guessULikeList" 
				:key="gIndex">
				<image 
					:src="guess.cover" 
					class="poster like_movie"
					:data-trailerId="guess.id"
					@click="showTraller"
					></image>
				<view class="movie_desc">
					<view class="movie_title">
						{{guess.name}}
					</view>
					<trailerStars :innerScore="9.1" showNum="0"></trailerStars>
					<view class="movie_info movie_title">
						{{guess.basicInfo}}
					</view>
					<view class="movie_info movie_title">
						{{guess.releaseDate}}
					</view>
				</view>
				<view class="movie_oper" :data-gIndex="gIndex" @click="praiseMe">
					<image src="/static/icos/praise.png" class="praise_ico"></image>
					<view class="praise_me">
						点赞
					</view>
					<view :animation="animationDataArr[gIndex]" class="praise_me animation_opacity">
						+1
					</view>
				</view>
			</view>
			<!-- <view class="single_like_movie">
				<image src="/static/poster/civilwar.jpg" class="poster like_movie"></image>
				<view class="movie_desc">
					<view class="movie_title">
						蝙蝠侠大战超人
					</view>
					<trailerStars :innerScore="9.1" showNum="0"></trailerStars>
					<view class="movie_info movie_title">
						2018 / 美国 / 科幻 / 超级英雄
					</view>
					<view class="movie_info movie_title">
						上映时间：2018-08-24(中国大陆)
					</view>
				</view>
				<view class="movie_oper" @click="praiseMe">
					<image src="/static/icos/praise.png" class="praise_ico"></image>
					<view class="praise_me">
						点赞
					</view>
					<view :animation="animationData" class="praise_me animation_opacity">
						+1
					</view>
				</view>
			</view> -->
		</view>
		
		<!-- 猜你喜欢  end -->
		
	</view>
</template>

<script>
	import common from "../../common/common.js"
	import helloComp from "../../components/helloComp.vue";
	import trailerStars from "../../components/trailerStars.vue"
	export default {
		data() {
			return {
				carourselList : [],
				hotSuperheroList:[],
				hotTrailerList:[],
				guessULikeList:[],
				animationData: {},
				animationDataArr: [
					{}, {}, {}, {}, {}
				]
			}
		},
		onUnload() {
			//页面卸载的时候清楚动画数据
			this.animationData = {};
			this.animationDataArr = [
				{}, {}, {}, {}, {}
			];
		},
		onLoad() {
			var _that = this;
			//在页面创建的时候创建一个临时动画对象
			// #ifdef APP-PLUS || MP-WEIXIN
				this.animation = uni.createAnimation();
			// #endif
			uni.request({
				url: common.serverUrl + '/index/carousel/list',
				// url: this.serverUrl + '/index/carousel/list',
				method: 'POST',
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data: {
					qq: this.qq
				},
				success: res => {
					if(res.data.status ==200){
						var carourselList = res.data.data;
						this.carourselList = carourselList;
					}
				}
			});
			
			//查询热门超英
			uni.request({
				url: common.serverUrl + '/index/movie/hot?type=superhero',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq: this.qq
				},
				success: (res) => {
					if (res.data.status == 200) {
						var hotSuperheroList = res.data.data;
						this.hotSuperheroList = hotSuperheroList;
					}
				}
			});
			
			//查询热门预告
			uni.request({
				url: common.serverUrl + '/index/movie/hot?type=trailer',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq: this.qq
				},
				success: (res) => {
					if (res.data.status == 200) {
						var hotTrailerList = res.data.data;
						this.hotTrailerList = hotTrailerList;
					}
				}
			});
			
			this.refresh()
		},
		onPullDownRefresh() {
			this.refresh()
		},
		methods: {
			refresh(){
				uni.showLoading({	//开启loading
					mask:true
				})
				uni.showNavigationBarLoading()	//开启导航栏loading
				//查询猜你喜欢数据列表
				uni.request({
					url: common.serverUrl + '/index/guessULike',
					method: "POST",
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data:{
						qq: this.qq
					},
					success: (res) => {
						if (res.data.status == 200) {
							var guessULikeList = res.data.data;
							this.guessULikeList = guessULikeList;
						}
					},
					complete() {
						uni.hideLoading()
						uni.hideNavigationBarLoading()	//关闭导航栏loading
						uni.stopPullDownRefresh()	//停止下拉刷新
					}
				})
			},
			showTraller(e){
				var trailerId = e.currentTarget.dataset.trailerid;
				//页面跳转api
				uni.navigateTo({
					url:"../movie/movie?trailerId="+trailerId
				})
				// uni.switchTab({
				// 	url:"../me/me"
				// })
			},
			//实现点赞动画效果
			praiseMe(e){
				// #ifdef APP-PLUS || MP-WEIXIN
				var gIndex = e.currentTarget.dataset.gindex
				//构建动画数据，并且通过step来表示这组动画的完成
				this.animation.translateY(-60).opacity(1).step({
					duration: 400
				});
				// 导出动画数据到view组件，实现组件的动画效果
				// this.animationData = this.animation.export();
				this.animationData = this.animation;
				this.animationDataArr[gIndex] = this.animationData.export();
				
				// 还原动画
				setTimeout(()=> {
					this.animation.translateY(0).opacity(0).step({
						duration: 100
					});
					this.animationData = this.animation;
					this.animationDataArr[gIndex] = this.animationData.export();
				}, 1000);
				// #endif
			},
			//播放一个视频时，需要暂停其他正在播放的视频
			meIsPlaying(e){
				var me = this;
				var trailerId = "";
				if (e) {
					trailerId = e.currentTarget.dataset.playindex;
					me.videoContext = uni.createVideoContext(trailerId);
				}
				var hotTrailerList = me.hotTrailerList;
				for(var i = 0; i< hotTrailerList.length ;i++){
					var tempId = hotTrailerList[i].id;
					if(tempId != trailerId) {
						uni.createVideoContext(tempId).pause()
					}
				}
			}
		},
		onHide() {
			if(this.videoContext){
				this.videoContext.pause()
			}
		},
		components: {
			helloComp,
			trailerStars
		},
	}
</script>
	
<style  >
	@import url("index.css");
	
</style>
