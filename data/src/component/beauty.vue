<template>
	<div class="public-box">
		<!--<p>美妆个护页面</p>-->
		<div class="top">
			<img src="../../data/images/index/load.png" alt="" class="loadimg">
				<p class="t-tex1">豌豆公主  注册送1088元大礼包</p> 
				<p class="t-tex2">日本优品一站购  正品直邮</p>
			<div class="t-open">立即打开</div>
		</div>
		
		<div class="beau-title-box">
			<div class="back-icon" @click="back()"></div>
			<h3 class="b-title">新人美妆个户</h3>
			<div class="se-icon2"></div>
		</div>
		
		<div class="beau-logo">
			<img src="../../data/images/index/beauty/beau1.png" alt="" />
		</div>
		<div class="beau-coupon">
			<img src="../../data/images/index/beauty/beau2.gif" alt="" />
		</div>
		
		<div class="sli5">美妆个护榜单</div>

		<ul class="sli5-box-ul">
			<li class="beau-li" v-for="(v,i) in list1">	
				<h3 class="beau-ti">{{v.title}}</h3>
				<div class="beau-1">
					<div class="flo">
						<img src="../../data/images/index/sm1-icon.png" alt="" />
					</div>
					<img :src="v.images" >
				</div>						
				<p class="beau-ti2">{{v.des}}</p>					  
			</li>
		</ul>

		
		<div class="sli5">新人专享优惠</div>
		<ul class="new-ul">
			
				<li v-for="(v,i) in list2" class="new-li">
					<div class="new-timg">
						<i class="ting-r"></i>
						<router-link to="/details">
							<img :src="v.images" class="ting-photo">
						</router-link>
						<i class="ting-l"></i>
					</div>				
					<h3 class="new-ti">{{v.title}}</h3>					
					<p class="new-ti2">{{v.des}}</p>
					<p class="ne-pri">新人价</p>
					
					<div class="addjo" @click="t()">
						<p class="addj">加入购物袋</p>
						<i class="addbag"></i>
					</div>	
					
				</li>
			
		</ul>
		
		
		
		
		
		
		
		
		<div class="index-box">
	   		 <nav class="nav">
   		 		<div class="navs">
   		 			 <span @click="back();" class="nav1"></span>	  		 			
		            　 　　<span class="nav2"></span>
		            　　　 <span  class="nav3"></span>
		        	<span  class="nav4"></span>
   		 		</div>	    　　　　　
    　　　　	</nav> 			
   		 </div>
   		 <!--<div @click="back()">返回首页</div>-->
   		 
		 
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
  export default {
  	data(){
  		return{
  			list1:'',
  			list2:''
  		}
  	},
     methods: {  
		back(){
			this.$router.replace('/home')
		},
//		back1(){
//			this.$router.replace('/brand')
//		},
//		back2(){
//			this.$router.replace('/cart')
//		},
//		back3(){
//			this.$router.replace('/my')
//		},
		back4(){
			this.$router.replace('/home/details')
		},
		t(){
			this.$store.commit('add',1);
			Toast('添加成功！')
		}
     },
     mounted(){
     	this.$http.get('./data/my.json')
		.then((response)=>{
		this.list1=response.data.pros1;
		this.list2=response.data.pros2
		})
		.catch(function (error) {	
			console.log(error);
		})
		.then(function () {		
		})
     }
  }
</script>

<style>
	.public-box{
		margin-top: -60px;
		width: 100%;
		height: 28.3rem;
	}
