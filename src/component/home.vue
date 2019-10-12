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
        	<div class="crazy-time">       		
				 <swiper :options="swiperOptionSwp4">
			        <swiper-slide>
			        	<div class="time-box tim-active">
			        		<div class="tim1 tim11">08:00</div>
			        		<div class="tim-text tim-text-active">
								<i style="color:#f44903" class="active-i">抢购中</i>
							</div>
			        	</div>
			        </swiper-slide>			        	
			        <swiper-slide>
						<div class="time-box" >
			        		<div class="tim1">08:00</div>
			        		<div class="tim-text">
								<i style="color:#f44903">抢购中</i>
							</div>
			        	</div>
			        </swiper-slide>
			        <swiper-slide>
			        	<div class="time-box">
			        		<div class="tim1">09:00</div>
			        		<div class="tim-text">
								<i style="color:#f44903">即将开始</i>
							</div>
			        	</div>
			        </swiper-slide>
			        <swiper-slide>
			        	<div class="time-box">
			        		<div class="tim1">10:00</div>
			        		<div class="tim-text">
								<i style="color:#f44903">即将开始</i>
							</div>
			        	</div>
			        </swiper-slide>
			        <swiper-slide>
			        	<div class="time-box">
			        		<div class="tim1">11:00</div>
			        		<div class="tim-text">
								<i style="color:#f44903">即将开始</i>
							</div>
			        	</div>
			        </swiper-slide>
			        <swiper-slide>
			        	<div class="time-box">
			        		<div class="tim1">12:00</div>
			        		<div class="tim-text">
								<i style="color:#f44903">即将开始</i>
							</div>
			        	</div>
			        </swiper-slide>
			        <swiper-slide>
			        	<div class="time-box">
			        		<div class="tim1">13:00</div>
			        		<div class="tim-text">
								<i style="color:#f44903">即将开始</i>
							</div>
			        	</div>
			        </swiper-slide>
			    </swiper>
        	</div>
        	
        	<div class="crazy-items">
        		<!--<ul class="crazy-items-ul">
    				<li v-for="(v,i) in list" class="crazy-li">
    					<div class="items1">
    						<img :src="v.images" >
    					</div>						
						<h3>{{v.title}}</h3>
						<p>{{v.des}}</p>
					</li>       			
        		</ul>-->
				 <swiper :options="swiperOptionSwp3">
			        <!--<swiper-slide v-for="(v,i) in list3" :key="i">
			        	<div><img :src="v.images" ></div>
			        	<div class="crazy-price">
							{{v.des1}}&nbsp;<del>{{v.des2}}</del>
						</div>
						<div class="cra-tit">{{v.title}}</div>
						<div class="cra-btns">
							<span class="cra-btnss">{{v.status}}</span>
						</div>
						<p></p>
			        </swiper-slide>-->
			        
			        
			        
			        
			        <swiper-slide>
			        	<img src="../../data/images/index/lit2.png" alt="" />
			        	<div class="crazy-price">
							¥177&nbsp;<del>¥411</del>
						</div>
						<div class="cra-tit">为双唇添加魅惑之红</div>
						<div class="cra-btns">
							<span class="cra-btnss">已抢光</span>
						</div>
						<p></p>
			        </swiper-slide>
			        <swiper-slide>
			        	<img src="../../data/images/index/lit3.png" alt="" />
			        	<div class="crazy-price">
							¥159&nbsp;<del>¥168</del>
						</div>
						<div class="cra-tit">七效合一有效护肌</div>
						<div class="cra-btns">
							<span class="cra-btnss">已抢光</span>
						</div>
						<p></p>
			        </swiper-slide>
			        <swiper-slide>
			        	<img src="../../data/images/index/lit4.png" alt="" />
			        	<div class="crazy-price">
							¥103&nbsp;<del>¥239</del>
						</div>
						<div class="cra-tit">宛若天生好气色</div>
						<div class="cra-btns">
							<span class="cra-btnss">已抢光</span>
						</div>
						<p></p>
			        </swiper-slide>
			        <swiper-slide>
			        	<img src="../../data/images/index/lit1.png" alt="" />
			        	<div class="crazy-price">
							¥63&nbsp;<del>¥89</del>
						</div>
						<div class="cra-tit">赋予双唇明艳光泽妆感</div>
						<div class="cra-btns">
							<span class="cra-btnss">已抢光</span>
						</div>
						<p></p>
			        </swiper-slide>
			        <swiper-slide>
			        	<img src="../../data/images/index/lit2.png" alt="" />
			        	<div class="crazy-price">
							¥183&nbsp;<del>¥211</del>
						</div>
						<div class="cra-tit">七效合一有效护肌</div>
						<div class="cra-btns">
							<span class="cra-btnss">已抢光</span>
						</div>
						<p></p>
			        </swiper-slide>
			        <swiper-slide>
			        	<img src="../../data/images/index/lit2.png" alt="" />
			        	<div class="crazy-price">
							¥177&nbsp;<del>¥411</del>
						</div>
						<div class="cra-tit">为双唇添加魅惑之红</div>
						<div class="cra-btns">
							<span class="cra-btnss">已抢光</span>
						</div>
						<p></p>
			        </swiper-slide>
			        <swiper-slide>
			        	<img src="../../data/images/index/lit3.png" alt="" />
			        	<div class="crazy-price">
							¥159&nbsp;<del>¥168</del>
						</div>
						<div class="cra-tit">七效合一有效护肌</div>
						<div class="cra-btns">
							<span class="cra-btnss">已抢光</span>
						</div>
						<p></p>
			        </swiper-slide>
			        <swiper-slide>
			        	<img src="../../data/images/index/lit4.png" alt="" />
			        	<div class="crazy-price">
							¥93&nbsp;<del>¥209</del>
						</div>
						<div class="cra-tit">富士80年黑科技</div>
						<div class="cra-btns">
							<span class="cra-btnss">已抢光</span>
						</div>
						<p></p>
			        </swiper-slide>
			        
			      </swiper>
        	</div>
        </div>
          
        
         
        
        
        
        
        
        
        
        
        
        <div class="zui"></div>
        
 		
	</div>
