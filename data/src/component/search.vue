<template>
	<div>
		<div class="ch-top">
			<div class="re-icon1" @click="back()"></div>
			<div class="ch-top-box">
				<div class="chch-box">
					<div class="sech-logo"></div>
					<input placeholder="搜索商品或品牌" type="search" autocomplete="off" name="q" class="xs-input">
					<div class="cha"></div>
				</div>				
			</div>
			<button type="submit" class="ch-btn">搜索</button>
		</div>
		<div class="ch-hot">
			<div class="ch-title">热门搜索</div>
			<div class="hot-list">
				<span class="hot-items">韩后</span>
				<span class="hot-items">凡尔赛</span>
				<span class="hot-items">肌美精</span>
				<span class="hot-items">复活草</span>
				<span class="hot-items">大米面膜</span>
				<span class="hot-items">佑天兰</span>
				<span class="hot-items">雪花秀</span>
			</div>
		</div>
	</div>
</template>

<script>
 export default {
  	data(){
  		return{
  		}
  	},
     methods: {  
		back(){
			this.$router.replace('/home')
		}
     }
  }
	
</script>

<style>
	body,html{
		margin: 0px;
		padding: 0px;
	}
</style>

<style scoped>
	.ch-top{
		margin-top: -1.2rem;
		width: 100%;
		height: 1.1rem;
	    position: fixed;
	    z-index: 1;
	    background-color: #fff;
	    border-bottom: 1px solid rgba(216,216,216,.5);
	    position: relative;
	    overflow: hidden;
	}
	.re-icon1{
		background: url('../../data/images/index/beauty/icon1.png') center center no-repeat;
    	background-size: .35rem .33rem;
	    width: 0.8rem;
	    height: 0.8rem;
	    line-height: .8rem;
	    color: #9e9e9e;
	    margin-top: 0.15rem;
	    padding-left: .1rem;
	    padding-right: .1rem;
	    text-align: center;
	}
	.ch-top-box{
		position: absolute;
		top: 0.2rem;
		left: 0.8rem;
		width: 77%;
		height: .7rem;
	    border-radius: .35rem;
	    background-color: #efefef;
	}
	.chch-box{
		position: relative;
		height: .7rem;
	}
	.sech-logo{
		height: 0.5rem;
    	width: 0.5rem;
    	margin: 0.14rem;
    	background: url('../../data/images/index/chch.png') no-repeat;
        background-size: .38rem .42rem;
	}
	.xs-input{
		position: absolute;
		top: -0.15rem;
		left: 0.7rem;
		box-sizing: border-box;
		height: .7rem;
		width: 100%;
		border: none;
		outline: none;
		font-size: .3rem;
		line-height: .7rem;
		background-color: transparent;
	}
	.cha{
		padding: 0.1rem;
		position: absolute;
		right: 0px;
		top: 0.2rem;
	    background-color: #888;
	    width: .2rem;
	    height: .2rem;
	    border-radius: 50%;
	    transform: translate(-50%,-50%);
	}
	.cha:after,.cha:before{
		content: " ";
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    width: .28em;
	    height: .03em;
	    overflow: hidden;
	    background-color: #fff;
        transform: translate(-50%,-50%) rotate(45deg);
	}
	.cha:after{
		 transform: translate(-50%,-50%) rotate(-45deg);
	}
	.ch-btn{
		position: absolute;
		top: 0rem;
		right:0rem;
	    border: none;
	    background-color: transparent;
	    height: 1.1rem;
	    outline: none;
	    width: .9rem;
	}
	.ch-title{
		margin: .3rem .3rem 0;
	    color: #3e3e3e;
	    font-size: .28rem;
	    line-height: .56rem;
	    display: flex;
	}
	.hot-list{
		height: 2rem;
		padding: 0.3rem;
	}
	.hot-items{
		color: rgb(0, 0, 0);
	    background-color: rgb(255, 255, 255);
	    display: inline-block;
	    float: left;
	    border-radius: 2px;
	    padding: .1rem .2rem;
	    border: 1px solid hsla(0,0%,89%,.5);
	    margin-right: .18rem;
	    margin-bottom: .12rem;
	    font-size: .24rem;
	}
	
</style>