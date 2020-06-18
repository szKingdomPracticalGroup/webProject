<template>
  <div class="financial_transactions">
    <products_details></products_details>
  </div>
</template>

<script>
  import products_details from "./products_details";
  export default {
    name: 'financial_transactions',
    components:{
      products_details,
    },
    data(){
      return{
        active:1
      }
    },
    methods:{

    }
  }
</script>

<style>

</style>
