<template>
  <div class="financial_transactions">
    <van-nav-bar
        title="登录"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
            提交
            </van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: 'financial_transactions',
    data(){
      return {
        username: '',
        password: '',
      };
    },
    methods:{
        onSubmit(values) {
            console.log('submit', values);
            Toast.success('登录成功');
            // this.$axios.post("/login").then(data=>{
            //     if (data.data.status != 200) {
            //         //iViewUi的友好提示
            //         this.$Message.error(data.data.message);
            //         //登录成功
            //     } else {
            //         //设置Vuex登录标志为true，默认userLogin为false
            //         this.$store.dispatch("userLogin", true);
            //         //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
            //         //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
            //         localStorage.setItem("Flag", "isLogin");
            //         //iViewUi的友好提示
            //         this.$Message.success(data.data.message);
            //         //登录成功后跳转到指定页面
            //         this.$router.push("/home");
            //     }
            // });
            this.$store.dispatch("userLogin", true);
            localStorage.setItem("Flag", "isLogin");
            this.$router.push({name:'purchase',params:{}});
        },
        onClickLeft() {
            Toast('返回');
        },
        
    }
  }
</script>

<style>

</style>
