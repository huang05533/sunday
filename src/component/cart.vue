<template>
	<div>
		<!--页面顶部-->
		<div class="cart-top">
			<div class="back-icon" @click="back5();"></div>
			<div class="car-title"><h3>购物袋</h3></div>
			<div class="edit-btn">编辑</div>
		</div>
		
		<!--主体部分-->
		<div class="cart-box">
			<div class="cart-main">
				
				<div class="cart-box1">
					<input type="radio" class="chek"></input>
					<!--<img v-if="v.selected" class="chek" @click="radios(i)" src="../../data/images/shopbag/red-icon.png" />
					<img v-else="!v.selected" class="chek" @click="radios(i)" src="../../data/images/shopbag/select-icon.png" />-->
					<div class="hou-name">郑州保税仓</div>
					<div class="flex-padding"></div>
					<div class="my-coupon">优惠券</div>
					<div class="tag-bar"></div>
					<span class="hou-tag">已免运费</span>
				</div>
				
				<div class="cart-box2">
					<div class="add-box">
						<div class="addname">加价购</div>
						<div class="addesc">满¥59可优惠换购</div>
						<div class="flex-padding"></div>
						<div class="addshop">
							去选购
						</div>
					</div>
				</div>
				
				
				<!--商品选项2-->
				<div class="cart-group" v-for="(v,i) in con2">
					<div class="cart-group-box">
						<div class="cart-items">
							<div class="cart-items1">
								<div class="sec-icon">
									<!--<input type="radio" class="chek" v-model="picked" value="166" id="va3"></input>-->
									<img v-if="v.selected" class="chek" @click="radios(i)" src="../../data/images/shopbag/red-icon.png" />
									<img v-else="!v.selected" class="chek" @click="radios(i)" src="../../data/images/shopbag/select-icon.png" />
								</div>
							</div>
							<div class="cart-items-main">
								<div class="cart-imgs">
									<img :src="v.images" alt="" />
								</div>
								<div class="cart-items-text">
									<div class="cart-te-name">
										{{v.name}}
									</div>
									<div class="hououse">
										<div class="hououse-name" >{{v.des}}</div>
									</div>
									<div class="hououse reduce"><span>直降{{v.price1}}元</span></div>
									<div class="fr-price">
										<div class="fr-price1">￥{{v.money}}</div>
										<div class="addcount">
											<span class="addc1" @click="btn_minute(i)"><span></span></span>
											<span class="addc2" v-model="v.num">{{v.num}}</span>
											<span class="addc3" @click="btn_add(i)">
												<span class="ac1"></span>
												<span class="ac2"></span>
											</span>
										</div>
									</div>
									<div class="redu-re">
										<div class="redu-re-box">
											<div class="curname">直降</div>
											<div class="curdesc">享受特价优惠,且不与其他活动同享</div>
											<div class="cur-btn" @click="delerte(i)">删除</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
	
			</div>
		</div>
		
		
		
		
		<!--结算部分-->
		<div class="counter">
			<div class="counter-box">
				<div class="counter-info">
					<div class="cou-title">
						合计：
						<span>¥{{money}}</span>
						<span class="sub-title">已选商品个数为&nbsp;<span>{{num}}</span></span>
					</div>
					<div class="sub-title">不含运费和综合税</div>
				</div>
				<button class="counter-btn">结算郑州保税仓({{num}})</button>
			</div>
		</div>
	
	
	
		<div class="zui"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				con2:'',
				//默认总价
				money: 0,
				//默认总数量
				num: 0,
				con2: [
				{
					images:"./data/images/index/lit1.png",
					name:"SHISEIDO 资生堂 ANESSA 安耐晒2018新版金瓶清透防水防晒护肤乳 SPF50+・PA++++ 60ml",
					des:"郑州保税仓",
					price1:40,
					money:100,
					num: 1,
					selected: false	
				},
				{
					images:"./data/images/index/lit2.png",
					name:"SHISEIDO 资生堂 ANESSA 安耐晒2018新版金瓶清透防水防晒护肤乳 SPF50+・PA++++ 60ml",
					des:"郑州保税仓",
					price1:60,
					money:200,
					num: 1,
					selected: false	
				},
				{
					images:"./data/images/index/lit3.png",
					name:"SHISEIDO 资生堂 ANESSA 安耐晒2018新版金瓶清透防水防晒护肤乳 SPF50+・PA++++ 60ml",
					des:"郑州保税仓",
					price1:60,
					money:300,
					num: 1,
					selected: false	
				}
				
			]
			}
		},
		//初始化加载   显示总价总数量
		created() {
			var price = 0;
			var numb = 0;
			var list = this.con2;
			
			for(var i = 0; i < list.length; i++) {
				//当前选中
				if(list[i].selected) {
					price += list[i].num * list[i].money;
					numb += list[i].num;
				}
			}
			this.money = price;
			this.num = numb;
		},
		methods:{
//			pre(){
//				this.$router.go(-1)
//			},
			back5(){
				this.$router.replace('/home')
			},
			
			//总价总数量方法   方便调用   再次多写了一次[可以跟初始化封装为一个方法]
			hh() {
				var price = 0;
				var numb = 0;
				var list = this.con2;
				for(var i = 0; i < list.length; i++) {
					if(list[i].selected) {
						price += list[i].num * list[i].money;
						numb += list[i].num;
					}
				}
				this.money = price;
				this.num = numb;
			},
			//删除购物车列表
			delerte(i) {
				this.con2.splice(i, 1);
			},
			//选中未选中
			radios(i) {
				var list = this.con2;
				list[i].selected = !list[i].selected;
				this.hh();  //执行计算总价总数量方法
			},
			//添加
			btn_add(i) {
				var list = this.con2;
				var st = list[i].num;
				st = st + 1;
				list[i].num = st;
				this.hh();
			},
			//减去
			btn_minute(i) {
				var list = this.con2;
				var su = list[i].num;
				if(su > 1) {
					su = su - 1;
					list[i].num = su;
				}
				this.hh();
			},

	},
	mounted(){
//   	this.$http.get('./data/my.json')
//		.then((response)=>{
//		this.con2=response.data.con2;
//		})
//		.catch(function (error) {	
//			console.log(error);
//		})
//		.then(function () {		
//		})
		
		
     }
		
	}
