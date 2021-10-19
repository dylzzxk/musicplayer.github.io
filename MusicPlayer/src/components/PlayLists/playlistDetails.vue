<template>
	<div class="playlistDetails">
		
		<div class="content" >
			<div class="topWrap" >
				<div class="imgCover">
					<img  :src="playlist.coverImgUrl"
					style="width: 200px;
					height: 200px;"/>
				</div>
				<div class="pldTitle">
					<h4>{{playlist.name}}</h4>
					
					<div class="creator">
						<span class="item"><img :src="playlist.creator.avatarUrl"
						style="width: 35px;
						height: 35px;
						border-radius: 50%;"/></span>
						<span class="item">{{playlist.creator.nickname}}</span>
						<span  class="item">{{playlist.createTime|timefmt('YYYY-MM-DD HH:mm:ss')}}</span>
					</div>
					
					<div class="playButton">
						<button class="playMusic">
							<i class="el-icon-video-play" style="font-size: 20px;"></i>
							播放</button>
					</div>
					
					<div class="pldTags">
						<span style="float: left;">标签：</span>
						<span class="tagDetail" v-for="(item,index) in playlist.tags" :key="index" style="float: left;margin-left: 10px;">
						{{item}}</span>
					</div>
					</br>
					</br>
					<div class="descrip" style="width: 900px;">
						<span style="font-size: 15px;">介绍:</span>
						<span style="font-size: 14px;">{{playlist.description}}</span>
					</div>
				</div>
				
			
				
			</div>
			
			<div class="songLists">
					
							<table >
								<thead>
									<th></th>
									<th>音乐标题</th>
									<th>歌手</th>
									<th>专辑</th>
									<th>时长</th>
								</thead>
								<tbody>
									<tr v-for="(item,index) in playlist.tracks" :key="index">
										
										<td width="100px"><i class="el-icon-video-play" style="font-size: 20px;cursor: pointer;" @click="getUrls(item.id,item.name)"></i>
											</td>
										<td class="tdStyles" >
												
											 <div class="titles" style="width: 300px;">
														
															<span>{{item.name}}</span>
												<i class="iconfont icon-MV" v-show="item.mv" style="color:rgb(209,48,48) ;cursor: pointer;"></i>
															<!-- <span class="iconfont icon-mv"></span> -->
									
											</div>
										</td>
										
										<td class="tdStyles" style="cursor: pointer;">{{item.ar[0].name}}</td>
										
										<td  width="300px">
											<span>{{item.al.name}}</span>
										</td>
										
										<!-- 使用全局过滤器过滤时间 -->
										<td>{{item.dt |timeTo}}</td>
									
									</tr> 
								</tbody>
							</table>
					
	
			</div>
		</div>
	</div>
	
	
</template>

<script>
	import {mapActions} from 'vuex'
	import axios from 'axios'
	export default{
		
		props:['playlist'],
		// props:['ids'],
		data(){
			return{
				activeName:"歌曲列表",
				
			
			}
			},
		
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
			
		}
		
	}
</script>

<style>
	.playlistDetails{
		width: 1220px;
	}
	
	.imgCover,.pldTitle{
		float: left;
		margin-right:30px;
		text-align: left;
		
	}
	.item{
		/* margin-left: 10px; */
		font-size: 13px;
		color: gray;
		margin-right:10px;
		
	}
	.playMusic{
		cursor: pointer;
		margin-top: 10px;
		width: 70px;
		height: 30px;
		color: white;
		
		border: 1px solid gray;
		background-color: rgb(194,12,12);
	}
	.pldTags{
		
		margin-top: 10px;
		font-size: 15px;
	}
	.tagDetail{
		text-align: center;
		width: auto;
		border: 2px solid gray;
		border-radius: 30%;
		font-size: 14px
	}

	
	
	tr{
	height:50px;}
	.tdStyles{
		width: 300px;
	}
	table{
		padding-top:50px ;
	}
</style>
