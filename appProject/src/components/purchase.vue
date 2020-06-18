<template>
  <div class="financial_transactions">
    <van-nav-bar
        title="购买"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
    name: 'financial_transactions',
    data(){
      return{
        active:2
      }
    },
    methods:{
        onClickLeft() {
            Toast('返回');
        },
    }
  }
</script>

<style>

</style>
