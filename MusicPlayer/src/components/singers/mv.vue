<template>
	<div class="mv">
		
		<el-row :gutter="30" class="mvRow">
			<el-col class="mvCol" :span="6"  v-for="(item, index) in artistMV"
	      :key="index">
					
				<div class="imgcover">
					
					<img v-lazy="item.imgurl"
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
				<div class="mvname">
					<span>{{item.name}}</span>
				</div>
			</el-col>
		</el-row>
	  <!-- 分页 -->
	  <el-pagination
	 
	  @current-change="getMVPage"
	  background
	  layout="prev,pager,next"
	  :total="mvcount"
	  :current-page="page"
	  :page-size="8"></el-pagination>
	
	</div>
</template>

<script>
	export default{
		data(){
			return {
				page:1
			}
		},
		props:['artistMV','mvcount'],
		
		methods:{
			getMVPage(page) {
				
			  this.$emit("getMVPage", page);
			}
		}
	}
</script>

<style>
	.mv{
		margin-bottom: 50px;
	}
	.mvRow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	.mvCol{
		align-items: stretch;
		padding-bottom: 1.25rem;
		margin-bottom: 20px;
	
	}
	.imgcover,.mvname{
		cursor: pointer;
	}
	.imgcover{
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
</style>
