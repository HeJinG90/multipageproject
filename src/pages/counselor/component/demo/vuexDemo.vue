<template>
  <div >
    <p>{{count}}</p>
  <p>
    <button @click="MUTATIONNUMADD(10)">使用mutations的方法做自加</button>
    <button @click="actionNumAdd">使用action的方法做自加</button>
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
        count :'count' //相当于this.$store.state.subComponentState.count;  
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