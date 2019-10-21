<template>
	<div class="home-box">
		
		<div class="top">
			<img src="../../data/images/index/load.png" alt="" class="loadimg">
				<p class="t-tex1">豌豆公主  注册送1088元大礼包</p> 
				<p class="t-tex2">日本优品一站购  正品直邮</p>
			<div class="t-open">立即打开</div>
		</div>
		
		<div class="search-box">
			<div class="search-b">
				<router-link to="/search">					
					<img src="../../data/images/index/se-icon.png" alt="" class="se-icon"> 
					<span id="se-title">输入商品或品牌名称</span>
				</router-link>				
			</div>
			<div class="se-hi">
				<i class="em"></i>
				<i class="em"></i>
				<i class="em"></i>
			</div>
		</div>
		
		<mt-swipe :auto="4000" class="zsh">
            <mt-swipe-item><img src="../../data/images/index/banner3.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../data/images/index/banner2.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../data/images/index/banner3.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../data/images/index/banner4.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../data/images/index/banner5.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../data/images/index/banner4.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../data/images/index/banner2.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../data/images/index/banner3.png"></mt-swipe-item>
        </mt-swipe>
        
        
       
       <div class="center-nav">
	    	<router-link to="/beauty">
	    		<img src="../../data/images/index/ban1.png" alt="" class="cen-img"/>
	    	</router-link>
	    	<router-link to="/food">
	    		<img src="../../data/images/index/ban2.png" alt="" class="cen-img"/>
	    	</router-link>
	    	<router-link to="/beauty">
	    		<img src="../../data/images/index/ban3.png" alt="" class="cen-img"/>
	    	</router-link>
	    	<router-link to="/beauty">
	    		<img src="../../data/images/index/ban4.png" alt="" class="cen-img"/>
	    	</router-link>
	    	<router-link to="/details">
	    		<img src="../../data/images/index/ban5.png" alt="" class="cen-img"/>
	    	</router-link>  
    	</div>
    	
        <div class="sli" >
        	<img src="../../data/images/index/back1.png" alt="" />       	
        </div>
        
        <div class="sli2">
    		<img src="../../data/images/index/backk1.png" alt="" />
    		<img src="../../data/images/index/back2.png" alt="" />
        </div>
        
        <div class="sli3">
    		<img src="../../data/images/index/backk2.png" alt="" />
    		<img src="../../data/images/index/backk3.png" alt="" />
        </div>
        
        <div class="sli4" >
        	<img src="../../data/images/index/backk4.png" alt="" />       	
        </div>
        
        
        <div class="sli5">限时秒杀</div>
        <div class="crazy-box">
        	<div class="crazy-first">
        		<div class="crazy-time" > 
		        	<div class="time-box" v-for="(v,i) in con5" :class="{timecolor:i==colornum}" @click="change(i)">
		        		<div class="tim1" :class="{color2:i==colornum}" @click="change(i)">{{v.time}}</div>
		        		<div class="tim-text">
							<i style="color:#f44903" class="active-i">{{v.status}}</i>
						</div>
		        	</div>
	        	</div>
        	</div>
        	     	
        	<div class="cra-bot">
        		<div class="crazy-items">   
			        <div class="crazy-li" v-for="(v,i) in pros3">
			        	<router-link to="/details">
			        		<img :src="v.images" alt="" />
	    				</router-link>			        	
			        	<div class="crazy-price">
							{{v.des1}}&nbsp;<del>{{v.des2}}</del>
						</div>
						<div class="cra-tit">{{v.title}}</div>
						<div class="cra-btns">
							<span class="cra-btnss">{{v.status}}</span>
						</div>
						<p></p>
			        </div>
	        	</div>
        	</div>	
        </div>

		<div class="sli5">权威榜单</div>
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
		
		<div class="sli5">猜你喜欢</div>
		<ul class="new-ul">			
			<li v-for="(v,i) in con9" class="new-li">
				<div class="new-timg">
					<i class="ting-r"></i>
					<router-link to="/details">
						<img :src="v.images" class="ting-photo">
					</router-link>
					<i class="ting-l"></i>
				</div>				
				<h3 class="new-ti">{{v.title}}</h3>					
				<p class="new-ti2">{{v.des}}</p>
				<p class="ne-pri">8.5折</p>
				
				<div class="addjo" @click="t()">
					<p class="addj">99%好评</p>
					<i class="addbag"></i>
				</div>	
			</li>
		</ul>
		
		
		
        <div class="zui"></div>
        
 		
	</div>
</template>

