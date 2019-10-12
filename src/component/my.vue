<template>
   	<div>
   		<div class="black">	
   			<router-link to="/login">
   				<div class="head">
	   				<div class="head-img"></div>
	   				<h3 class="log">点击登录/注册</h3>  				
	   			</div>
   			</router-link>

   			<ul class="my-nav">
	   			<li>
	   				<p>35</p>抵现积分	   				
	   			</li>
	   			<li>
	   				<p>33</p>优惠券  				
	   			</li>
	   			<li>
	   				<p>22</p>公主说	   				
	   			</li>
	   		</ul>
   		</div>
   		
   		<!--<h3>添加的数量为---{{$store.state.count}}</h3>-->
   		
		<!--<button @click="home()">返回首页</button>-->	
		<div class="myorder">
			<div class="or-title">我的订单</div>
			<!--待付款-->
			<div class="order-nav">
				<div class="or-nav">
					<i class="or-icon1"></i>
					<div>待付款</div>
				</div>
				<div class="or-nav">
					<i class="or-icon1 or-icon2"></i>
					<div>待发货</div>
				</div>
				<div class="or-nav">
					<i class="or-icon1 or-icon3"></i>
					<div>待收货</div>
				</div>
				<div class="or-nav">
					<i class="or-icon1 or-icon4"></i>
					<div>待评价</div>
				</div>
				<div class="or-nav last1">
					<i class="or-icon1 or-icon5"></i>
					<div>全部订单</div>
				</div>
			</div>
			<div class="or-banner">
				<img src="../../data/images/shopbag/orban.png" alt="" />
			</div>
		</div>
		
		
		<div class="myorder">
			<div class="or-title">我的服务</div>
			<div class="orrd">
				<div class="orr-nav">
					<i class="or-icon11 "></i>
					<div>收藏夹</div>
				</div>
				<div class="orr-nav">
					<i class="or-icon11 or-icon22"></i>
					<div>免税店</div>
				</div>
				<div class="orr-nav">
					<i class="or-icon11 or-icon33"></i>
					<div>我的特权</div>
				</div>
				<div class="orr-nav">
					<i class="or-icon11 or-icon44"></i>
					<div>我的点评</div>
				</div>
				<div class="orr-nav">
					<i class="or-icon11 or-icon55"></i>
					<div>联系客服</div>
				</div>
				<div class="orr-nav">
					<i class="or-icon11 or-icon66"></i>
					<div>关于我们</div>
				</div>
				
			</div>
		</div>
		
		<!--<h3>添加的数量为---{{$store.state.count}}</h3>-->
		
		
		<div class="zui"></div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	methods:{
//		home(){
//			this.$router.go(-1)
//		}
		
	},
	mounted(){
				 
	}
}
</script>
<style>

</style>
<style scoped>
	.zui{
		height: 1rem;
	}
	.black{
		width: 80%;
		height: 0px;
	    margin: 0 auto;	    
	    padding:0.4rem;
	    padding-bottom: 3rem;
	    padding-top:30px;
	    margin-top: 0.4rem;
	    border-radius: 10px;
	    background-color: black;
	    position: relative;    
	}
	.head{
		width: 95%;
		position: relative;
		padding-left: 3%;
	}
	.head-img{
		width: 1rem;
		height: 1rem;
		background: url('../../data/images/mypage/head.png');
		background-size: 100% 100%;
		border-radius:50%;				
	}
	.head .log{
		position: absolute;
		top: 0px;
		left:90px;
		line-height: 1.2rem;
		color: white;
		font-size:0.36rem;
		margin-top:0px;
		letter-spacing: 2px;
	}
	.my-nav{
		width: 93%;
		height: 1rem;
		position: absolute;
		bottom: 0px;
		color:white;
	}
	.my-nav li{
		float: left;
		width: 32.5%;
		color:white;
		margin:0px;
	}
	.my-nav li p{
		margin:5px;
	    font-size: .36rem;
	}
	.my-nav a:-webkit-any-link {
	    color: white;
	}
	.p-item{
		width: 100%;
		height: 1rem;
		border:1px solid blue;
		padding: 20px 0px;
	}
	.p-item-title{
		text-align: left;
	    font-size: 0.4rem;
	    font-weight: 500;
	}
	.myorder{
		margin: .4rem;
    	padding-bottom: .3rem;
    	border-bottom: .02rem solid #D8D8D8;
	}
	.or-title{
		margin-bottom: .16rem;
	    font-size: .4rem;
	    font-weight: 500;
	    text-align: left;
	}
	.order-nav{
		display: flex;
	    font-size: .24rem;
	    text-align: center;
	}
	.or-nav{
		padding: .24rem 0;
	    position: relative;
	    padding-right: 0.7rem;
	}
	.last1{
		 padding-right: 0;
	}
	.or-icon1{
	    height: .5rem;
	    display: block;
		background: url('../../data/images/shopbag/or1.png')center no-repeat;
		background-size: .5rem .5rem;
	}
	.or-icon2{
		background: url('../../data/images/shopbag/or2.png')center no-repeat;
		background-size: .5rem .5rem;
	}
	.or-icon3{
		background: url('../../data/images/shopbag/or3.png')center no-repeat;
		background-size: .5rem .5rem;
	}
	.or-icon4{
		background: url('../../data/images/shopbag/or4.png')center no-repeat;
		background-size: .5rem .5rem;
	}
	.or-icon5{
		background: url('../../data/images/shopbag/or5.png')center no-repeat;
		background-size: .5rem .5rem;
	}
	.or-banner{
		position: relative;
	}
	.or-banner img{
		width: 100%;
		height: 100%;
	}
	.orrd{
		position: relative;
		height: 3.2rem;
		padding: .24rem 0;
	}
	.orr-nav{
		position: relative;
	    width: 25%;
	    height: 2rem;
	    text-align: center;
	    font-size: 0.28rem;
	    float: left;
	}
	.or-icon11{
		margin-left: 0.5rem;
		display: block;
		width: .64rem;
    	height: .64rem;
		background: url('../../data/images/shopbag/oo1.png') center no-repeat;
		background-size: .64rem .64rem;
	}
	.or-icon22{
		background: url('../../data/images/shopbag/oo2.png') center no-repeat;
		background-size: .64rem .64rem;
	}
	.or-icon33{
		background: url('../../data/images/shopbag/oo3.png') center no-repeat;
		background-size: .64rem .64rem;
	}
	.or-icon44{
		background: url('../../data/images/shopbag/oo4.png') center no-repeat;
		background-size: .64rem .64rem;
	}
	.or-icon55{
		background: url('../../data/images/shopbag/oo5.png') center no-repeat;
		background-size: .64rem .64rem;
	}
	.or-icon66{
		background: url('../../data/images/shopbag/oo6.png') center no-repeat;
		background-size: .64rem .64rem;
	}

</style>