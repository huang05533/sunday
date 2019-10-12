<template>
	 <div>
	 	<div class="br-top">
			<span @click="toggle(fen);" :class="{bom:msg==fen}">分类</span>
	            　<span @click="toggle(qi);" :class="{bom:msg==qi}">旗舰店</span>
	            　<span @click="toggle(bar);" :class="{bom:msg==bar}">品牌馆</span>
	 	</div>
	 	
	 		 <component :is="msg"></component> 
	 </div>
</template>

<script>
	import fen from '../component/fen';
	import qi from '../component/qi';
	import bar from '../component/bar';
	export default{
		  data () {
		    return {
				a1:0,
	  			con1:'',
	  			con:'',
	  			fen: "fen", 
	            qi: "qi", 
	            bar:"bar",
	            msg: 'fen'
		     } 
		  },
		components:{
	       	fen,
		     qi,
		     bar
	    },
		methods:{
			 toggle(n) {
	             this.msg = n;
	         }
		}
	}
</script>

<style>
</style>

<style scoped>
	.br-top{
		position: fixed;
	    width: 100%;
	    left: 0;
	    top: 0;
	    height: .88rem;
	    background-color: #fff;
	    border-bottom: 1px solid rgba(220,220,220,.5);
	    box-sizing: border-box;
	    padding-top: .1rem;
	    z-index: 20;
	    box-shadow: 0 0 0 0 #e6e6e6;
	    overflow: hidden;
	}
	.br-top span{
		line-height: 0.75rem;
		margin:0px 0.2rem;
		padding:0.2rem 0px;
		font-size: 0.28rem;
	}
	span.bom{
		border-bottom:2px solid red;
	}
</style>