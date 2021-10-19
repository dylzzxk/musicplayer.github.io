<template>
	<div class="hotsongs">
		
		<table >
			<thead>
				<th></th>
				
				<th>音乐标题</th>
				<th>歌手</th>
				<th>专辑</th>
				<th>时长</th>
			</thead>
			<tbody>
				<tr v-for="(item,index) in hotsongs" :key="index">
					<td width="150px" style="text-align: center;">
						<i class="el-icon-video-play" style="font-size: 20px;cursor: pointer;" @click="getUrls(item.id,item.name)"></i></td>
							
					<td class="tdStyles" >
						 <div class="titles" style="width: 300px;">
									
										<span>{{item.name}}</span>
							<i class="iconfont icon-MV" v-show="item.mv" style="color:rgb(209,48,48) ;cursor: pointer;"></i>
										<!-- <span class="iconfont icon-mv"></span> -->
				
						</div>
					</td>
					
					<td class="tdStyles" style="cursor: pointer;">
						<span  v-if="item.ar.length==1" > {{item.ar[0].name}}</span>
						<span  v-else-if="item.ar.length==2" > {{item.ar[0].name}}/{{item.ar[1].name}}</span>
					</td>
					
					<td  width="300px">
						<span>{{item.al.name}}</span>
					</td>
					
					<!-- 使用全局过滤器过滤时间 -->
					<td>{{item.dt |timeTo}}</td>
				
				</tr> 
				
				<tr v-for="(item,index) in hotsongs.ar" :key="index">
					<td>{{item.name}}</td>
				</tr>
			</tbody>
		</table>
		
	
	</div>
</template>

	
<script>
	import {mapActions} from 'vuex'
	import axios from 'axios'
	export default{
		props:['hotsongs'],
		
		methods:{
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
		}
	}
</script>

<style>
	span{
		line-height: 30px;
	}
</style>