</template>

<script>
import beauty from '../component/beauty';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	data () {
         return {
         	list:'',
         	list3:'',
            beauty: "beauty", 
            sp: 'beauty',
            
            swiperOptionSwp3: {
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
		       	 slidesPerView: 3,
          		 spaceBetween: 8,
		    },
		    swiperOptionSwp4:{
		    	slidesPerView: 4,
		    	spaceBetween: 10
		    }
         };
     },
    components:{
       beauty,
       swiper,
       swiperSlide
    },
	 mounted(){
			this.$http.get('./data/my.json')
			.then((response)=>{
			this.list=response.data.pros,
			this.list3=response.data.pros3
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {		
			})
			
			
//			window.addEventListener("scroll", this.handleScroll);
//			function handleScroll(){
//		      	var h =document.documentElement.scrollTop ;
//			      if(h>30){
//			        document.documentElementsByClassName('search-box').setAttribute('.fixed-top')
//			      }else{
//			        document.documentElementsByClassName('search-box').remove('.fixed-top')
//			      }
//		    }
//			handleScroll();
       },
	methods:{
		toggle (n) {
	         this.sp = n;
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
	.crazy-box{
		border:1px solid red;		
	    min-height: 4.54rem;
	    position: relative;
	    width: 6.9rem;
	    box-sizing: border-box;
	    margin: 0px auto;
	    border-radius: 8px;
	}
	.crazy-time{
		position: relative;
	    height: .88rem;
	    margin:0px;
	    margin-bottom: 5px;
	    border: 1px solid #f44903;
	}
	.crazy-items{
		position: relative;
	    height: 3.75rem;
	    overflow: hidden;
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
	.tim-active{
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
	.tim11{
	    color: #fff;
	    font-size: .32rem;
	    line-height: .4rem;
	    text-align: center;
	    width: 100%;
	}
	.tim-text-active{
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
	
	
	.zui{
		height: 1rem;
	}
</style>