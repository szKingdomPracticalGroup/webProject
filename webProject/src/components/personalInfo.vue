<template>
  <div class="box">
    <el-row>
      <el-col :span="6">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </el-col>
            <el-col :span="6">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      src: ""
    };
  }
};
</script>

<style scoped>
.box {
  height: 500px;
  width: 1000px;
  margin: 100px auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>