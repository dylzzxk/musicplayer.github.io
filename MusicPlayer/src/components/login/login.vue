<template>
	<div class="login">
		<div class="black">
			<i class="el-icon-close" style="top: 0;color: white;font-size: 20px;cursor: pointer;" @click="changeLoginstatu(false)"></i>
		</div> 
		<br /><br /><br />
		
		<el-form :rules="Rules"  :model="Form" ref="Form" label-width="150px" >
			<el-form-item label="手机号" prop="phone">
				<el-input style="width: 200px;float: left;" v-model="Form.phone"></el-input>
		    </el-form-item>
		                      
		    <el-form-item label="密码" prop="password" >
		        <el-input type="password" v-model="Form.password" style="width: 200px;float: left;"></el-input>
		    </el-form-item>
		</el-form>
		<button @click="login()">登录</button>
	</div>
</template>

<script>
	import axios from 'axios'
import {mapGetters,mapMutations,mapActions} from 'vuex'
	export default{
			
		data(){
			   // 此处自定义校验手机号码js逻辑
			    var phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/
			    var validatePhone = (rule, value, callback) => {
			      if (!value) {
			        return callback(new Error('号码不能为空!!'))
			      }
			      setTimeout(() => {
			        if (!phoneReg.test(value)) {
			          callback(new Error('请输入正确的手机号'))
			        } else {
			          callback()
			        }
			      }, 1000)
			    }

			return {
				
				
				Form:{
					phone:'',
					password:''
				},
				
				//校验规则
				Rules:{
					phone:[
						{
							required:true,//是否必填
							validator:validatePhone,//规则
							trigger:'blur'//何事件触发
						}
						
					],
					password:[
						{
							required:true,//是否必填
							message:'密码不能为空',//规则
							trigger:'blur'//何事件触发
						}
					]
				}
			}
		},
		
		methods:{
			// ...mapActions['saveAuthorization'],
			// ...mapMutations['changeLogin'],
			async login(){
				await axios({
					url:'https://autumnfish.cn/login/cellphone',
					method:'POST',
					data:this.Form
				}).then(res=>{
					console.log(res.data)
					if (res.data.code !== 200) return this.$message.error("登陆失败,请检查登录信息!");
					 this.$message.success("登陆成功");
					this.$store.dispatch("saveAuthorization",res.data.profile)
					this.$store.dispatch("saveCookie",res.data.cookie)
					// this.changeLogin({ Authorization:res.data.profile})
					this.$emit("showLogin",false)
				})
			
			},
				
			changeLoginstatu(statu){
				this.$store.dispatch('changeLoginstatu',statu)
			}
			
			
		}
		
	}
</script>

<style>
	.login {
	  z-index: 500;
	  position: fixed;
	  width: 450px;
	  height: 300px;
	  left: 50%;
	  top: 10%;
	  background: #fff;
	  box-shadow: #cecccc 0px 0px 2px 2px;
	  transform: translate(-50%);
	}
	.black{
		width: 100%;
		height: 50px;
		background-color: #222222;
		text-align: right;
	}
	

</style>
