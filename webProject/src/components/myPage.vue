<template>
  <div class="myPage">
    <h1 class="t">投顾人中心</h1>
    <img src="../assets/myPagePic.jpg" />

    <h2>Kingdom代客理财系统</h2>
    <div class="btn">
      <span>点击查看投顾人基本信息</span>
      <el-button plain size="mini" @click="openInvestor">Investor</el-button>
    </div>
    <div class="btn">
      <span>点击修改密码</span>
      <el-button plain size="mini" @click="dialogFormVisible = true">Password</el-button>
      
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width='35%'>
        <el-form :model="form">
          <el-form-item label="原始密码" :label-width="formLabelWidth">
            <el-input v-model="form.original" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" :label-width="formLabelWidth">
            <el-input v-model="form.new" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <h5>Shenzhen Kingdom.2020.06</h5>
  </div>
</template>

<script>
export default {
  name: "myPage",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        original: "",
        new: "",
      },
      formLabelWidth: "100px"
    };
  },
  methods: {
    openInvestor() {
      this.$router.push("personalInfo");
    }
  }
};
</script>

<style scoped>
.t {
  color: grey;
  margin: 20px 15px;
}
h2 {
  margin: 50px 100px;
}
span {
  margin-right: 20px;
}
h5 {
  margin: 40px 5px 20px 100px;
  color: silver;
}
img {
  height: 350px;
  width: 100%;
}
.btn {
  margin: 20px 5px 20px 100px;
  color: #909399;
}
.el-button {
  font-weight: 800;
}
</style>