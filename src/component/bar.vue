<template>
	<div>
		<div class="zui"></div>
		<div class="barr-top">
			<div class="hotb-title">一階 · 个护化妆</div>
		</div>
		
		<ul class="br2-center">
			<li class="br2-icon-box" v-for="(v,i) in con4">
				<div class="iccimg">
					<img :src="v.images" alt="" />
				</div>
				<div class="icc-te">{{v.des}}</div>
			</li>
		</ul>
		
		<div class="barr-top">
			<div class="hotb-title">二階 · 营养保健</div>
		</div>
		<ul class="br2-center">
			<br />
			<br />
			<br />
			<li class="br2-icon-box" v-for="(v,i) in con4">
				<div class="iccimg">
					<img :src="v.images" alt="" />
				</div>
				<div class="icc-te">{{v.des}}</div>
			</li>
		</ul>
		
		<div class="barr-top">
			<div class="hotb-title">三階 · 日式美食</div>
		</div>
		
		<ul class="br2-center">
			<br />
			<br />
			<br />
			<li class="br2-icon-box" v-for="(v,i) in con4">
				<div class="iccimg">
					<img :src="v.images" alt="" />
				</div>
				<div class="icc-te">{{v.des}}</div>
			</li>
		</ul>
		
		
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				con4:'',
			}
		},
		mounted(){
	     	this.$http.get('./data/my.json')
			.then((response)=>{
			this.con4=response.data.con4;
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
	.barr-top{
		margin: .4rem 0 .2rem .3rem;
	}
	.hotb-title{
	    height: .56rem;
	    line-height: .56rem;
	    text-align: left;
	    font-size: .4rem;
	    color: #191919;
	}
	.br2-center{
		float: left;
		padding-bottom: 0.2rem;
		background: white;
	}
	.br2-icon-box{
		margin-right: 0.05rem;
		height: 2.3rem;
		width: 1.5rem;
	}
	.iccimg{
		width: 1.5rem;
    	height: 1.5rem;
        border: 1px solid #e6e6e6;
    	border-radius: .1rem;
	}
	.iccimg img{
		width: 100%;
		height: 100%;
	}
	.icc-te{
		width: 1.5rem;
		line-height: 0.7rem;
	}
</style>