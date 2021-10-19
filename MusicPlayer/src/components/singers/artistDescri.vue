<template>
	<div class="artistdescri">
		<div class="brief">
			<h3>个人简介</h3>
			<p  v-for="(item,index) in textFormat(artistDescri.briefDesc)" :key="index">{{item}}</p>
	</div>
		<div class="represent" v-for="(item,index) in artistDescri.introduction" :key="index">
			<h3>{{item.ti}}</h3>
			<p v-for="(item,index) in textFormat(item.txt)" :key="index">{{item}}</p>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:['artistDescri'],
		methods:{
			textFormat(text) {
			  let newText = text.split("\n");
			  return newText;
			},
		}
	}
</script>

<style>
	.artistdescri{
		text-align: left;
	}
</style>
