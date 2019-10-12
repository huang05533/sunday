<template>
      <div class="index-box">
	   		 <nav class="nav">
		   		 		<div class="navs">
		   		 			<span @click="toggle(home);" class="nav1"></span>
				            　<span @click="toggle(brand);" class="nav2"></span>
				            　<span @click="toggle(cart);" class="nav3"></span>
				        <span @click="toggle(my);" class="nav4"></span>
		   		 		</div>	    　　　　　
		    　　</nav>
	     <component :is="msg"></component> 
					
    </div>
</template>

<script>
	import home from '../component/home';
	import brand from '../component/brand';
	import cart from '../component/cart';
	import my from '../component/my';
  export default {   
     data () {
         return {
            home: "home", 
            brand: "brand", 
            cart:"cart",
            my:"my",
            msg: 'home'
            //默认选中home子组件
         };
     },
    components:{
       home,
	     brand,
	     cart,
	     my
    },
     methods: {
         toggle (n) {
             this.msg = n;
         }
     }   
  }
</script>


<style>
	html,body{
		margin:0;
		padding:0;
		overflow-y:auto;
		overflow-x: hidden;
	}
	html,body{
		font-size: 0.24rem;
		 -webkit-text-size-adjust: auto;
	}
	a:-webkit-any-link {
	    color: black;
	    text-decoration: none;
	}
  .router-link-exact-active{
      color:red;
      text-decoration: none;
  }
		.index-box{
			margin-top: -60px;
			width: 100%;
			overflow: hidden;
		}
		.nav,.navs{
				width: 100%;
				height: 1rem;
				position:fixed;
		    bottom: 0px;
		    left:0px;   
		    z-index: 5;
		    background: white;
		}
		.navs{
			 position: relative;
		}
		.nav1,.nav2,.nav3,.nav4{	
			 display: block;
			 width: 1.18rem;
			 height: 1.18rem;
			 background: url('../../data/images/index/btm1.png');
			 background-size: 100% 100%;
			 position: absolute;
			 top:-0.2rem;
		}
		.nav1{
			 left:0.2rem;
		}
		.nav2{
			background: url('../../data/images/index/btm2.png');
			background-size: 100% 100%;
			left:29%;
		}
		.nav3{
			background: url('../../data/images/index/btm3.png');
			background-size: 100% 100%;
			left:56%;
		}
		.nav4{
			background: url('../../data/images/index/btm4.png');
			background-size: 100% 100%;
			right:0.2rem;
		}
		
</style>