<template>
  <div class="project_details">
    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>
  </div>
</template>

<script>
  export default {
    name: "project_details",
    data() {
      return {

      }
    },
    methods: {
      goBack() {
       this.$emit('goBackToProject',false)
      }
    },
    created() {

    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
