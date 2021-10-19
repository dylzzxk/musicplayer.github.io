<template>
	<div class="singerdetails">
		
		<singerdetail :artistmsg="artistmeg"></singerdetail>
	
		<div class="singercontent">
			<el-tabs  v-model="activeName" class="tabs">
				<el-tab-pane label="热门作品" name="热门作品">
					<hotsongs :hotsongs="hotsongs"></hotsongs>
				</el-tab-pane>
				<el-tab-pane label="所有专辑" name="所有专辑">
					<album :artistAlbum="artistAlbum" @getAlbumPage="getArtistAlbum"></album>
				</el-tab-pane>
				<el-tab-pane label="相关MV" name="相关MV">
					<mv :artistMV="artistMV" :mvcount="artistmeg.mvSize" @getMVPage="getArtistMV"></mv>
				</el-tab-pane>
				<el-tab-pane label="艺人介绍" name="艺人介绍">
					<artistdescri :artistDescri="artistDescri"></artistdescri>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import singerdetail from '../../components/singers/singerDetail.vue'
	import hotsongs from '../../components/singers/hotsongs.vue'
	import album from '../../components/singers/album.vue'
	import mv from '../../components/singers/mv.vue'
	import artistdescri from '../../components/singers/artistDescri.vue'
	
	export default{
		data(){
			return {
				artistmeg:{},
				hotsongs:[],
				activeName:"热门作品",
				artistAlbum:{},
				artistMV:[],
				mvcount:0,
				artistDescri:{}
			}
		},
		components:{
			singerdetail,
			hotsongs,
			album,
			mv,
			artistdescri
			
			
		},
		created() {
			//获取歌手信息和热门歌曲信息
			axios({
				url:'https://autumnfish.cn/artists/detail',
				method:'GET',
				params:{
					id:this.$route.query.q
				}
			}).then(res=>{
				// console.log(res.data)
				this.artistmeg=res.data.artist;
				this.hotsongs=res.data.hotSongs;
				// console.log(res.data.hotSongs)
			})
			
			this.getArtistAlbum(1)
			this.getArtistMV(1)
			this.getAristDescri()
		},
		methods:{
			//获取专辑信息
			// 获取歌手专辑
			getArtistAlbum(page) {
			 axios({
				 url:'https://autumnfish.cn/artist/album',
				 method:'GET',
				params: {
			        id:this.$route.query.q,
			        limit: 16,
			        offset: (page-1) * 16,
			      },
			    })
			    .then((res) => {
			      // console.log(res.data);
			      this.artistAlbum = res.data;
			
			    });
				},
			getArtistMV(page){
			
				axios({
					
					url:'https://autumnfish.cn/artist/mv',
					method:'GET',
					params: {
					   id:this.$route.query.q,
					   limit: 8,
					   offset: (page-1) * 8,
					 },
				   })
				.then((res) => {
			     console.log(res.data);
			     this.artistMV = res.data.mvs;
						
			   });
		},
			getAristDescri(){
				
				axios({
						url:'https://autumnfish.cn/artist/desc',
						method:'GET',
						params: {
							id:this.$route.query.q,
								   
							 },
						})
				.then((res) => {
					console.log(res.data);
					this.artistDescri= res.data;
									
			});
		}
		
		}
		
	}
</script>

<style>
	.singerdetails{
		width: 1220px;
		height: 100%;
		margin: 0 auto;
	}
	
	
</style>
