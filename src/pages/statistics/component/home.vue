
<template>
	<div class="home" >
		<section>home页</section>
		<section>  statistics 页中vuex  store/modules/subComponentState 中的值：{{flag}}</section>
		<button @click="gotoVuexDemo" >gotoVuexDemo</button>
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
			
			
		},
		computed:{
			...mapState('subComponentState',{  //带命名空间的  第一个参数传进去
				flag :'flag' //相当于this.$store.state.subComponentState.count;  
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



