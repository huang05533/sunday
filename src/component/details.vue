<template>
	<div class="det-box">
		<router-link to="/load">
 			<div class="top">
				<img src="../../data/images/index/load.png" alt="" class="loadimg">
					<p class="t-tex1">豌豆公主  注册送1088元大礼包</p> 
					<p class="t-tex2">日本优品一站购  正品直邮</p>
				<div class="t-open">立即打开</div>
			</div>
		</router-link>
		
		<swiper :options="swiperOptionSwp1" ref="mySwiper">
		    <swiper-slide><img src="../../data/images/shopbag/lion1.png" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../data/images/shopbag/lion2.png" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../data/images/shopbag/lion3.png" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../data/images/shopbag/lion4.png" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../data/images/shopbag/lion1.png" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../data/images/shopbag/lion2.png" alt="" /></swiper-slide>
		    <swiper-slide><img src="../../data/images/shopbag/lion3.png" alt="" /></swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		
		<div class="det-title">
			<div class="det-slogan">牙齿美容隐藏年龄秘密</div>
			<div class="det-describ">
				<div class="det-icon">自营</div>
						LION 狮王 White&amp;White特效美白牙膏 150g
			</div>
			<div class="det-price">
				<span class="final-price">¥24</span>
				<span class="origin-price">¥29</span>
			</div>
		</div>
		
		<div class="det-bun">
			 <swiper :options="swiperOptionSwp2">
		        <swiper-slide>
		        	<img src="../../data/images/shopbag/dt-bg1.png" alt="" />
	        		<div class="bundle-count col">1件</div>
	        		<div class="bundle-price col">单件¥24.00</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<img src="../../data/images/shopbag/dt-bg.png" alt="" />
	        		<div class="bundle-count">2件</div>
	        		<div class="bundle-price">单件¥15.50</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<img src="../../data/images/shopbag/dt-bg.png" alt="" />
	        		<div class="bundle-count">8件</div>
	        		<div class="bundle-price">单件¥8.75</div>
		        </swiper-slide>
		        <swiper-slide>
		        	<img src="../../data/images/shopbag/dt-bg.png" alt="" />
	        		<div class="bundle-count">10件</div>
	        		<div class="bundle-price">单件¥6.10</div>
		        </swiper-slide>
		      </swiper>
		</div>
		
		<!--<button @click="t()">按钮</button>-->
		
		<div class="intro">
			<div class="intro-icon">
				<div class="intro1" style="color: #9E9E9E"><i></i>假一赔十</div>
				<div class=" intro1" style="color: #9E9E9E"><i></i>包税</div>
				<div class="intro1 " style="color: #9E9E9E"><i></i>保税仓发货</div>
				<div class="intro1 " style="color: #9E9E9E"><i></i>跨境商品</div>
			</div>
			<div class="intro-next">
				
			</div>
		</div>
		
		<!--底部导航栏-->
		<div class="det-bottom">
			<!--收藏-->
			<div class="det-coll">
				<div class="det-btn1">
					<div class="coll-icon">
						<img src="../../data/images/shopbag/coll1.png" class="collimg coll1">
					</div>
					<p>收藏</p>
				</div>
			</div>
			<!--购物袋-->
			<div class="cart">
				<div class="cart1">
					<img src="../../data/images/shopbag/bagg.png" class="cartimg">
					<p>购物袋</p>
				</div>
			</div>
			<!--加入购物袋-->
			<div>
				<div class="page-actionsheet-wrapper">
					<div id="addCart" class="mint-button mint-button--default mint-button--large" @click="actionSheet">加入购物袋</div>
				</div>
				<mt-actionsheet
			        :actions= "pro5"
					:closeOnClickModal= false
			        v-model="sheetVisible">
			    </mt-actionsheet>
			</div>
			
			
		</div>
		
		
		<!--活动-->
		<div class="activity">
			<div class="acti-box">
				<div class="acti1">活动</div>
				<div class="acti2">
					<ul>
						<li class="acc">
							<div class="acti-a1">
								<div class="acti-a1-name">满件减,不可用券</div>
							</div>
							<div class="acti-a2">第2件享5折</div>
						</li>
						<li>
							<div class="acti-a1">
								<div class="acti-a1-name">满减</div>
							</div>
							<div class="acti-a2">每满200元减40元,最高减200元</div>
						</li>
					</ul>
					
				</div>
				<div class="intro-next"></div>
			</div>
		</div>
		<div class="activity">
			<div class="acti-box">
				<div class="acti1">活动</div>
				<div class="acti2">
					<ul>
						<li class="acc">
							<div class="acti-a1">
								<div class="acti-a1-name">满件减,不可用券</div>
							</div>
							<div class="acti-a2">第2件享5折</div>
						</li>
						<li>
							<div class="acti-a1">
								<div class="acti-a1-name">满减</div>
							</div>
							<div class="acti-a2">每满200元减40元,最高减200元</div>
						</li>
					</ul>
					
				</div>
				<div class="intro-next"></div>
			</div>
		</div>
		
		
		


		
		<!--<div class="zui1"></div>-->
	</div>
