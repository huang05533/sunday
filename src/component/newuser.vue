<template>
	<div>
		<div class="index-box">
	   		 <nav class="nav">
   		 		<div class="navs">
   		 			<span @click="back()" class="nav1"></span>
		            　 　　<span @click="back1();" class="nav2"></span>
		            　　　 <span @click="back2();" class="nav3"></span>
		        	<span @click="back3();" class="nav4"></span>
   		 		</div>	    　　　　　
    　　　　	</nav> 			
   		 </div>
		
	</div>
</template>

<script>
	export default {   
     methods: {  
		back(){
			this.$router.replace('/home')
		},
		back1(){
			this.$router.replace('/brand')
		},
		back2(){
			this.$router.replace('/list')
		},
		back3(){
			this.$router.replace('/my')
		}

     }   
  }
</script>

<style>
</style>