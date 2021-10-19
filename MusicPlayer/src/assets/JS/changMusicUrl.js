import axios from 'axios'
var getUrl=function(id){
				// console.log(id)
				axios({
					url:'https://autumnfish.cn/song/url',
					method:'GET',
					params:{
						id
					}
				}).then(res=>{
					let url=res.data.data[0].url
					//设置给全局musicUrl的播放url
					// console.log(this.$parent.$parent)
					// this.$parent.musicUrl=url
					this.$root.musicUrl=url
					// console.log(this.$root.musicUrl)
				})
				
			}
export {
	getUrl
	};