<script>
import beauty from '../component/beauty';
export default {
	data () {
         return {
         	list1:'',
         	pros3:'',
         	con5:'',
            beauty: "beauty", 
            sp: 'beauty', 
            colornum:0,
            con9:''
         };
     },
    components:{
       beauty
    },
	 mounted(){
			this.$http.get('./data/my.json')
			.then((response)=>{
			this.list1=response.data.con8,
			this.pros3=response.data.pros3,
			this.con5=response.data.con5,
			this.con9=response.data.con9
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {		
			})
       },
	methods:{
		toggle (n) {
	         this.sp = n;
	   },
	   change(i){
	   		this.colornum=i
	   }
	    
	}
}
</script>

<style>
	.one{
		background: pink;
	}
	.home-box{
	}
   	.zsh{
		height: 4.2rem;
	}
  	.zsh img{
     	width:92%;
   	 	border-radius: 0.2rem;
  	}
  	.zsh .mint-swipe-items-wrap{
	    padding-bottom:51.99%;
	    height:0px;
  	}
  	.zsh .mint-swipe-indicators{
  		bottom:0.1rem;
  	}
  	.zsh .mint-swipe-indicator{
	  	border-radius: 0px;
		height: 2px;
		width: 6px;
  	}
  	.mint-swipe-indicator.is-active{
	  	background-color: black;
	  	opacity: 1;
	  	width: 10px;
  	}
  	.top{
		height: 0.8rem;
		position: relative;
		padding-top:0.1rem;
		background: #F5F5F5;
	}
	.loadimg{
		 width: 0.7rem;
		 height: 0.7rem;
		 position: absolute;
		 left:0.2rem;
	}
	.t-tex1,.t-tex2{
		margin:0px;
		position: absolute;
		left:1rem;
		color:#191919;
		font-size:.26rem;
	}
	.t-tex2{
		top:0.5rem;
		color:#6E6E6E;
		font-size:.24rem;
	}
	.t-open{
		width: 1.28rem;
		position: absolute;
	    font-size: .24rem;
	    color: #fff;
	    height: .5rem;
	    line-height: .5rem;
	    text-align: center;
	    right: .2rem;
	    top: 50%;
	    margin-top: -.25rem;
	    border-radius: 1rem;
	    background: #191919;
	}

</style>
<style scoped>	
	a:-webkit-any-link {
	    text-decoration: none;
	}
	.search-box{
		position: relative;
	    height: .88rem;
	    background: rgba(250,250,250,.9);	
	    display: flex;
	    box-sizing: border-box;
	    padding: .17rem .27rem;
	    -webkit-backdrop-filter: saturate(180%) blur(6px);
	}
	.fixed-top{
		width: 100%;
		position: fixed;
		top:0px;
		z-index: 5;
	}
	.search-b{
		position: relative;
	    background: #e6e6e6;
	    height: .54rem;
	    line-height: .54rem;
	    text-align: left;
	    color: #9e9e9e;
	    font-size: .26rem;
	    border-radius: 1rem;
	    box-sizing: border-box;
	    width: 90%;
	    padding-left: .22rem;
	    cursor: pointer;
	}
	.se-icon{
	   width: .27rem;
	   height: .26rem;
	   text-decoration: none;
	}
	#se-title{
		color: #9e9e9e;
		text-decoration: none;
	}
	.se-hi{
		padding-top: 0.1rem;
	    margin-left: .33rem;
	    width: .38rem;
    	height: .4rem;
	}
	.em{
		display: block;
		margin-bottom: 0.08rem;
	    background: #191919;
	    width: 100%;
	    height: .04rem;
	}
	.center-nav{
		width: 100%;
		height: 1.63rem;
	}
	.cen-img{
		width: 1.4rem;
		height: 1.6rem;
	}
	.cen1{
		margin-left: -0.1rem;
	}
	.sli,.sli img{
		width: 7.455rem;
		height: 0.718rem;
	}
	.sli2{
		height: 1.807rem;
	}
	.sli2 img{
		width: 3.688rem;
		height: 1.78rem;
	}
	.sli3{
		height: 2.388rem;
		margin-top: -2px;
	}
	.sli3 img{
		height: 2.35rem;
	}
	.sli4{
		height: 1.708rem;
	}
	.sli4 img{
		height: 1.708rem;
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
	.crazy-first{
		width: 6.9rem;
		height: 1.2rem;
		overflow-x: scroll;
		background-color: white;
		border-bottom: 1px solid #f44903;
	}
	.crazy-box{
		border:2px solid red;		
	    min-height: 4.54rem;
	    position: relative;
	    width: 6.9rem;
	    box-sizing: border-box;
	    margin: 0px auto;
	    border-radius: 8px;
	    overflow: hidden;
	}
	.crazy-time{
		position: relative;
	    height: 0.88rem;
	    margin:0px;
	    width: 10rem;
	    margin-bottom: 5px;
	    display: flex;
	    border-bottom: 1px solid #f44903;
	}
	.cra-bot{
		overflow: scroll;
		margin-top: -0.2rem;
	}
	.crazy-items{
		position: relative;
	    height: 3.7rem;
	    width: 13.2rem;
	    background-color: white;
	    overflow: hidden;
	    display: flex;
	}
	.crazy-items-ul{
		margin-top:0.1rem;
		height: 3.5rem;
		width: 600px;
		border: 1px solid red;
	}
	.crazy-li{
		float:left;
		border: 1px solid red;
		position: relative;
	    width: 2.12rem;
	    height: 3.5rem;
	    box-sizing: border-box;
	    border-radius: .12rem;
	    border: 1px solid #ccc;
	    font-size: .24rem;
	    margin-right: .1rem;
	}
	.items1{
	    height: 1.8rem;
	}
	.items1 img{
		height: 1.8rem;
		border: 1px solid blue;
	}
	.crazy-items img{
		width: 2rem;
		height: 2rem;
	}
	.swiper-wrapper .swiper-slide-active{
		margin-right: 10px;
	}
	.swiper-container-autoheight .swiper-slide{
		width: 110px;
		border: 1px solid #CACACA;
		border-radius: 0.12rem;
	}
	.crazy-price{
		position: relative;
	    color: #EA4141;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.crazy-price>del{
	    color: #6E6E6E;
    	text-decoration: line-through;
	}
	.cra-tit{
		position: relative;
	    white-space: nowrap;
	    text-align: center;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    color: #6E6E6E;
	    padding: 0 .05rem;
	}
	.cra-btns{
	    position: relative;
    	margin-top: .16rem;
	}
	.cra-btnss{
	    position: relative;
	    display: inline-block;
	    width: 1.6rem;
	    height: .44rem;
	    line-height: .44rem;
	    font-size: .24rem;
	    border-radius: .04rem;
	    color: #fff;
	    background: #cecece;
	}
	.time-box{
        position: relative;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    width: 1.72rem;
	    height: .88rem;
	    border-top-left-radius: .08rem;
	    border-top-right-radius: .08rem;
	    overflow: hidden;
	}	
	.timecolor{
		background-color: red;
	}
	.tim1{
		font-size: .24rem;
	    text-align: center;
	    color: #191919;
	    line-height: .3rem;
	    border-right: 1px solid #ccc;
	}
	.tim-text{
	    text-align: center;
	    font-size: .2rem;
	    color: #191919;
	    line-height: .3rem;
	    border-right: 1px solid #ccc;
	}
	.tim-text>i{
	    display: inline-block;
	    padding: 0 .2rem;
	    font-style: normal;
	    white-space: nowrap;
	}
	.color2{
		color: #fff;
	    font-size: .32rem;
	    line-height: .4rem;
	    text-align: center;
	    width: 100%;
	}
	.time-box:nth-child(1) .tim-text{
		text-align: center;
	    font-size: .2rem;
	    color: #191919;
	    line-height: .3rem;
	}
	.active-i{
	    background-color: #fff;
	    font-size: .2rem;
	    border-radius: .15rem;
	    line-height: .3rem;
	    height: .3rem;
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
		width: 3.4rem;
		height: 6rem;
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
		height: 3rem;
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
	    bottom: 3rem;
	    width: .8rem;
	    height: .8rem;
	    line-height: .8rem;
	    text-align: center;
	    background: url('../../data/images/index/beauty/le.png');
		background-size: 100% 100%;
	}
	.ting-photo{
		margin-top: 0rem;
		width: 3.2rem;
		text-align: center;
	    height: 3.2rem;
	}
	.new-ti{
	    margin: .1rem 0;
	    width: 93%;
	    height: 1.3rem;
	    line-height: .38rem;
	    font-size: .26rem;
	    overflow: hidden;
	    text-align: left;  
	    padding: 0.4rem 0.2rem 0;
	    align-items: center;
	    color: #696969;
	}
	.new-ti2{
		margin:0px;
		text-align: left;
	    font-size: .3rem;
	    color: #ee1414;
	    line-height: .38rem;
	    height: 0.5rem;
		padding-left: 0.2rem;
	}	
	.ne-pri{
		position: absolute;
		bottom:0.45rem;
		left:0.8rem;
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
	.zui{
		height: 1rem;
	}
</style>