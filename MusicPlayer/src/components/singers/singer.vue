<template>
	<div class="singer">
		<div class="tagOne" @click="changeTag()">
			<ul style="text-align: left;">
			
				<h4><span class="item" :class="{active:languageTag==-1&&genderTag==-1}" @click="genderTag=-1,languageTag=-1">全部</span></h4>
			<el-divider></el-divider>
			
			<h4>华语</h4>
			<li><span class="item" :class="{active:languageTag==7&&genderTag==1}" @click="genderTag=1,languageTag=7">华语男歌手</span></li>
			<li><span class="item" :class="{active:languageTag==7&&genderTag==2}" @click="genderTag=2,languageTag=7">华语女歌手</span></li>
			<li><span class="item" :class="{active:languageTag==7&&genderTag==3}" @click="genderTag=3,languageTag=7">华语组合/乐队</span></li>
			<el-divider></el-divider>
			
			<h4>欧美</h4>
			<li><span class="item" :class="{active:languageTag==96&&genderTag==1}" @click="genderTag=1,languageTag=96">欧美男歌手</span></li>
			<li><span class="item" :class="{active:languageTag==96&&genderTag==2}" @click="genderTag=2,languageTag=96">欧美女歌手</span></li>
			<li><span class="item" :class="{active:languageTag==96&&genderTag==3}" @click="genderTag=3,languageTag=96">欧美组合/乐队</span></li>
			<el-divider></el-divider>
			
			<h4>日本</h4>
			<li><span class="item" :class="{active:languageTag==8&&genderTag==1}" @click="genderTag=1,languageTag=8">日本男歌手</span></li>
			<li><span class="item" :class="{active:languageTag==8&&genderTag==2}" @click="genderTag=2,languageTag=8">日本女歌手</span></li>
			<li><span class="item" :class="{active:languageTag==8&&genderTag==3}" @click="genderTag=3,languageTag=8">日本组合/乐队</span></li>
			<el-divider></el-divider>
			
			<h4>韩国</h4>
			<li><span class="item" :class="{active:languageTag==16&&genderTag==1}" @click="genderTag=1,languageTag=16">韩国男歌手</span></li>
			<li><span class="item" :class="{active:languageTag==16&&genderTag==2}" @click="genderTag=2,languageTag=16">韩国女歌手</span></li>
			<li><span class="item" :class="{active:languageTag==16&&genderTag==3}" @click="genderTag=3,languageTag=16">韩国组合/乐队</span></li>
			<el-divider></el-divider>
			
			<h4>其他</h4>
			<li><span class="item" :class="{active:languageTag==0&&genderTag==1}" @click="genderTag=1,languageTag=0">其他男歌手</span></li>
			<li><span class="item" :class="{active:languageTag==0&&genderTag==2}" @click="genderTag=2,languageTag=0">其他女歌手</span></li>
			<li><span class="item" :class="{active:languageTag==0&&genderTag==3}" @click="genderTag=3,languageTag=0">其他组合/乐队</span></li>
			</ul>
		</div>
		
		<div class="tagTwo" @click="changeTag">
			<span class="item" v-for="(item,index) in initials"
			:key="index"
			style="padding-left: 10px;" :class="{active:initialTag==item[1]}" @click="initialTag=item[1]" >
				{{item[0]}}
			</span>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				// 当前选中标签
				languageTag: -1,
				genderTag: -1,
				initialTag: -1,
				
				// 字母标签
				initials: [
				  ["热门", -1],
				  ["A", "a"],
				  ["B", "b"],
				  ["C", "c"],
				  ["D", "d"],
				  ["E", "e"],
				  ["F", "f"],
				  ["G", "g"],
				  ["H", "h"],
				  ["I", "i"],
				  ["J", "j"],
				  ["K", "k"],
				  ["L", "l"],
				  ["M", "m"],
				  ["N", "n"],
				  ["O", "o"],
				  ["P", "p"],
				  ["Q", "q"],
				  ["R", "r"],
				  ["S", "s"],
				  ["T", "t"],
				  ["U", "u"],
				  ["V", "v"],
				  ["W", "w"],
				  ["X", "x"],
				  ["Y", "y"],
				  ["Z", "z"],
				  ["#", 0],
				]
			}
		},
		created() {
			this.changeTag()
		},
	// created() {
	// 	axios({
	// 		url:'https://autumnfish.cn/artist/list',
	// 		method:'GET',
	// 		params:{
	// 			type:"-1",
	// 			area:"-1",
	// 			initial:"a"
	// 		}
			
	// 	}).then(res=>{
	// 		console.log(res)
	// 	})
	// },
	methods:{
		changeTag(){
			this.$emit("getSingerInfo",this.genderTag,this.languageTag,this.initialTag)
		}
	}
	
		
	}
</script>

<style>
	.singer{
		width: 100%;
		height: 100%;
	}
	.tagOne{
		float: left;
		width: 200px;
		height: 950px;
		background-color: rgb(249,249,249);
		border-left:1px solid rgb(236,236,236) ;
		border-right:1px solid rgb(236,236,236) ;
	}
	li{
		line-height: 25px;
	}
	.tagTwo{
		width: 1010px;
		height: 50px;
		float: left;
	}
	.item{
		cursor:pointer;
		
	}
	.active{
		color: firebrick;
		border: 1px solid rgb(236,236,236);
	}
</style>