</template>


<script>
	import { Toast } from 'mint-ui'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		data(){
			return {
				msg:'',
				swiperOptionSwp1: {
		          notNextTick: true,
		          autoplay: 3000,
				  direction:'horizontal',
		          grabCursor : true,
		          setWrapperSize :true,
		          autoHeight: true,
		          pagination : {
		          	el:'.swiper-pagination',
         			clickable:true
		          },
		          paginationClickable :true,
		          mousewheelControl : true,
		          observeParents:true,
		          debugger: true,
		      },
		      swiperOptionSwp2: {
		       	 slidesPerView: 2.5,
          		 spaceBetween: 30
		      },
		      pro5: [			 	 
				{
			        name: '图片',
			        method : this.getCamera	
		      	}, 
				{
			        name: '￥43',
			        method : this.getCamera	
		      	},
		 		{
			        name: '发货仓',
			        method : this.getCamera	
		      	},
				{
			        name: '日本仓',
			        method : this.getCamera	
		      	},
				{
			        name: '郑州保税仓',
			        method : this.getCamera	
		      	},
				{
			        name: '数量',
			        method : this.getCamera	
		      	},
				{
			        name: '一',
			        method : this.getCamera	
		      	},
				{
			        name: '1',
			        method : this.getCamera	
		      	},
				{
			        name: '十',
			        method : this.getCamera	
		      	},
			 	 {
			        name: '确定加入购物袋', 
			        method : this.getLibrary	
		      	}],
			  sheetVisible: false
 
			}
		},
		components:{
	       swiper,
	       swiperSlide
	    },
		methods:{
			home(){
				this.$router.replace('/home')
			},
			
			actionSheet: function(){
		      this.sheetVisible = true;
		    },
		    getCamera: function(){
		      console.log("添加数量")
		    },
		    getLibrary: function(){
				this.$store.commit('add',1);
				Toast('添加成功！')
		    }

		},
		mounted(){			
			if(this.$route.params.m==0){
				this.msg='水杯'
			}else if(this.$route.params.m==1){
				this.msg='纸巾'
			}else{
				this.msg='蜂蜜'
			}
		}
	}
</script>

