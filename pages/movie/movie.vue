<template>
	<view class="page">
		
		<!-- 视频播放  start-->
		<view class="player">
			<video
				id="myTrailer"
				:src="trailerInfo.trailer"
				:poster="trailerInfo.poster"
				class="movie"
				controls></video>
		</view>
		<!-- 视频播放  end -->
		
		<!-- 影片基本信息 start -->
		<view class="movie_info">
			<navigator :url="'../cover/cover?cover=' + trailerInfo.cover">
				<image 
					:src="trailerInfo.cover" 
					class="cover"></image>
			</navigator>
			<view class="movie_desc">
				<view class="title">{{trailerInfo.name}}</view>
				<view class="basic_info">{{trailerInfo.basicInfo }}</view>
				<view class="basic_info">{{trailerInfo.originalName}}</view>
				<view class="basic_info">{{trailerInfo.totalTime}}</view>
				<view class="basic_info">{{trailerInfo.releaseDate}}</view>
				
				<view class="score_block">
					<view class="big_score">
						<view class="score_words">综合评分：</view>
						<view class="movie_score">{{trailerInfo.score}}</view>
					</view>
					<view class="score_stars">
						<block v-if="trailerInfo.score >= 0">
							 <trailerStars :innerScore="trailerInfo.score" showNum="0"></trailerStars>
						</block>
						<view class="prise_counts">
							{{trailerInfo.prisedCounts}} 人点赞
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 影片基本信息 end -->
		<view class="line_wapper">
			<view class="line">
				
			</view>
		</view>
		
		<!-- 剧情介绍    start -->
		<view class="plots_block">
			<view class="plots_title">剧情介绍</view>
			<view class="plots_desc">{{trailerInfo.plotDesc}}</view>
		</view>
		<!-- 剧情介绍    end -->
		
		<!-- 演职人员   start -->
		<view class="scroll_block">
			<view class="scroll_title">演职人员</view>
			<scroll-view scroll-x class="scroll_list">
				
				<view class="actor_wapper" v-for="(director,staffIndex) in directorArray" :key="director.id">
					<image 
						:src="director.photo" 
						class="single_actor"
						mode="aspectFill"
						@click="lookStaffs"
						:data-staffIndex="staffIndex"
						></image>
					<view class="actor_name">
						{{director.name}}
					</view>
					<view class="actor_role">
						{{director.actName}}
					</view>
				</view> 
				
					
				<view class="actor_wapper" v-for="(actor,actorIndex) in actorArray" :key="actor.id">	
					<image 
						:src="actor.photo" 
						class="single_actor"
						mode="aspectFill"
						@click="lookStaffs"
						:data-staffIndex="actorIndex + directorArray.length"
						></image>
					<view class="actor_name">
						{{actor.name}}
					</view>
					<view class="actor_role">
						{{actor.actName}}
					</view>
				</view>
				
			</scroll-view>
		</view>
		<!-- 演职人员   end -->

		<!-- 剧照  start -->
		<view class="scroll_block">
			<view class="scroll_title">剧照</view>
			<scroll-view scroll-x class="scroll_list">
				<image 
					v-for="(img,imgIndex) in plotPicsArray" 
					:src="img" 
					:key="imgIndex"
					class="ploat_image"
					mode="aspectFill"
					@click="lookMe"
					:data-imgIndex="imgIndex"
					></image>
			</scroll-view>
		</view>
		<!-- 剧照  end -->
		
	</view>
</template>

