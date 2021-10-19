<template>
	<div class="songList" >
		<!-- <table class=""></table> -->
		<table >
			<tr>
				<th></th>
				<th></th>
				
				<th>音乐标题</th>
				<th>歌手</th>
				<th>专辑</th>
				<th>时长</th>
				<th></th>
			</tr>
			
				<tr v-for="(item,index) in list" :key="index">
					<td>{{index+1}}
					
					</td>
					
					<td> 
					
						<div class="ablumWrap">
							<!-- <el-image
							style="width:100px;
							height: 100px;"
							v-lazy="item.album.picUrl"
							fit="fill"></el-image> -->
							<img
							style="width:100px;
							height: 100px;"
							v-lazy="item.album.picUrl"
							></img>
						</div>
					</td>
					
					<td>
						
					
						<div class="titles">
							<span>{{item.name}}</span>
							
						</div>
					</td>
					
					<td>{{item.album.artists[0].name}}</td>
					
					<td>
						<span>{{item.album.name}}</span>
					</td>
					
					<!-- 使用全局过滤器过滤时间 -->
					<td>{{item.duration |timeTo}}</td>
					<td width="100px">
						<i class="el-icon-video-play" style="font-size: 25px;cursor: pointer;" @click="getUrls(item.id,item.name)"></i>
						
					</td>
				</tr> 
			
		</table>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	import axios from 'axios'
	export default{
		name:'songList',
		props:{
			list:Array
		},
		
			// axios({
			// 	url:'https://autumnfish.cn/album/newest',
			// 	method:'GET'
			// }).then(res=>{
			// 	// this.songs=res.data.result
			// 	console.log(res)
			// })
		
		methods:{
			getUrls(id,name){
				// console.log(id)
				axios({
					url:'https://autumnfish.cn/song/url',
					method:'GET',
					params:{
						id
					}
				}).then(res=>{
					let url=res.data.data[0].url
					this.$store.dispatch("unshiftPlayList",name)
					// this.$store.dispatch("pushPlayList",name)
					console.log(res.data)
					//设置给全局musicUrl的播放url
					// console.log(this.$parent.$parent)
					// this.$parent.musicUrl=url
					this.$root.musicUrl=url
					// console.log(this.$root.musicUrl)
				})
				
			},
			// playSong(id){
			// 	axios({
			// 		url:'https://autumnfish.cn/song/url',
			// 		method:'GET',
			// 		params:{
			// 			id
			// 		}
			// 	}).then(res=>{
			// 		let url=res.data.data[0].url
			// 		//设置给全局musicUrl的播放url
			// 		// console.log(this.$parent.$parent)
			// 		// this.$parent.musicUrl=url
			// 		this.$root.musicUrl=url
			// 		// console.log(this.$root.musicUrl)
			// 	})
			// }
		}
		
	}
</script>

<style>
	.songList{
		width: 1220px;
		height: 100%;
		color: black;
		margin: 0 auto;
		
	}
	
</style>
