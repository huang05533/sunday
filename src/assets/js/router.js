import VueRouter from 'vue-router'

import my from '../../component/my.vue'
import index from '../../component/index.vue'
import home from '../../component/home.vue'
import details from '../../component/details.vue'
import login from '../../component/login.vue'
import m from '../../component/home.vue'
import sign from '../../component/sign.vue'
import search from '../../component/search.vue'
import beauty from '../../component/beauty.vue'
import brand from '../../component/brand.vue'
import newuser from '../../component/newuser.vue'
import cart from '../../component/cart.vue'


export default new VueRouter({
	routes:[
		{				
			path:'/',
			component:index,
			children:[
				{			
					path:'/home',component:home,		
				}	
			],			
			redirect:'/home'
		},
		{				
			path:'/brand',component:brand,
		},
		{				
			path:'/my',component:my,
		},
		{
			path:'/details',component:details
		},
		{			
			path:'/login',component:login
		},
		{			
			path:'/sign',component:sign
		},
		{
			path:'/search',component:search
		},
		{
			path:'/beauty',component:beauty
		},	
		{
			path:'/newuser',component:newuser
		},
		{
			path:'/cart',component:cart
		},
		{
			path:'/*',redirect:'/home'
		}
	]
})