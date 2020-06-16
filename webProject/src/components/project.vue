<template>
  <div class="project">

    <project_details v-if="detail_visible" @goBackToProject="changeDetailVisible"></project_details>
    <div class="projectBox" v-for="(projectItem,index) in projectList"></div>
  </div>
</template>

<script>
  import project_details from "./project_details";
export default {
  name: 'project',
  components: {
    project_details,

  },
  data () {
    return {
      msg: 'HelloWorld!',
      detail_visible:true,
      projectList:[{},{}]
    }
  },
  methods:{
    changeDetailVisible(visible){
      this.detail_visible=visible
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .project{
    height: 100%;
    width: 100%;
    background:blue;
    display:flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .projectBox{
    background:black;
    height:400px;
    width:200px
  }
</style>
