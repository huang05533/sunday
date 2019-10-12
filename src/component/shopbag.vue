<template>
  <main>
  	<router-link to="/details">我是列表内容11</router-link>
		<h1>我是列表内容</h1>
		<ul>
			<li v-for="(v,i) in arr">	
				<router-link :to="'/details/'+v.id">{{v.title}}</router-link>
			</li>
		</ul>
	</main>	
</template>



<script>
export default {
  data(){
		return{
			arr:[
				{
					title:'蜂蜜',			
					path:'/bee',
					id:0
				},
				{
					title:'水杯',
					path:'/water',
					id:1
				},
				{
					title:'纸巾',
					path:'/paper',
					id:2
				}
			]
		}
	}
}
</script>

<style>
</style>