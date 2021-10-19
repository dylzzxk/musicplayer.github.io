<template>
	<div class="Index">
	<!-- 顶部导航栏 -->
	<div class="nav">
		<!-- <ul id="nav1">
			<li><router-link to="/discovery">发现音乐</router-link></li>
			<li><router-link to="/playlists">歌单</router-link></li>
			<li><router-link to="/songs">最新音乐</router-link></li>
			<li><router-link to="/movie">MV</router-link></li>
		</ul> -->
		
		
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" 
		background-color="firebrick" 
		text-color="white" 
		active-text-color="darkred">
		  <el-menu-item index="1"><router-link to="/discovery">发现音乐</router-link></el-menu-item>
		  <el-menu-item index="2"><router-link to="/playlists">歌单</router-link></el-menu-item>
		  <el-menu-item index="3" ><router-link to="/songs">最新音乐</router-link></el-menu-item>
		  <el-menu-item index="4"><router-link to="/movie">MV</router-link></el-menu-item>
		</el-menu>
	</div>	
	
	<!-- 容器 -->
	<div class="main">
		<!-- <discovery></discovery> -->
		<!--路由的出口 地址命中之后，把组件显示的位置-->
		<router-view></router-view>
	</div>
	
	<!-- 播放标签 -->
	<div class="player">
		<audio :src="musicUrl" controls id="musicPlayer"></audio>
	</div>
	</div>
	
</template>

<script>
// import Discovery from './Discovery.vue'

export default{
	data(){
		return{
			activeIndex:'1',
			musicUrl:""
		}
	}
}
</script>

<style>
	/* .nav{
		left: 0;
		width: 100%;
		height: 100%;
		background-color: firebrick;
		
	} */
	.nav{
		text-align: center;
	}
	.main{
		
		height: 100%;
		width: 100%;
		background-color: white;
	}
	/* 让两个DIV在同一行 */
/* 	.nav,.main{
		
		float: left;
		box-sizing: border-box;
		
	} */
	/* 设置ul横向显示，并消除小圆点 */
/* 	#nav1{
		margin-top: 0;
		height: 40px;
		
	}
	#nav1 ul{
		list-style: none;
		margin-left: 50px;
		}
	#nav1 li{
		display: inline;
	} */
	.player{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		background-color: black;
		
	}
		
	#musicPlayer{
		width: 100%;
	
	}


</style>
