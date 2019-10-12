<template>
	<div>
		<div class="zui"></div>
		<div class="qi-top">
			<img src="../../data/images/index/beauty/qi-ban.png" alt="" />
		</div>
		
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
		
		
	</div>
</template>

<script>
	export default {
		data(){
	  		return{
	  			list2:''
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
</style>

<style scoped>
	.zui{
		height: 0.88rem;
	}
	.qi-top{
		height: 3.22rem;
		width: 100%;
	}
	.qi-top img{
		width: 100%;
		height: 100%;
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