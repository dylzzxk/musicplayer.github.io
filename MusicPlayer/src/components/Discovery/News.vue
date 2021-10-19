<template>
	<div class="NewS">
		<h3>新碟上架</h3>
		<el-row id="newsrow" :gutter="400">
			<el-col id="newscol" :span="10" v-for="(item, index) in songs" :key="index">
			<div class="newsitems">
				<div class="img">
					<el-image
						style="width: 150px;
						height: 150px;"
						:src="item.picUrl"
						fit="fill"></el-image> 
						<div class="songPlay" @click="getUrls(item.id,item.name)" >
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
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default{
		data(){
			return {
				
				songs:[]
			
			}
		},
		created() {
			// console.log('created')		
			axios({
				url:'/personalized/newsong',
				method:'GET'
			}).then(res=>{
				this.songs=res.data.result
				// console.log(res)
			})
		},
		methods:{
			
			
			
			getUrls(id,name){
				// console.log(id)
				axios({
					url:'/song/url',
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
				
			}
		
		}
		
	}
</script>

<style>
@import url("../../assets/css/all.css");
	.NewS{
		width: 1220px;
		height: 100%;
		/* 设置水平居中 */
		margin: 0 auto;
	}
	#newsrow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	#newscol{
		align-items: stretch;
		padding-bottom: 1.25rem;
		margin-bottom: 20px;
	
	}

	.img{
		cursor: pointer;
		position: relative;
		float: left;
	}
		
	.songPlay{
		opacity: 0;
		position: absolute;
		left: 97.5px;
		top: 58.5px;
		
	}
	.songPlay:hover{
		opacity: 1;
	}
	#newsicon{
		font-size: 40px;
		color: #FFFFFF;
	}
	.song-wrap{
		width: 120px;
		height: 150px;
		float: left;
		
	}
	
	
</style>
