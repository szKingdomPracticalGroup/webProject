<template>
  <div class="box">
    <el-row class="first-line">
      <el-col :span="6">
        <div>
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <el-tooltip class="item" effect="dark" content="更改头像" placement="top">
              <el-avatar :size="100" icon="el-icon-user-solid" :src="avatarUrl"></el-avatar>
            </el-tooltip>
          </el-upload>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <p>{{name}}</p>
          <p>{{email}}</p>
        </div>
      </el-col>
      <el-col :span="6">
        <p>{{department}}/{{position}}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-select v-model="department" placeholder="请选择部门">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <el-select v-model="position" placeholder="请选择职位">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
      avatarUrl: "",
      name: "CB",
      email: "123567@ww.com",
      department: "",
      position: "",
      options1: [
        {
          value: "研发部",
          label: "研发部"
        },
        {
          value: "测试部",
          label: "测试部"
        },
        {
          value: "设计部",
          label: "设计部"
        },
        {
          value: "策划部",
          label: "策划部"
        }
      ],
      options2: [
        {
          value: "产品经理",
          label: "产品经理"
        },
        {
          value: "前端",
          label: "前端"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  created() {
    // this.getAvatar()
  },
  methods: {
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === "image/jpeg";
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error("上传头像图片只能是 JPG 格式!");
        }
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
      }

      //  getAvatar() {
      //    this.axios
      //     .get("http://123.57.46.173:9002/consultant/consultantAvatar/{fileName}")
      //     .then(res => {

      //     });
      //  }
    }
  }
};
</script>

<style scoped>
.box {
  height: 400px;
  width: 1000px;
  margin: 80px auto;
  padding: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.first-line {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.el-avatar:hover {
  background-color: #0e0d0d;
  opacity: 0.5;
}
</style>