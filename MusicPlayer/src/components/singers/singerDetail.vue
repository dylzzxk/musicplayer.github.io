<template>
	<div class="singerdetail">
		<div class="singerwrap">
			<div class="singerCover">
			<img :src="artistmsg.picUrl" style="width: 200px; height: 200px;" />
			</div>
			<div class="singertitle">
				<span style="font-size: 30px;">{{artistmsg.name}}</span>
				</br>
				<span v-show="artistmsg.alias" style="color: gray;font-size: 10px;">{{artistmsg.alias[0]}}</span>
				</br>
				</br>
			<!-- 	</br>
				<span>专辑数：{{artistmsg.albumSize}}</span> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['artistmsg']
	}
</script>

<style>
	.singerdetail{
		width: 1220px;
		height: 250px;
	}
	.singerCover,.singertitle{
		float: left;
		margin-left: 20px;
		text-align: left;
	}
	
</style>
