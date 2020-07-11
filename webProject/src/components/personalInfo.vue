<template>
<div>
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/myPage' }">投顾人中心</el-breadcrumb-item>
  <el-breadcrumb-item>个人信息</el-breadcrumb-item>
</el-breadcrumb>
  <div class="box">
    <div class="bgBlock"></div>
    <div class="first-line">
      <div class="avatarBox">
        <el-upload
          class="avatar-uploader"
          action="/consultant/uploadAvatar"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <el-tooltip class="item" effect="dark" content="更改头像" placement="top">
            <el-avatar :src="avatarUrl" :size="150" shape="square"></el-avatar>
          </el-tooltip>
        </el-upload>
      </div>
      <div class="textInfo">
        <p class="nameTxt">{{name}}</p>
        <p class="emailTxt">{{email}}</p>
      </div>
    </div>

    <el-divider content-position="left" id="divide">TA的权限</el-divider>
    <div>
      <el-row :gutter="20">
      <el-col :span="3"  class="smallBox" v-for="(item,index) in sList" :key="index">
        <i class="el-icon-star-on"></i>
        {{item}}
      </el-col>
      </el-row>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      avatarSrc: "",
      avatarUrl: "",
      name: "",
      email: "",
      sList: [
        "发票",
        "报销",
        "代理",
        "买入",
        "卖出",
        "资产再平衡",
        "调仓换股",
        "提出建议",
        "审批",
        "公告"
      ]
    };
  },
  created() {
    // this.getAvatar();
    this.getInformation();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log("success");
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      console.log("done");
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    getInformation() {
      this.$axios.get("/consultant/loadConsultant").then(res => {
        this.avatarUrl = res.data.data.avatar;
        this.name = res.data.data.name;
        this.email = res.data.data.email;
      });
    }

    //   getAvatar() {
    //     let avatar = this.avatarUrl;
    //     this.$axios
    //       .get('/consultant/consultantAvatar/64d1b06b326f44909a8f9ae34921c4f6.jpg')
    //       .then(res => {
    //         this.avatarSrc=res.data;
    //         if(res.data.code===200){
    //           console.log(123)
    //         }

    //       });
    //   }
  }
};
</script>

<style scoped>
.box {
  height: 500px;
  width: 1200px;
  margin: 50px auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;
}
.bgBlock {
  position: absolute;
  width: 100%;
  height: 120px;
  background-color: skyblue;
  z-index: 1;
}
.first-line {
  display: flex;
  align-items: center;
  top: 40px;
  left: 40px;
  position: relative;
  z-index: 2;
}
.avatarBox {
  width: 150px;
  height: 150px;
  border: 3px solid white;
}
.el-avatar:hover {
  background-color: #0e0d0d;
}
.textInfo {
  margin-left: 10px;
}
.nameTxt {
  color: white;
  font-size: 30px;
}
.emailTxt {
  color: skyblue;
}
#divide {
  margin-top: 100px;
}
.smallBox{
  margin: 8px 30px;
  color: #686868;
}
.smallBox:hover{
  color: aqua;
}
</style>