<style>
	.mint-actionsheet{
		border-top-left-radius: .3rem;
    	border-top-right-radius: .3rem;
		height: 5.2rem;
		width: 100%;
	}
	.mint-actionsheet-list{
		height: 5.6rem;
		margin-top: -0.5rem;
		position: relative;
	}
	.mint-actionsheet-listitem:nth-child(1){
		height: 2rem;
		width: 2rem;
		color: transparent;
		background: url('../../data/images/shopbag/lion2.png');
		background-size: 100% 100%;
	}
	.mint-actionsheet-listitem:nth-child(2){
		position: absolute;
		top: 1rem;
		left: 2.6rem;
		height: 1rem;
		width: 1.2rem;
		color: red;
		font-size: 0.5rem;
		border:none;
	}
	.mint-actionsheet-listitem:nth-child(3),.mint-actionsheet-listitem:nth-child(4),.mint-actionsheet-listitem:nth-child(5){
		position: absolute;
		top: 2.3rem;
		left: 0rem;
		height: 0.6rem;
		width: 1.2rem;
		line-height: 0.6rem;
		font-size: 0.35rem;
		border:none;
	}
	.mint-actionsheet-listitem:nth-child(4){
		left: 1.5rem;
		width: 1.2rem;
		font-size: 0.3rem;
		border-radius: .04rem;
    	border: 1px solid #9e9e9e;
	}
	.mint-actionsheet-listitem:nth-child(5){
		left: 3rem;
		width: 2rem;
		font-size: 0.3rem;
		border-radius: .04rem;
   		 border: 1px solid #9e9e9e;
	}
	.mint-actionsheet-listitem:nth-child(6),.mint-actionsheet-listitem:nth-child(7),.mint-actionsheet-listitem:nth-child(8),.mint-actionsheet-listitem:nth-child(9){
		position: absolute;
		top: 3.3rem;
		left: 0rem;
		height: 0.6rem;
		line-height: 0.6rem;
		width: 1rem;
		font-size: 0.3rem;
		border-radius: .04rem;
   		border: none;
	}
	.mint-actionsheet-listitem:nth-child(7){
		left: 1.5rem;
		border: 1px solid #9e9e9e;
	}
	.mint-actionsheet-listitem:nth-child(8){
		left: 2.5rem;
		border: 1px solid #9e9e9e;
	}
	.mint-actionsheet-listitem:nth-child(9){
		left: 3.5rem;
		border: 1px solid #9e9e9e;
	}
	.mint-actionsheet-listitem:nth-child(10){
		position: absolute;
		top: 4.5rem;
		left: 0rem;
		height: 0.8rem;
		line-height: 0.8rem;
		width: 7rem;
		color: white;
		background: black;
		font-size: 0.3rem;
		border-radius: .04rem;
   		border: 1px solid #9e9e9e;
	}
	.mint-actionsheet-button{
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
		color: transparent;
		width: 0.3rem;
		height: 0.3rem;
		background: url('../../data/images/canclee.png') no-repeat;
		background-size: 100% 100%;
	}
</style>


