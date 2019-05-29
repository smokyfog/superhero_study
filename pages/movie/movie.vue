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
			
		</view>
		<!-- 影片基本信息 end -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(parms) {
			console.log(parms)
			parms.trailerId
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("movie.css");
</style>
