
<template>
	<div class="home" >
		{{count}}
		counselorhome
		<button @click="gotoVuexDemo" >gotoVuexDemo</button>
	</div>
</template>
<style scoped>
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



