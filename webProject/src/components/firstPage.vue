<template>
  <div class="firstPage">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'firstPage',
  data () {
    return {
      msg: 'firstPage!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firstPage{

  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>