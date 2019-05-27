<template name="helloComp">		<!-- 定义组件的名称为helloComp -->
	<view>
		{{msg}}
		<view class="">
			<input type="text" :value="myval" class="txt"/>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			myval: {
				type: String
			}
		},
		name: "helloComp",
		data() {
			return {
				msg: "helloComp这是你的自定义组件"
			};
		}
	}
</script>

<style>
	.txt{
		color: red;
	}
	
</style>
