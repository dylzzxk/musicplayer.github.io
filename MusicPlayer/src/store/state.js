const state={
	// 是否打开登录面板
	showLogin: false,
	//存储token
	Authorization: localStorage.getItem('Authorization') ?  JSON.parse(localStorage.getItem('Authorization')) : '',
	cookie:'',
	
	// 播放列表
	playList: localStorage.getItem('playList') ? JSON.parse(localStorage.getItem('playList')) : [],

}

export default state
