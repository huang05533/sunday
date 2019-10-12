<template>
	<div>
		<div class="br-right">
			<div class="br2-banner">
				<img src="../../data/images/index/br2-ban.gif" alt="" />
			</div>
			<div class="cat-name">基础护肤</div>
			
			<ul class="br2-center">
				<li class="br2-icon-box" v-for="(v,i) in con3">
					<div class="iccimg">
						<img :src="v.images" alt="" />
					</div>
					<div class="icc-te">{{v.des}}</div>
				</li>
			</ul>
			
			<div class="cat-name">个性美妆</div>
			
			<ul class="br2-center">
				<li class="br2-icon-box" v-for="(v,i) in con3">
					<div class="iccimg">
						<img :src="v.images" alt="" />
					</div>
					<div class="icc-te">{{v.des}}</div>
				</li>
			</ul>
			
			
			
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				con3:'',
			}
		},
		mounted(){
	     	this.$http.get('./data/my.json')
			.then((response)=>{
			this.con3=response.data.con3;
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
	.br2-banner{
	    padding-top: .3rem;
	}
	.br2-banner img{
		width: 100%;
		height: 100%;
	}
	.cat-name{
		line-height: .8rem;
	    background-color: #fafafa;
	    color: #191919;
	    text-align: left;
	    font-size: .26rem;
	    padding-left: .2rem;
	    margin-top: .3rem;
	}
	.br2-center{
		float: left;
		padding-bottom: 0.2rem;
		background: white;
	}
	.br2-icon-box{
		margin-right: 0.05rem;
		height: 1.4rem;
		width: 1rem;
	}
	.iccimg{
		width: 1rem;
    	height: 1rem;
	}
	.iccimg img{
		width: 100%;
		height: 100%;
	}
	.icc-te{
		width: 1rem;
	}
</style>