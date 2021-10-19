<template>
		
	<div class="Result">
		
		 
		 <div class="title" >
			 <h2>
				 {{this.$route.query.q}}
			 </h2>
			 <!-- 显示搜索的结果 -->
			 <span style="color: gray;">找到了{{count}}{{activeName}}</span>
		 </div>
		 
		 <div class="allResult" >
		 <el-tabs v-model="activeName" >
			 
		   <el-tab-pane label="单曲" name="首单曲">
			   <div class="songsResult">
			   <table >
			   	<thead>
			   		<th></th>
			   		
			   		<th>音乐标题</th>
			   		<th>歌手</th>
			   		<th>专辑</th>
			   		<th>时长</th>
			   	</thead>
			   	<tbody>
			   		<tr v-for="(item,index) in songList" :key="index">
			   			<td width="100px" style="text-align: center;">{{index+1}}</td>
			   					
			   			<td class="tdStyles">
			   				 <div class="titles">
								<i class="el-icon-video-play" style="font-size: 20px;cursor: pointer;" @click="getUrls(item.id,item.name)"></i>
								<span>{{item.name}}</span>
			   					<i class="iconfont icon-MV" v-show="item.mvid" style="color:rgb(209,48,48) ;cursor: pointer;"></i>
								<!-- <span class="iconfont icon-mv"></span> -->
								<!-- 二级标题 -->
								</br>
								<span style="color: gray;line-height: 10px; font-size: 10px;">{{item.alias[0]}}</span>
			   				
							</div>
			   			</td>
			   			
			   			<td class="tdStyles" style="cursor: pointer;">{{item.artists[0].name}}</td>
			   			
			   			<td  width="400px">
			   				<span>{{item.album.name}}</span>
			   			</td>
			   			
			   			<!-- 使用全局过滤器过滤时间 -->
			   			<td>{{item.duration |timeTo}}</td>
			   		
			   		</tr> 
			   	</tbody>
			   </table>
			   <el-pagination
			   @current-change="songshandleCurrentChange"
			   background
			   layout="prev,pager,next"
			   :total="count"
			   :current-page="page"
			   :page-size="30"></el-pagination>
			</div>
		   </el-tab-pane>
		  
		   <el-tab-pane label="歌手" name="个歌手">
			   <div class="singerResult" >
		
			 <el-row class="singerRow" :gutter="10">
			   	<el-col :span="4" class="singerCol" v-for="(item,index) in singerList" :key="index">
			  		<!-- 封面 -->
			   		<div class="singerDesc" @click="getSingerId(item.id)">
			   			<img
			   			style="width: 135px;
			   			height: 135px; 
			   			"
			   			v-lazy="item.picUrl"></img>
			   		</div>
			   		
			   		<!-- 歌手名 -->
		   	   		<div class="singerName" @click="getSingerId(item.id)">
			   			<span class="namespan">{{item.name}}</span>
			   			<i class="el-icon-user" 
			   			 v-show="item.accountId"
			   			style="border-radius:50%; 
			   			background-color:rgb(235,40,45);
			   			border:1px solid  rgb(210,84,85);
			   			color: white;
			   			"></i>
			   		</div>
			  	</el-col>
			   </el-row>
			   <el-pagination
			   @current-change="singerhandleCurrentChange"
			   background
			   layout="prev,pager,next"
			   :total="count"
			   :current-page="page"
			   :page-size="30"></el-pagination>
			</div>
		   </el-tab-pane>
		  
		   <el-tab-pane label="MV" name="个MV">
			 <div class="mvResult">
				 <el-row :gutter="20" class="mvRow">
					 <el-col class="mvCol" :span="6" v-for="(item,index) in mvList" :key="index">
						 <div class="mvCover">
							 <img
							  :src="item.cover"
							  style="width: 210px;
							  height: 140px;"/>
							  
							  <div class="playCount">
								  <i class="iconfont icon-video"></i>
								  <span style="font-size: 15px;">{{
										item.playCount >= 10000
										? (item.playCount / 10000).toFixed(0) + "万"
										: item.playCount
											}}
											</span>
							  </div>
							  
							  <div class="mvTime">
								  <span>{{item.duration |timeTo}}</span>
							  </div>
						 </div>
						 
						 <div class="mvTitle">
							 <span class="mvName">{{item.name}}</span>
							 </br>
							 <span style="font-size: 10px; color: gray;">{{item.artistName}}</span>
						 </div>
					 </el-col>
				 </el-row>
				 <el-pagination
				 @current-change="mvhandleCurrentChange"
				 background
				 layout="prev,pager,next"
				 :total="count"
				 :current-page="page"
				 :page-size="8"></el-pagination>
			 </div>
		   </el-tab-pane>
		   
		   <el-tab-pane label="歌单" name="个歌单">
			   <div class="playlistResult">
			   			   <table >
			   	
			   			   	<tbody>
			   			   		<tr v-for="(item,index) in playList" :key="index">
									
			   			   			<td width="100px" style="text-align: center;">
										<i class="el-icon-video-play" style="font-size: 20px;cursor: pointer;" @click="getPLId(item.id)">
											<!-- <span >{{item.id}}</span> -->
										</i>
										</td>
			   			   					
			   						<td> 
			   							<div class="playlistCover">
			   								<img v-lazy="item.coverImgUrl" 
												style="width: 100px;
												height: 100px;"/>
			   							</div></td>
										
									<td>
									<span>{{item.name}}</span></td>
			 
			   						<td width="150px">
									<span class="playlistItem">{{item.trackCount}}首</span></td>
			   									
			   						<td width="150px">
										<span class="playlistItem">by:{{item.creator.nickname}}
										</span></td>
			   			   			
			   			   			
			   						<td width="150px">
										<span class="playlistItem">收藏:{{item.bookCount}}</span></td>
			   			   			
			   			   			<td width="150px">
										<span class="playlistItem">收听:{{
										item.playCount >= 10000
										? (item.playCount / 10000).toFixed(0) + "万"
										: item.playCount
											}}</span>
									</td>
			   			   		
			   			   		</tr> 
			   			   	</tbody>
			   			   </table>
						  <el-pagination
						   @current-change="playlisthandleCurrentChange"
						   background
						   layout="prev,pager,next"
						   :total="count"
						   :current-page="page"
						   :page-size="30"></el-pagination>
			   			</div>
			   
		   </el-tab-pane>
		 </el-tabs>
		 
		</div>
	 	
		 
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	import axios from 'axios'
	export default{
		
		data() {
		     return {
			
				// activeLabel:'单曲',
		       activeName: '首单曲',
			   // resultList:[],
			   //保存得到的数据
			   songList:[],
			   singerList:[],
			   count:0,
				playList:[],
				mvList:[],
				// songspage:1,
				// mvpage:1,
				// singerpage:1,
				// playlistpage:1
				page:1
		
		     };
		   },
		//created 生命周期钩子
		//回调函数，添加之后自动执行
		//内部可以通过this 访问vue实例
		watch:{
			// type:歌曲：1，歌单：1000，mv:1004,歌手：100
			activeName(){
				// console.log(this.activeName)
				// console.log(newVal)
				let limit=30;
				let type=1;
				this.page=1;
				switch(this.activeName){
					case '首歌曲':
					type=1;
					limit=30;
					break;
					case '个歌手':
					limit=30;
					type=100;
					break;
					
					case '个MV':
					limit=8;
					type=1004;
					break;
					case '个歌单':
					limit=30;
					type=1000;
					break;
					
					default:
					break;
				};
				axios({
					url:'https://autumnfish.cn/search',
					method:'GET',
					params:{
						keywords:this.$route.query.q,
						// limit:10000,
						offset:0,
						limit,
						type
					}
				}).then(res=>{
					// console.log(res.data.result)
					// this.resultList=res.data
					if(type==1){ 
						// 单曲
						this.songList=res.data.result.songs;
						this.count=res.data.result.songCount;
					}else if(type==100){
						// 歌手
						this.singerList=res.data.result.artists;
						this.count=res.data.result.artistCount;
						
						console.log(res.data.result)
					}else if(type==1000){
						//歌单逻辑
						// console.log(res.data.result.playlists)
						this.playList=res.data.result.playlists
						this.count=res.data.result.playlistCount
					}else if(type==1004){
						//mv
						console.log(res.data.result)
						// this.mvList=res.data.result
						this.mvList=res.data.result.mvs
						this.count=res.data.result.mvCount
					}
					
					
				})
				
				
			}
			
		},
		created() {
			// axios({
			// 	url:'https://autumnfish.cn/search',
			// 	method:'GET',
			// 	params:{
			// 		keywords:this.$route.query.q,
			// 		// limit:10000,
			// 		// offset:30,
			// 		type:1
			// 	}
			// }).then(res=>{
			// 	// console.log(res)
			// 	// this.resultList=res.data
				
			// 	this.songList=res.data.result.songs
			// 	this.count=res.data.result.songCount
			// })
			// console.log(this.$route.query.q)
			this.getResult()
		},
		
		
		methods:{
			handleClick(tab, event) {
			        console.log(tab, event);
			      },
			
		
			// getUrl(id){
			// 				// console.log(id)
			// 				axios({
			// 					url:'https://autumnfish.cn/song/url',
			// 					method:'GET',
			// 					params:{
			// 						id
			// 					}
			// 				}).then(res=>{
			// 					let url=res.data.data[0].url
			// 					//设置给全局musicUrl的播放url
			// 					// console.log(this.$parent.$parent)
			// 					// this.$parent.musicUrl=url
			// 					this.$root.musicUrl=url
			// 					// console.log(this.$root.musicUrl)
								
			// 				})
							
			// 			},
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
			// 初始化数据
			getResult(){
				axios({
					url:'https://autumnfish.cn/search',
					method:'GET',
					params:{
						keywords:this.$route.query.q,
						// limit:10000,
						offset:0,
						type:1
					}
				}).then(res=>{
					// console.log(res)
					// this.resultList=res.data
					
					this.songList=res.data.result.songs
					this.count=res.data.result.songCount
				})
				// console.log(this.$route.query.q)
			},
			
			//获取歌单ID
			getPLId(id){
				this.$emit('getPLId',id);
			},
		
			songshandleCurrentChange(val){
				this.page=val;
		
					
				
				// 	case '个歌单':
				// 	limit=30;
				// 	type=1000;
				// 	break;
					
			
				axios({
					url:'https://autumnfish.cn/search',
					method:'GET',
					params:{
						keywords:this.$route.query.q,
						limit:30,
						offset:(this.page-1)*30,
						// limit,
						type:1
					}
				}).then(res=>{
			
						// 单曲
						this.songList=res.data.result.songs;
						this.count=res.data.result.songCount;
				})
			},
			singerhandleCurrentChange(val){
				this.page=val;
				axios({
					url:'https://autumnfish.cn/search',
					method:'GET',
					params:{
						keywords:this.$route.query.q,
						offset:(this.page-1)*30,
						limit:30,
						type:100
					}
				}).then(res=>{
						// 歌手
						this.singerList=res.data.result.artists;
						this.count=res.data.result.artistCount;
					
						})
				
			},
			mvhandleCurrentChange(val){
				this.page=val;
				axios({
					url:'https://autumnfish.cn/search',
					method:'GET',
					params:{
						keywords:this.$route.query.q,
						offset:(this.page-1)*8,
						limit:8,
						type:1004
					}
				}).then(res=>{
						this.mvList=res.data.result.mvs
						this.count=res.data.result.mvCount
						})
			},
			playlisthandleCurrentChange(val){
				this.page=val;
				axios({
					url:'https://autumnfish.cn/search',
					method:'GET',
					params:{
						keywords:this.$route.query.q,
						offset:(this.page-1)*30,
						limit:30,
						type:1000
					}
				}).then(res=>{
					this.playList=res.data.result.playlists
					this.count=res.data.result.playlistCount
						})
			
			},
			getSingerId(id){
				this.$emit("getSingerId",id)
			}
		
		}
	}
</script>

<style>
	@import url("../../assets/icons/iconfont/iconfont.css");
	.allResult{
		padding-bottom: 50px;
	}
	.title,table{
		text-align: left;
	}
	
	tr{
	height:50px;}
	.tdStyles{
		width: 230px;
	}
	.singerRow,.mvRow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	.singerCol,.mvCol{
		align-items: stretch;
		padding-bottom: 1.25rem;
		margin-bottom: 20px;
	
	}
	.singerDesc,.singerName{
		cursor: pointer;
	}
	.namespan:active{
		border-bottom: 1px solid #000000;
	}
	.singerResult{
		width: 1220px;
		height: 100%;
		
	}
	.playlistItem{
		font-size: 13px;
		color: gray;
	
	}
	.mvCover{
		position: relative;
	}
	.playCount{
		position: absolute;
		top: 0;
		right: 40px;
		color: white;
		
	}
	.mvTime{
		position: absolute;
		left: 45px;
		top:120px;
		color: white;
	}

	.mvName{
		cursor: pointer;
	}
	.mvName:active{
		border-bottom:1px solid #000000 ;
	}
</style>
