<template name="trailerStars">
	<view class="movie_score_wapper">
		<image  v-for="yellow in yellowScore" src="../../static/icos/star-yellow.png" class="star_ico"></image>
		<image v-for="gray in grayScore" src="../../static/icos/star-gray.png" class="star_ico"></image>
		<view class="movie_score" v-if="showNum == 1">
			{{innerScore}}
		</view>
	</view>
</template>

<script>
	export default {
		name : "trailerStars",
		data() {
			return {
				yellowScore: 0,
				grayScore: 5
			};
		},
		props: {
			innerScore: 0 ,//定义外部传入的分数
			showNum: 0, //是否需要显示具体的分数
		},
		created() {
			var tempScore = 0;
			if(this.innerScore != null && this.innerScore != undefined && this.innerScore != ''){
				tempScore = this.innerScore;
			}
			
			var yellowScore = parseInt(tempScore / 2);
			var grayScore = 5-yellowScore;
			
			this.yellowScore = yellowScore;
			this.grayScore = grayScore;
			
		}
	}
</script>

<style>
.movie_score_wapper {
	display: flex;
	flex-direction: raw;
}
.star_ico {
	width: 20upx;
	height: 20upx;
	margin-top: 6upx;
}
.movie_score {
	font-size: 12px;
	color: gray;
	margin-left: 20upx;
}
</style>
