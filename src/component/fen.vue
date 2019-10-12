<template>
	<div>
		<div class="zui"></div>
		
		<!--左边导航栏-->
		<div class="br-left">
			<div @click="toggle(br1);" :class="{gu:msg==br1}">
				<div class="floor"><span>M</span>階</div>
				<div class="br-w">豌豆甄选</div>
				<div class="br-sel">你的最佳选择</div>
			</div>
	            　<div @click="toggle(br2);" :class="{gu:msg==br2}">
	            <div class="floor"><span>1</span>階</div>
				<div class="br-w">护肤美妆</div>
				<div class="br-sel">美容コスメ</div>
	        </div>
	        <div @click="toggle(br3);" :class="{gu:msg==br3}">
	        	<div class="floor"><span>2</span>階</div>
				<div class="br-w">个人洗护</div>
				<div class="br-sel">パーソナルケア</div>
	        </div>
	            　<div @click="toggle(br4);" :class="{gu:msg==br4}">
	            <div class="floor"><span>3</span>階</div>
				<div class="br-w">中古奢品</div>
				<div class="br-sel">ビンテージ</div>
	        </div>
	        <div @click="toggle(br5);" :class="{gu:msg==br5}">
	            <div class="floor"><span>4</span>階</div>
				<div class="br-w">护肤美妆</div>
				<div class="br-sel">美容コスメ</div>
	        </div>
	        <div @click="toggle(br6);" :class="{gu:msg==br6}">
	        	<div class="floor"><span>5</span>階</div>
				<div class="br-w">个人洗护</div>
				<div class="br-sel">パーソナルケア</div>
	        </div>
	            　<div @click="toggle(br7);" :class="{gu:msg==br7}">
	            <div class="floor"><span>6</span>階</div>
				<div class="br-w">中古奢品</div>
				<div class="br-sel">ビンテージ</div>
	        </div>
	            　
		</div>
		
            <!--<ul>
            	<li v-for="(v,i) in navs" @click="toggle({{v.br1}});">{{v.title}}</li>
            </ul>-->
	            
	            
	     <component :is="msg"></component>    
	</div>
</template>

<script>
	import br1 from '../component/br1';
	import br2 from '../component/br2';
	import br3 from '../component/br3';
	import br4 from '../component/br4';
	import br5 from '../component/br5';
	import br6 from '../component/br6';
	import br7 from '../component/br7';
	export default{
		data () {
		    return {
				a1:0,
	  			con1:'',
	  			con:'',
	  			br1:"br1",
	  			br2:"br2",
	  			br3:"br3",
	  			br4:"br4",
	  			br5:"br5",
	  			br6:"br6",
	  			br7:"br7",
	  			msg: 'br1'
	  			
		     } 
		  },
		components:{
	       	br1,
		     br2,
		     br3,
		     br4,
		     br5,
		     br6,
		     br7
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
	.zui{
		height: 0.88rem;
	}
	.gu{
		width: 2rem;
		border-left: 2px solid red;
	}
	.br-left{
		position: absolute;
		left:0px;
		top:0.88rem;
		width: 2rem;
		height: 15rem;
		background: #fff;
	}
	.br-left>div{
		padding-left: 0.25rem;
		width: 1.75rem;
		text-align: left;
		height: 1.9rem;
	}
	.floor{
		margin-top: 0.2rem;
		color: rgba(234,65,65,.5);
	    font-size: .3rem;
	    line-height: 1.1;
	    opacity: .8;
	}
	.floor span{
		font-size: 0.6rem;
	}
	.br-w{
		color: black;
	    font-weight: 700;
	    font-size: 0.3rem;
	}
	.br-sel{
		font-size: .2rem;
    	color: #9e9e9e;
	}
</style>