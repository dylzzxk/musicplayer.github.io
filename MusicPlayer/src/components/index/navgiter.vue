<template>
	<!-- 顶部导航栏 -->
	<div class="navgiter">
					
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" 
		background-color="firebrick" 
		text-color="white" 
		active-text-color="darkred">
		  <el-menu-item index="1"><router-link to="/discovery">发现音乐</router-link></el-menu-item>
		  <el-menu-item index="2"><router-link to="/playlists">歌单</router-link></el-menu-item>
		  <el-menu-item index="3" ><router-link to="/songs">最新音乐</router-link></el-menu-item>
		 
		   <el-menu-item index="4"><router-link to="/singers">歌手</router-link></el-menu-item>
		</el-menu>
		
	</div>	
</template>

<script>
	export default{
		data(){
			return{
				activeIndex:'1'
				
			}
		}
	}
</script>

<style>
	.navgiter{
		width: 1517px;
		height: 70px;
		text-align: center;
	}
</style>