<style scoped>
	.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide{
 		height: 7.2rem;
 		position: relative;
 	}
 	.swiper-container-autoheight .swiper-slide img{
 		height: 7.2rem;
 		width: 96%;
 	}
 	.swiper-pagination{
 		width: 100%;
 	}
 	.swiper-pagination .swiper-pagination-bullet-active{
 		background: red;
 	}
	.det-box{
		margin-top: -1.2rem;
	}
	.det-title{
		/*border: 1px solid red;*/
		position: relative;
	    padding: .24rem .3rem;
	}
	.det-slogan{
		font-family: "微软雅黑";
		text-align: left;
		font-size: .34rem;
    	font-weight: 700;
	}
	.det-describ{
		text-align: left;
		margin-top: .12rem;
	    font-size: .3rem;
	    color: #191919;
	    font-weight: 400;
	}
	.det-icon{
		display: inline-block;
	    height: .3rem;
	    line-height: .3rem;
	    font-size: .2rem;
	    border-radius: .15rem;
	    overflow: hidden;
	    position: relative;
	    margin-right: .1rem;
	    background: #000;
	    color: #fff;
	    padding: 0 .1rem;
	    margin-top: -.06rem;
	}
	.det-price{
		text-align: left;
		position: relative;
	    margin: .14rem auto 0 .14rem;
	    z-index: 1;
	}
	.final-price{
		font-size: .34rem;
	    color: #ee1414;
	    font-weight: 700;
	    line-height: .4rem;
	}
	.origin-price{
		 margin-left: .12rem;
	    font-size: .26rem;
	    color: #9e9e9e;
	    text-decoration: line-through;
    	line-height: .4rem;
	}
	.det-bun{
    	padding: .24rem .3rem;
	}
	.det-bun img{
	    width: 2.6rem;
    	height: .64rem;
	}
	.bundle-count{
		position: absolute;
		top: 0px;
		left: 0px;
		display: inline-block;
	    text-align: center;
	    line-height: .64rem;
	    font-size: .28rem;
        width: .7rem;
	}
	.bundle-price{
		position: absolute;
		top: 0px;
		right: 0px;
		display: inline-block;
	    text-align: center;
	    line-height: .64rem;
	    font-size: .28rem;
	    box-sizing: border-box;
	    padding: 0 .05rem;
	    overflow: hidden;
	}
	.col{
		color: #fff;
	}
	.intro{
		position: relative;
	    background: #fafafa;
	    padding: 0 .3rem;
	    display: flex;
	    height: .88rem;
	    align-items: center;
	    border-bottom: .12rem solid #f5f5f5;
	}
	.intro-icon{
		position: relative;
	    line-height: 0;
	    overflow: hidden;
	}
	.intro1{
		float: left;
	    padding-left: .3rem;
	    margin-right: .2rem;
	    font-size: .24rem;
	    line-height: 1.4;
	    background: url('../../data/images/shopbag/red-icon.png') no-repeat 0 center;
	    background-size: .24rem .24rem;
	}
	.intro-next{
		position: absolute;
	    top: 50%;
	    right: .3rem;
	    width: .15rem;
	    height: .27rem;
	    transform: translate(0,-50%);
	    background: url('../../data/images/shopbag/next.png') no-repeat;
	    background-size: contain;
	}
	.det-bottom{
		position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .98rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    background: #fff;
	    box-sizing: border-box;
	    border-top: 1px solid #fff;
	    z-index: 2;
	}
	.det-coll{
    	position: relative;
	    width: 1.4rem;
	    height: 100%;
	}
	.det-btn1,.cart1{
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    overflow: hidden;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	    white-space: nowrap;
	    text-align: center;
	    font-size: .2rem;
	    color: #191919;
	}
	.coll-icon{
		position: relative;
	    width: 100%;
	    height: .4rem;
	}
	.collimg{
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    width: .4rem;
	    height: .34rem;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	}
	.det-btn1 p,.cart p{
		margin: 0px;
	}
	.cart{
		position: relative;
	    width: 1.65rem;
	    height: 100%;
	}
	.cartimg {
	    position: relative;
	    width: .36rem;
	    height: .4rem;
	}	
	#addCart{
	    line-height: .78rem;
	    color: #fff;
	    width: 4.3rem;
	    background: #191919;
	    text-align: center;
	    font-size: .3rem;
	    height: .78rem;
	    margin: auto;
	    margin-right: .1rem;
	    border-radius: .04rem;
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    margin-top: 0.1rem;
	}
	.activity{
		border-bottom: .12rem solid #f5f5f5;
	}
	.acti-box{
		height: 1.5rem;
		position: relative;
	    border-bottom: 1px solid #e6e6e6;
	    padding: 0px;
	    margin-left: .3rem;
	    display: flex;
	}
	.acti-box:before {
	    position: absolute;
	    content: '';
	    left: -.3rem;
	    top: 0;
	    width: 150%;
	    height: 1px;
	    line-height: 0;
	    background-color: #e6e6e6;
	}
	.acti1{
	    display: inline-block;
	    width: .8rem;
	    padding-top: 0.2rem;
	    margin-right: .2rem;
	    font-size: .28rem;
	    font-weight: 700;
	}
	.acc{
		margin-left: -0.88rem;
	}
	.acti2{
	    position: relative;
	    width: 100%;
	    margin-right: .25rem;
	}
	.acti2>ul{
    	width: 100%;
	}
	.acti2 li{
		position: relative;
   		padding-bottom: .25rem;
	}
	.acti-a1{
		position: relative;
	    float: left;
	    margin-right: .15rem;
	}
	.acti-a1-name{
	    position: relative;
	    font-size: .24rem;
	    color: #ee1414;
	    border: 1px solid #ee1414;
	    border-radius: .08rem;
	    padding: .02rem .05rem;
	    white-space: nowrap;
	    margin-top: -.02rem;
	    overflow: hidden;
	}
	.acti-a2{
		position: relative;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .28rem;
	    margin-right: .9rem;
	}
	.mint-actionsheet{
		background:#fff;
	}
	
	
	.zui1{
		height: 5rem;
	}
</style>