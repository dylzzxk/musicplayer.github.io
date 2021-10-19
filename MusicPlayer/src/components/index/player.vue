<template>
	<div class="player">
		<audio :src="this.$root.musicUrl" controls id="musicPlayer" autoplay style="width: 90%;float: left;">
			
		</audio>
		<i class="el-icon-s-operation"
		@click="showPlaylist"
		style="font-size: 30px;float: left;margin-left: 30px;color: white;margin-top: 10px;cursor: pointer;"
		></i>
		<div class="playerlist" v-show="playliststatu">
			<h4>播放列表</h4>
			<div  v-for="item in playList" style="text-align: left;padding-left: 20px;">
			<span style="width: 300px;line-height: 35px;">{{item}}</span>
			</div>
		</div>
	
	<!-- 	打开播放列表
		<el-tooltip
		  class="item"
		  effect="light"
		  content="打开播放列表"
		  placement="top"
		  :open-delay="500"
		>
		  <i
		    class="iconfont icon-bofangliebiao"
		    @click="isShowSongList"
		    style="
		      position: absolute;
		      right: 45px;
		      top: 30px;
		      font-size: 24px;
		      cursor: pointer;
		    "
		  ></i>
		</el-tooltip> -->
	</div>
</template>

<script>
	
	export default{
		 data(){
		 	return{
					playliststatu:false
			}
			},
			props:['playList'],
			methods:{
				// isShowSongList() {
				//   this.$emit("isShowSongList");
				// },
				showPlaylist(){
					if(this.playliststatu){
						this.playliststatu=false
					}else{
						this.playliststatu=true
					}
				}
			}
			 }
</script>

<style>
	.player{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		background-color: black;
		/* opacity: 0; */
	}
	

	#musicPlayer{
		width: 100%;
	
	}
	.playerlist{
		z-index: 500;
		position: absolute;
		width: 300px;
		height: 400px;
		bottom: 50px;
		right: 0;
		/* background-color: indianred; */
		background-color: white;
	}
</style>