</style>
<style scoped>
	.nav,.navs{
		bottom:-1px;
	}
	.beau-title-box{
		height: 0.8rem;
		position: relative;
	}
	.back-icon{
		background: url('../../data/images/index/beauty/icon1.png') center center no-repeat;
    	background-size: .35rem .33rem;
	    width: 0.8rem;
	    height: 0.8rem;
	    line-height: .8rem;
	    color: #9e9e9e;
	    padding-left: .1rem;
	    padding-right: .1rem;
	    text-align: center;
	}
	.b-title{
		position: absolute;
	    left: 1rem;
	    top: 0;
	    width: 5.4rem;
	    line-height: 0.8rem;
	    margin:0px;
	}
	.se-icon2{
		position: absolute;
	    right: 0rem;
	    top: 0;
	    height: .8rem;
	    width: 0.8rem;
	    padding-left: .1rem;
	    padding-right: .1rem;
	    text-align: center;
	    background: url('../../data/images/index/beauty/search.png') center center/.32rem .36rem no-repeat;
	}
	.beau-logo{
		height: 2.205rem;
	}
	.beau-logo img{
		height: 2.205rem;
	}
	.beau-coupon{
		height: 1.689rem;
	}
	.beau-coupon img{
		height: 1.689rem;
	}
	.sli5{
		font-weight: 700;
		line-height: .56rem;
	    height: .56rem;
	    font-size: .4rem;
	    padding-left: 0.3rem;
	    text-align: left;
	    padding-bottom: .2rem;
	    padding-top: .2rem;
	}
	.sli5-box-ul{
		height: 2.94rem;
		margin-top: 0px;
		overflow: hidden;
		margin-bottom: 0px;
	}
	.beau-li{
		width: 2.14rem;
    	height: 2.7rem;
		border-radius: .2rem;
		margin-left: 0.1rem;
		margin-right: 0.1rem;
		overflow: hidden;
		background-color: #FAFAFA;
		position: relative;
	}
	.beau-1{
	    height: 1.5rem;
	   	border-radius: 0.2rem;
	    background-color: #FAFAFA;
	    position: relative;
	    margin: auto;
	    z-index: 1;    
	}
	.flo{
		position: absolute;
		top:0px;
		left:0.2rem;
		width: 1.7rem;
		height: 1.7rem;
		z-index: 4;
		padding: 0px;
	}
	.beau-1 .flo img{
		width: 1.7rem;
		height: 1.6rem;
	}
	.beau-1 img{
		width: 1.5rem;
	    height: 1.5rem;
	}
	.beau-ti{
		display: inline-block;
		text-align: center;
	    border-bottom: 2px solid red;
	   	margin-top: 0px;
	    font-size: .24rem;
	    font-weight: bolder;
	    max-width: 100%; 
	    color: black;   
	}
	.jiao{
		position: absolute;
		bottom:15px;
		z-index: 2;
		opacity: 1;
	}
	.beau-ti2{
		color:white;
		margin:0px;
		width: 100%;
		position: absolute;
		bottom:0px;
		z-index: 0;
		height: 0.77rem;
		line-height: 1.05rem;
	    border:1px solid red;
	    font-size: .24rem;
    	font-weight: bolder;
		background-color: rgb(208, 45, 58);
	}
	.new-ul{
		margin-top: -0.2rem;
		padding-right: 0.2rem;
	}
	.new-li{
		width: 2.226rem;
		height: 4rem;
		background: #fafafa;
		border: 1px solid rgba(230,230,230,.5);
	    border-radius: .2rem;
	    overflow: hidden;
	    margin-top: 0.2rem;
	    margin-left: 0.15rem;
	    margin-right: 0rem;
	    box-sizing: border-box!important;
	    position: relative;
	}
	.new-timg{
		height: 2.226rem;
		box-sizing: border-box;
	}
	.ting-r{
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: .7rem;
	    height: .7rem;
	    line-height: .7rem;
	    text-align: center;
	    overflow: hidden;
		background: url('../../data/images/index/beauty/right-r.png');
		background-size: 100% 100%;
	}
	.ting-l{
		position: absolute;
	    left: 0;
	    bottom: 2rem;
	    width: .8rem;
	    height: .8rem;
	    line-height: .8rem;
	    text-align: center;
	    background: url('../../data/images/index/beauty/le.png');
		background-size: 100% 100%;
	}
	.ting-photo{
		margin-top: 0rem;
		width: 2rem;
		text-align: center;
	    height: 2rem;
	}
	.new-ti{
	    margin: .1rem 0;
	    width: 100%;
	    height: .64rem;
	    line-height: .32rem;
	    font-size: .24rem;
	    overflow: hidden;	  
	    align-items: center;
	    color: #696969;
	}
	.new-ti2{
		margin:0px;
		text-align: left;
	    font-size: .3rem;
	    color: #ee1414;
	    line-height: .38rem;
	    height: .38rem;
		padding-left: 0.2rem;
	}	
	.ne-pri{
		position: absolute;
		bottom:0.32rem;
		right:0.3rem;
		border:1px solid red;
		padding: 0 .06rem;
		border-radius: .22rem;
		background: #ea4141;
		color: #fff;
		font-size: .18rem;
		line-height: .28rem;
		margin-left: .1rem;
	}
	.addjo{
		height: .5rem;
	    width: inherit;
	    background: #fff;
	    border-top: 1px solid rgba(230,230,230,.5);
	    font-size: .26rem;
	    line-height: .5rem;
	    text-align: center;
	    position: relative;
	}
	.addjo .addj{
		text-align: left;
		margin-top: 0px;
		padding-left: 0.2rem;
		color:black;
		
	}
	.addbag{
		position: absolute;
		top:0px;
		right:0px;
		width: .4rem;
		height: 0.4rem;
	   	margin-top: 0.05rem;
	    margin-right: .2rem;
	    background: url('../../data/images/index/beauty/pad.png');
	    background-size: 100% 100%;
	}
		
</style>