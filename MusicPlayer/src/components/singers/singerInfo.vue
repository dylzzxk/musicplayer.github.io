<template>
	<div class="singerInfo">
		<el-row class="singerRow" :gutter="10">
			<el-col :span="4" v-for="(item,index) in singerInfo" :key="index" class="singerCol">
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
	</div>
</template>

<script>
	export default{
			
		props:{
			singerInfo:Array
		},
		methods:{
			getSingerId(id){
				this.$emit("getSingerId",id)
			}
		}
	}
</script>

<style>
	.singerInfo{
		/* margin: 0 auto; */
		width: 1010px;
		height: 100%;
		float: left;
		/* background-color: #0086B3; */
		position: relative;
	
	}
	.singerRow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	.singerCol{
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
</style>
