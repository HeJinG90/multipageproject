<template>
  <div >
    <p class="demo">statistics 页中vuex  store/modules/subComponentState 中的值：{{flag}}</p>
  <p>
    <button @click="MUTATIONNUMADD(true)">使用mutations的方法改值</button>
    <button @click="actionNumAdd">使用action的方法改值</button>
  </p>
  </div>
</template>      

<script>
import { mapState , mapActions ,mapGetters ,mapMutations  } from 'vuex'
export default {
 data () {
    return {
      
    }
  },
  computed:{
     ...mapState('subComponentState',{  //带命名空间的  第一个参数传进去
        flag :'flag' //相当于this.$store.state.subComponentState.count;  
      }),
  },
  methods: {
      ...mapMutations('subComponentState',{
        MUTATIONNUMADD:"MUTATIONNUMADD" //相当于this.$store.commit('subComponentState/MUTATIONNUMADD',10)
      }),
      ...mapActions('subComponentState',{
         actionNumAdd : 'actionNumAdd'  //相当于this.$store.dispatch('subComponentState/actionNumAdd')
       }),
  }

  };
</script>

<style scoped>
.demo {
	font-size: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
}
</style>
