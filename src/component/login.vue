<template>
	<div id="login-box">
		<div class="login-h">
			<img src="../../data/images/mypage/login/wan.png" alt="" />
		</div>
		<form action="#">
			<div class="ipt-box">
				<input type="number" placeholder="手机号码" name="phone" id="loginphone"/>
			</div>
			<div class="ipt-box">
				<input type="password" placeholder="密码" name="pwd" id="loginpwd"/>
				<button class="eye-btn" type="button"></button>
			</div>
			<div class="ipt-box">
				<button id="loginBtn" type="submit" class="submit-btn" @click="t()">登录</button>
			</div>
			
			<router-link to="/forget">
				<div class="forget">
	   				<h3>忘记密码？</h3>  	
	   			</div>
			</router-link>
			
			<router-link to="/sign">
	   				<h3 class="sign">新用户注册</h3>  	
			</router-link>
		</form>
		
		<div class="login-bg"></div>
	</div>	
	
</template>

<script>
	import { Toast } from 'mint-ui'
	export default{
		methods:{
			t(){
				Toast('登录成功！')
//				this.$router.replace('/home')
			}
		}
	}
</script>

<style scoped>
	#login-box {
	    font-size: 0.24rem;
	}
	.login-bg{
		width: 100vw;
		height: 100vh;
		position: absolute;
		top:0px;
		left:0px;
		z-index: -2;
		background-image: url("../../data/images/mypage/login/login-bg.png");
		background-size: 100% 100%;
	}
	.login-h{
		margin: 1.95rem auto;
    	text-align: center;
	}
	.login-h img{
	    width: 3.26rem;
    	height: 1rem;
	}
	.ipt-box{
		padding: 0rem 1rem;
		margin-bottom: 0.3rem;
		position: relative;
	}
	.ipt-box input {
	    display: block;
	    border: none;
	    box-sizing: border-box;
	    padding: .2rem .3rem;
	    height: .88rem;
	    width: 100%;
	    color: #fff;
	    line-height: .4rem;
	    font-size: .28rem;
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    border-radius: .44rem;
	    background: hsla(0,0%,100%,.4);
		outline: none;
	}
	input::-webkit-input-placeholder {
        color:white;
        font-size: 14px;
    }
	::-moz-placeholder { 
	   color:white;
	}
	:-moz-placeholder { 
	   color:white;
	}
	input::-ms-input-placeholder { 
	   color:white;
	}
	input::-ms-input-placeholder { 
	   color:white;
	}
	.eye-btn{
		top:0.2rem;
		border: none;
	    right: 1.2rem;
	    background: url("../../data/images/mypage/login/eye.png") 50%/.4rem .4rem no-repeat;
	    position: absolute;
	    width: .5rem;
	    height: .55rem;
	    outline: none;
	}
	 .submit-btn {	    
	    background-color: hsla(0,0%,100%,.9);
    	color: #ea4141;   	
	    width: 100%;
	    font-size: .32rem;
	    height: .88rem;
	    border-radius: .44rem;
	    outline: none;
	}
	.forget{
		position: absolute;
	    text-align: left;
	    padding-left: 1rem;
	    color: white;
	}
	.forget h3{
		font-size: 0.24rem;
	}
	.sign{
		position: absolute;
	    text-align: left;
	    right: 1.5rem;
	    color: white;
	    font-size: 0.24rem;
	}
</style>