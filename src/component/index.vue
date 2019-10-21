<template>
      <div class="index-box">
	   		 <nav class="nav">
		   		 		<div class="navs">				     
									<div @click="toggle(home);" class="nav1">
											<img src="../../data/images/index/btm1.png"  v-if="selected"  @click="loveicon()">
										  <img src="../../data/images/index/btm5.png"  v-else="!selected"  @click="loveicon()">	
									</div>
									<div @click="toggle(brand);" class="nav2">
										<img src="../../data/images/index/btm2.png" v-if="selected1"  @click="loveicon1()">
										<img src="../../data/images/index/btm6.png"  v-else="!selected1"  @click="loveicon1()">										
									</div>
									<div @click="toggle(cart);" class="nav3">
											<img src="../../data/images/index/btm3.png"  v-if="selected2"  @click="loveicon2()">
										  <img src="../../data/images/index/btm7.png"  v-else="!selected2"  @click="loveicon2()">	
									</div>
									<div @click="toggle(my);" class="nav4">
										<img src="../../data/images/index/btm4.png"  v-if="selected3"  @click="loveicon3()">
										<img src="../../data/images/index/btm8.png"  v-else="!selected3"  @click="loveicon3()">	
									</div>
				      
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
            msg: 'home',
            selected: 1,
            selected1: 1,
            selected2: 1,
            selected3: 1
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
         },
         loveicon() {
						this.selected = 1;
						this.selected1 = 1;
						this.selected2 = 1;
						this.selected3 = 1;
				},
				loveicon1() {
						this.selected1 = 0;
						this.selected = 0;
						this.selected2 = 1;
						this.selected3 = 1;
				},
				loveicon2() {
						this.selected2 = 0;
						this.selected = 0;
						this.selected1 = 1;
						this.selected3 = 1;
				},
				loveicon3() {
						this.selected3 = 0;
						this.selected= 0;
						this.selected1 = 1;
						this.selected2 = 1;
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
			 display: flex;
		}
		.navs img{
			width: 1.18rem;
			height: 1.18rem;
		}
		.nav1,.nav2,.nav3,.nav4{	
			 display: block;
			 width: 1.18rem;
			 height: 1.18rem;
			 position: absolute;
			 top:-0.2rem;
		}
		.nav1{
			 left:0.2rem;
		}
		.nav2{
			left:29%;
		}
		.nav3{
			left:56%;
		}
		.nav4{
			right:0.2rem;
		}
		
</style>