
<template>
	<div class="home" >
		<section>home页</section>
		<section> counselor页中vuex  store/modules/subComponentState 中的值：{{count}} </section>
		<button @click="gotoVuexDemo" >gotoVuexDemo</button>
		<a href='statistics.html'>跳转到statistics页</a>
	</div>
</template>
<style scoped>
.home section{
	font-size: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
}
</style>

<script>
import { mapState , mapActions ,mapGetters ,mapMutations  } from 'vuex'
	export default {
		data () {
			return {
			}
		},
		created:function(){
			window.sessionStorage.setItem("commonData","共享数据");
			
		},
		computed:{
			...mapState('subComponentState',{  //带命名空间的  第一个参数传进去
				count :'count' //相当于this.$store.state.subComponentState.count;  
			}),
		},
		methods:{
			gotoVuexDemo:function(){
				let _this = this;
				this.$router.push({name:"VuexDemo"})
			}
		}

	}
</script>



