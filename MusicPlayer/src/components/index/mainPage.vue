<template>
	<!-- 容器 -->
	<div class="mainPage">
		<!-- <discovery></discovery> -->
		<!--路由的出口 地址命中之后，把组件显示的位置-->
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.mainPage{
		height: 100%;
		width: 100%;
		background-color: white;
	}
</style>
