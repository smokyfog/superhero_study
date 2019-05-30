<template>
	<view class="page">
		
		<!-- 视频播放  start-->
		<view class="player">
			<video
				:src="trailerInfo.trailer"
				:poster="trailerInfo.poster"
				class="movie"
				controls></video>
		</view>
		<!-- 视频播放  end -->
		
		<!-- 影片基本信息 start -->
		<view class="movie_info">
			<image 
				:src="trailerInfo.cover" 
				class="cover"></image>
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
		
		<!-- 剧照  start -->
		<view class="score_block">
			<view class="plots_title">剧照</view>
			<scroll-view scroll-x class="score_list">
				<image 
					v-for="img in plotPicsArray" 
					:src="img" 
					class="ploat_image"></image>
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
			console.log(parms)
			var me = this;
			var trailerId = parms.trailerId;
			// 获取影片
			uni.request({
				url: common.serverUrl + '/search/trailer/' + trailerId,
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq: this.qq
				},
				success: (res) => {
					if (res.data.status == 200) {
						var trailerInfo = res.data.data;
						me.trailerInfo = trailerInfo;
						var plotPicsArray = JSON.parse(trailerInfo.plotPics);
						me.plotPicsArray = plotPicsArray;
					}
				}
			});
			//获取导演
			uni.request({
				url: common.serverUrl + '/search/staff/' + trailerId + '/1',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq: this.qq
				},
				success: (res) => {
					if (res.data.status == 200) {
						me.directorArray = res.data.data;
					}
				}
			});
			//获取演员
			uni.request({
				url: common.serverUrl + '/search/staff/' + trailerId + '/2',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq: this.qq
				},
				success: (res) => {
					if (res.data.status == 200) {
						me.actorArray = res.data.data;
					}
				}
			});
		},
		methods: {
			
		},
		components: {
			trailerStars
		},
	}
</script>

<style>
@import url("movie.css");
</style>
