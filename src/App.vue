<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>


<script>
export default {
	  name: 'app',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  mounted(){
		  	 window.onresize = getRem;
			    function getRem(){
			        document.documentElement.style.fontSize = document.documentElement.offsetWidth / 7.5+'px';
			    }
			    getRem();    
		 }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
	font-size:0.2rem;
}
h1, h2,h3{
  font-weight: normal;
}
h3{
	font-size: 0.3rem;
}
div{
	font-size: 0.26rem;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
  text-decoration: none;
  font-size:0.24rem;
}
</style>
