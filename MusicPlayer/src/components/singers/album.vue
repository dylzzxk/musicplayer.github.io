<template>
	<div class="album">
		
		<el-row :gutter="30" class="albumRow">
			<el-col class="albumCol" :span="6"  v-for="(item, index) in artistAlbum.hotAlbums"
	      :key="index">
				<div class="imgcover">
					<img v-lazy="item.picUrl"
					 style="width: 180px;
					 height: 180px;"/>
				</div>
				<div class="albumname">
					<span>{{item.name}}</span>
				</div>
			</el-col>
		</el-row>
	  <!-- 分页 -->
	  <el-pagination
	 
	  @current-change="getAlbumPage"
	  background
	  layout="prev,pager,next"
	  :total="artistAlbum.artist.albumSize"
	  :current-page="page"
	  :page-size="16"></el-pagination>
	
	</div>
</template>

<script>
	export default{
		data(){
			return {
				page:1
			}
		},
		props:['artistAlbum'],
		
		methods:{
			getAlbumPage(page) {
				
			  this.$emit("getAlbumPage", page);
			}
		}
	}
</script>

<style>
	.album{
		margin-bottom: 50px;
	}
	.albumRow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	.albumCol{
		align-items: stretch;
		padding-bottom: 1.25rem;
		margin-bottom: 20px;
	
	}
	.imgcover,.albumname{
		cursor: pointer;
	}
	
</style>
