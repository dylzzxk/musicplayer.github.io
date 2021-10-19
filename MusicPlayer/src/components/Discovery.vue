<template>
	<div class="Discovery">
		<div class="banner">
		 <!-- 轮播图 -->
		 <el-carousel :interval="4000" type="card"  width="100%">
		 	<el-carousel-item v-for="(item,index) in banners" :key="index">
		 		<!-- <h3 class="medium">{{item}}</h3> -->
				<!--                 绑定 -->
				<!-- <img class="banner" :src="item.imageUrl" alt=""/> -->
				 <el-image style="width: 100%;"
				 :src="item.imageUrl"
				 fit="fill"></el-image>
		 	</el-carousel-item>
		 </el-carousel>
		 </div>
		  <!-- <el-button @click='clickMe' type="success" >警告按钮</el-button> -->
	
	
		<div class="Recommend">
		<!-- 推荐歌单 -->
			<!-- <el-divider content-position="left"></el-divider> -->
			<h3>推荐歌单</h3>
			<el-row id="recrow" :gutter="40">
				<el-col id="reccol" :span="4" v-for="(item, index) in list" :key="index">
				<div class="items">
					<div class="img-wrap">
						<!-- <div class="desc-wrap">
							<span class="desc">{{item.name}}</span>
						</div> -->
						<el-image
							style="width: 100%;"
							:src="item.picUrl"
							fit="fill"></el-image>
						<!-- <span class="iconfont icon-play"></span> -->
						<div class="count">
						<i class="el-icon-headset"></i>
						{{
						item.playCount >= 10000
							? (item.playCount / 10000).toFixed(0) + "万"
							: item.playCount
						}}
					
						<i class="el-icon-video-play"></i>
						</div>
					</div>
					<p class="name">{{item.name}}</p>
				</div>
				</el-col>
			</el-row>
		</div>
		<div class="NewS">
			<h3>新碟上架</h3>
			<el-row id="newsrow" :gutter="600">
				<el-col id="newscol" :span="10" v-for="(item, index) in songs" :key="index">
				<div class="newsitems">
					<div class="img">
						<el-image
							style="width: 100%;"
							:src="item.picUrl"
							fit="fill"></el-image>
							<div class="songPlay" @click="playMusic(item.id)" >
								<i class="el-icon-video-play" id="newsicon"></i>
							</div>
						
					</div>
					
					<div class="song-wrap">
						<div class="songName">{{item.name}}</div>
						<div class="singer">{{item.song.artists[0].name}}</div>
					</div>
				</div>
				</el-col>
			</el-row>
		</div>
		<div class="rankingList">
			<h3>榜单</h3>
			<div class="rankItems">
				<el-row id="rankRow" :gutter="60">
					<el-col id="rankCol" :span="8" v-for="(item,index) in rankingList" :key="index">
						<div class="list" style="width: 100%;">
							<!-- 榜单封面 -->
							<div class="listDesc">
								
									<el-image
									:src="item.coverImgUrl"
									fit="fill"
									style="width: 30%;"></el-image>
								<div class="toJump">
										
								<!-- <el-icon-video-play></el-icon-video-play> -->
									<i class="el-icon-video-play" style="font-size: 50px;color: #FFFAFA;"></i>
									
								</div>
							
									{{item.name}}
							</div>
							<!-- 榜单 -->
							<div class="rankDetails" v-for="(song,index) in item.tracks" :key="index">
								<span>{{index+1}}</span>
								<span>{{song.first}}</span>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		data(){
			return {
				banners:[],
				//推荐歌单
				list:[],
				// 新碟上架
				songs:[],
				rankingList:[],
				// rankingList1:[],
				// rankingList2:[],
				// rankingList3:[],
				artistToplistInfo:[]
			}
		},
		created() {
			// console.log('created')
			//轮播图
			axios({
				url:'https://autumnfish.cn/banner',
				method:'GET'
				
			}).then(res=>{
				// 获取轮播图数据
				// console.log(res)
				this.banners=res.data.banners
			}),
			//推荐歌单
			axios({
				url:'https://autumnfish.cn/personalized',
				method:'GET',
				params:{
					//获取的数据量，默认为30
					limit:12
				}
			}).then(res=>{
				this.list=res.data.result
			}),
			axios({
				url:'https://autumnfish.cn/personalized/newsong',
				method:'GET'
			}).then(res=>{
				this.songs=res.data.result
				// console.log(res)
			}),
			// axios({
			// 	url:'https://autumnfish.cn/personalized/mv',
			// 	method:'GET'
			// }).then(res=>{
				
			// 	console.log(res)
			// })
			// 榜单
			axios({
				url:'https://autumnfish.cn/toplist/detail',
				method:'GET',
				
			
			}).then(res=>{
				this.artistToplistInfo=res.data.artistToplist;
				this.rankingList=res.data.list.slice(0,3)
				// this.rankingList1=res.data.list[0];
				// this.rankingList2=res.data.list[1];
				// this.rankingList3=res.data.list[2];
				console.log(res)
			})
			
		},
		methods:{
			playMusic(id){
				// console.log(id)
				axios({
					url:'https://autumnfish.cn/song/url',
					method:'GET',
					params:{
						id
					}
				}).then(res=>{
					let url=res.data.data[0].url
					//设置给父组件的播放url
					this.$parent.musicUrl=url
				})
			}
		}
		
	}
</script>

<style>
	.Discovery{
		width: 100%;
		height: 100%;
		color: black;
	}
	.Recommend,.NewS,.rankingList{
		width: 80%;
		height: 100%;
		/* 设置水平居中 */
		margin: 0 auto;
	}
	#recrow,#newsrow,#rankRow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	#reccol,#newscol,#rankCol{
		align-items: stretch;
		padding-bottom: 1.25rem;
		margin-bottom: 20px;
	
	}
	
	.count{
		color: #000000;
		font-weight: bold;
		position: absolute;
		top: 84%;
		right: 0;
		width: 100%; 
		height: 13%;
		background-color:snow;
		opacity: 0.25;
		text-align: left;
		border-top: 1px solid #000000;
		
	}
	.name{
		font-size: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		  /* 这里的display必须用-webkit-box */
		display: -webkit-box;
		 /* -webkit-line-clamp限制在一个块元素显示的文本的行数 */
		-webkit-line-clamp: 2;
		/* -webkit-box-orient排列方向 */
		-webkit-box-orient: vertical;
		
		}
		.img-wrap{
		position: relative;
		}
		.el-icon-video-play{
			position: absolute;
			right: 0;
			font-size: 25px;
		}
		h3{
			padding-bottom: 10px;
			text-align: start;
			border-bottom: 2px solid firebrick;
		}
		.img,.listDesc{
			cursor: pointer;
			position: relative;
		}
	
		.songPlay{
			opacity: 0;
			position: absolute;
			left: 97.5px;
			top: 58.5px;
			
		}
		.toJump{
			opacity: 0;
			position: absolute;
			top: 30%;
			left: 48%;
		}
		.songPlay:hover,.toJump:hover{
			opacity: 1;
		}
		#newsicon{
			font-size: 40px;
			color: #FFFFFF;
		}
		#rankRow{
			border: 2px solid black;
		}
		.rankCol{
			background-color: aliceblue;
		}
			
		.rankDetails{
			text-align: left;
		}
	
		
</style>
