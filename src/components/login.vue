<template>
  <div class="login">
    {{msg}}
    <el-row :gutter="20">
        <el-col :span="12" :offset="6">
            <div class="grid-content bg-purple">
                <el-input
                    placeholder="请输入手机号"
                    v-model="input"
                    clearable>
                </el-input>
            </div>
        </el-col>
        <el-col :span="12" :offset="6">
            <div class="grid-content bg-purple">
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '欢迎回来！',
      titil: '财富管理',
      input: '',
      password: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