</script>

<style>
</style>

<style scoped>
	.zui{
		height: 0.8rem;
	}
	.cart-top{
		height: 0.8rem;
		position: relative;
		background-color: #fafafa;
	}
	.back-icon{
		background: url('../../data/images/index/beauty/icon1.png') center center no-repeat;
    	background-size: .35rem .33rem;
	    width: 0.8rem;
	    height: 0.8rem;
	    line-height: .8rem;
	    color: #9e9e9e;
	    padding-left: .1rem;
	    padding-right: .1rem;
	    text-align: center;
	}
	.sec-icon{
		position: relative;
		top:0.3rem;
	}
	.car-title{
	    width: 75%;
	    height: 0.8rem;
	    line-height: .8rem;
	    text-align: center;
	    color: #1a1819;
	    position: absolute;
	    top: 0px;
	    left: 0.8rem;
	}
	.car-title h3{
		margin: 0px;
   		font-weight: 400;
	}
	.chek{
		width: 20px;
		height: 20px;
	}
	.edit-btn{
		font-size: 0.28rem;
		position: absolute;
	    top: 0px;
	    right: 0rem;
	    min-width: .8rem;
	    height: .8rem;
	    line-height: .8rem;
	    color: #9e9e9e;
	    padding-left: .1rem;
	    padding-right: .1rem;
	    text-align: center;
	}
	.cart-box1{
		display: flex;
        position: relative;
    	font-size: .26rem;
        align-items: center;
	    padding: 0 .3rem;
	    box-sizing: border-box;
	    height: 1rem;
	    line-height: 1rem;
	}
	.chk-icon{
		display: block;
	    width: .4rem;
	    height: .4rem;
	    background: url('../../data/images/shopbag/select-icon.png');
	    background-size: 100% 100%;
	    margin-right: .1rem;
	}
	.hou-name{
		font-size: .26rem;
	    margin-left: .15rem;
	}
	.flex-padding{
	    flex: 1;
	}
	.my-coupon{
		font-size: .24rem;
    	color: #ea4141;
	}
	.tag-bar{
		width: 1px;
	    background-color: #ea4141;
	    overflow: hidden;
	    margin: 0 .1rem;
	    height: .24rem;
	}
	.hou-tag{
		font-size: .24rem;
    	color: #ea4141;
	}
	.cart-box2{
		box-sizing: border-box;
	    width: 6.9rem;
	    border-radius: .2rem;
	    overflow: hidden;
	    margin: 0 auto .2rem;
	}
	.add-box{
		border-radius: .2rem;
		height: .68rem;
	    display: flex;
	    background-color: #fff8f8;
	    align-items: center;
	    color: #ea4141;
	    font-size: .24rem;
	    border: .01rem solid #ffc0be;
	}
	.addname{
	    background-color: #ea4141;
	    color: #fff;
	    font-size: .2rem;
	    border-radius: .04rem;
	    margin-left: .16rem;
	    margin-right: .14rem;
	    padding: .04rem;
	}
	.addshop{
		padding-right: .15rem;
	    position: relative;
   		margin-right: .2rem;
	}
	.addshop:after{
	    position: absolute;
	    right: 0;
	    top: .1rem;
	    content: "";
	    width: .12rem;
	    height: .12rem;
	    border: 1px solid currentColor;
	    border-width: 0 0 1px 1px;
	    transform: rotate(225deg);
	}
	.cart-group{
		position: relative;
	    overflow: hidden;
	    margin: 0 .3rem .3rem;
	    background: #fafafa;
	    border: 1px solid #e6e6e6;
	    border-radius: .2rem;
	}
	.cart-items{
	    display: flex;
	    color: #191919;
	    font-size: .26rem;
	}
	.cart-items1{
	    width: .4rem;
	    padding: 0 .1rem;
	}
	.cart-items1 i{
		display: block;
	    background: url('../../data/images/shopbag/select-icon.png') 50% no-repeat;
	    background-size: 100% 100%;
	    width: .4rem;
	    height: .4rem;
	    margin-top: .9rem;
	}
	.cart-items-main{
	   position: relative;
	    flex: 1;
	    display: flex;
	    padding: .2rem .2rem .2rem 0;
	}
	.cart-imgs{
		position: relative;
	    display: flex;
        align-items: center;
	    width: 1.7rem;
	    height: 1.7rem;
	}
	.cart-imgs img{
		width: 100%;
		height: 100%;
	}
	.cart-items-text{
	    position: relative;
    	margin-left: .2rem;
        flex: 1;
        display: flex;
    	width: 0;
        flex-direction: column;
        border-bottom: 1px solid #ccc;
	}
	.cart-te-name{
		text-align: left;
		font-size: .24rem;
    	color: #191919;
	}
	.hououse{
	    position: relative;
    	margin: .1rem 0;
	}
	.hououse-name{
		float: left;
	    position: relative;
	    font-size: .24rem;
	    color: #6e6e6e;
	    height: .44rem;
	    line-height: .44rem;
	    background: #ededed;
	    padding: 0 .36rem 0 .1rem;
	    border-radius: .02rem;
	    display: inline-block;
	}
	.hououse-name:after{
	    position: absolute;
	    content: "";
	    top: .08rem;
	    right: .1rem;
	    width: .14rem;
	    height: .14rem;
	    line-height: 0;
	    border: 1px solid #9e9e9e;
	    border-width: 0 0 1px 1px;
	    transform: rotate(315deg);
	}
	.reduce span{
		float: left;
		display: inline-block;
	    margin-right: .15rem;
	    line-height: .3rem;
	    color: #ea4141;
	    font-size: .22rem;
	}
	.fr-price{
		position: relative;
	}
	.fr-price1{
		text-align: left;
		font-size: .32rem;
   	 	font-weight: 700;
	}
	.addcount{
		position: absolute;
		top: 0;
		right:0;
		width: 1.7rem;
	    height: .5rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    border: 1px solid hsla(0,0%,62%,.5);
	    border-radius: 2px;
	}
	.addc1{
		border-right: 1px solid hsla(0,0%,62%,.5);
		width: .3rem;
		display: flex;
		position: relative;
		padding: 0 0.1rem;
	}
	.addc1 span{
		margin-top: 0.23rem;
		margin-left: 0.035rem;
		height: 1px;
		width: 80%;
		background: black;
	}
	.addc2{
		width: .7rem;
		line-height: .5rem;
    	font-size: .3rem;
	}
	.addc3{
		border-left: 1px solid hsla(0,0%,62%,.5);
        width: .3rem;
        display: flex;
        padding: 0 0.1rem;
        position: relative;
	}
	.ac1{
		margin-top: 0.23rem;
		margin-left: 0.035rem;
		height: 1px;
		width: 0.3rem;
		background: black;
	}
	.ac2{
		position: absolute;
		top: 0;
		left: 0.23rem;
		margin-top: 0.245rem;
		margin-left: 0.035rem;
		height: 1px;
		width: 0.3rem;
		background: black;
		transform: translate(-50%,-50%) rotate(90deg);
	}
	.redu-re{
		position: relative;
	    color: #6e6e6e;
	    height: .5rem;
	    line-height: .5rem;
	    margin-top: .25rem;
	    margin-bottom: 0.2rem;
	}
	.redu-re-box{
	    position: absolute;
        display: flex;
        align-items: center;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    flex-direction: row;
	}
	.curname{
	    line-height: .3rem;
	    height: .3rem;
	    color: #fff;
	    background: #ea4141;
	    font-size: .18rem;
	    padding: 0 .05rem;
	    border-radius: 2px;
	    overflow: hidden;
	    white-space: nowrap;
	    margin-right: .05rem;
	}
	.curdesc{
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-right: .3rem;
	    color: #191919;
	    flex: 1;
	}
	.cur-btn{
	    color: #ea4141;
	}
	.counter{
		border-bottom:1px solid #ccc;
		position: fixed;
        left: 0;
        bottom: 1rem;
        height: 1rem;
	    width: 100%;
	    background-color: #fff;
	    z-index: 2;
	    overflow: hidden;	
	}
	.counter-box{
		height: 1rem;
	    box-sizing: border-box;
	    padding-left: .3rem;
	    background-color: #fff;
	    display: flex;
	    width: 100%;
	}
	.counter-info{
		padding-top: 0.15rem;
		width: 4rem;
		text-align: left;
	}
	.cou-title{
		font-size: .26rem;
	}
	.cou-title span{
	    color: #ea4141;
	    font-weight: 700;
	    font-size: .32rem;
	}
	.counter-info .sub-title{
		color: #9e9e9e;
	    font-size: .22rem;
	    margin-left: .1rem;
	    font-weight: 400;
	}
	.counter-btn{
	    display: block;
	    width: 2.75rem;
	    height: .8rem;
	    border: none;
	    outline: none;
	    background-color: #ea4141;
	    color: #fff;
	    font-size: .26rem;
	    white-space: nowrap;
	    overflow: hidden;
	    border-radius: .04rem;
	    margin: .1rem;
	}
</style>