<script>
	import common from "../../common/common.js"
	import trailerStars from "../../components/trailerStars.vue"
	export default {
		data() {
			return {
				trailerInfo : {},
				plotPicsArray: [],
				directorArray: [],
				actorArray: []
			}
		},
		onLoad(parms) {
			var me = this;
			var trailerId = parms.trailerId;
			
			//通过api设置导航栏的属性
			uni.setNavigationBarColor({
				frontColor:"#000000",
				backgroundColor:"#ffffff"
			})
			// 获取影片
			// uni.request({
			// 	url: common.serverUrl + '/search/trailer/' + trailerId,
			// 	method: "POST",
			// 	header:{
			// 		'content-type':'application/x-www-form-urlencoded'
			// 	},
			// 	data:{
			// 		qq: this.qq
			// 	},
			// 	success: (res) => {
			// 		if (res.data.status == 200) {
			// 			var trailerInfo = res.data.data;
			// 			me.trailerInfo = trailerInfo;
			// 			var plotPicsArray = JSON.parse(trailerInfo.plotPics);
			// 			me.plotPicsArray = plotPicsArray;
			// 		}
			// 	}
			// });
			uni.request({
				url: common.localUrl + '/movie/trailer/' + trailerId,
				method: "get",
				success: (res) => {
					if (res.data.code === 0) {
						var trailerInfo = res.data.data;
						me.trailerInfo = trailerInfo;
						var plotPicsArray = JSON.parse(trailerInfo.plotPics);
						me.plotPicsArray = plotPicsArray;
					}
				}
			});
			//获取导演
			// uni.request({
			// 	url: common.serverUrl + '/search/staff/' + trailerId + '/1',
			// 	method: "POST",
			// 	header:{
			// 		'content-type':'application/x-www-form-urlencoded'
			// 	},
			// 	data:{
			// 		qq: this.qq
			// 	},
			// 	success: (res) => {
			// 		if (res.data.status == 200) {
			// 			me.directorArray = res.data.data;
			// 		}
			// 	}
			// });
			uni.request({
				url: common.localUrl + '/movie/trailer/' + trailerId + '/1',
				method: "get",
				success: (res) => {
					console.log(res)
					if (res.data.code === 0) {
						me.directorArray = res.data.data;
					}
				}
			});
			//获取演员
			// uni.request({
			// 	url: common.serverUrl + '/search/staff/' + trailerId + '/2',
			// 	method: "POST",
			// 	header:{
			// 		'content-type':'application/x-www-form-urlencoded'
			// 	},
			// 	data:{
			// 		qq: this.qq
			// 	},
			// 	success: (res) => {
			// 		if (res.data.status == 200) {
			// 			me.actorArray = res.data.data;
			// 		}
			// 	}
			// });
			uni.request({
				url: common.localUrl + '/movie/trailer/' + trailerId + '/2',
				method: "get",
				success: (res) => {
					if (res.data.code === 0) {
						me.actorArray = res.data.data;
					}
				}
			});
		},
		//页面初次渲染完成，获得视频上下文对象
		onReady() {
			this.videoContext = uni.createVideoContext('myTrailer');
		},
		onHide() {
			//页面被隐藏的时候暂停播放
			this.videoContext.pause()
		},
		onShow() {
			//页面被再次显示的时候，可以继续播放
			if(this.videoContext){
				this.videoContext.play()
			}
		},
		//此函数仅支持小程序端的分享   分享到微信群或好友
		onShareAppMessage(res) {
			var me = this;
			console.log(me.trailerInfo.name)
			return {
				title: me.trailerInfo.name,
				path: '/pages/movie/movie?trailerId='+ me.trailerInfo.id
			}
		},
		methods: {
			lookMe(e) {
				var me = this;
				var imgIndex = e.currentTarget.dataset.imgindex;
				uni.previewImage({
					current:me.plotPicsArray[imgIndex],
					urls:this.plotPicsArray,
					loop:true
				})
			},
			lookStaffs(e) {
				var me = this;
				var staffIndex = e.currentTarget.dataset.staffindex;
				//拼接导演和演员的数组，成为一个新数组
				var directorArray = me.directorArray;
				var actorArray = me.actorArray;
				var newStaffArray = [];
				newStaffArray = [...directorArray,...actorArray]
				var urls = [];
				newStaffArray.map(item=>{
					urls.push(item.photo)
				})
				uni.previewImage({
					current:urls[staffIndex],
					urls:urls,
				})
			}
		},
		//监听导航浏览的按钮
		onNavigationBarButtonTap(e) {
			var me = this;
			var index = e.index;
			var trailerInfo = me.trailerInfo; 
			var trailerId = trailerInfo.id;
			var trailerName = trailerInfo.name;
			var cover = trailerInfo.cover;
			var poster = trailerInfo.poster;
			
			if(index == 0){
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://www.imovietrailer.com/#/pages/movie/movie?trailerId="+trailerId,
					title: `超英预告：《${trailerName}》`,
					summary: `超英预告：《${trailerName}》`,
					imageUrl: cover,
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					}
				});
			}
		},
		components: {
			trailerStars
		},
	}
</script>

<style>
@import url("movie.css");
</style>
