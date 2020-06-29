<template>
  <div class="register">
    <div class="register_box">
      <span>注册</span>
      <div class="input_div">
        <i class="el-icon-info"></i>
        <input placeholder='用户名'v-model="userName" >

        </input>
      </div>
      <div class="input_div">
        <i class="el-icon-user"></i>
        <input placeholder='邮箱'v-model="email" >

        </input>
      </div>
      <div class="input_div">
        <i class="el-icon-user"></i>
        <input placeholder='手机号'v-model="phoneNumber" >

        </input>
      </div>
      <div class="input_div">
        <img src="../../assets/key.png" style="width: 50px"/>
        <input placeholder="密码" v-model="password" type="password">

        </input>
      </div>

      <button @click="onSubmit">
        注册
      </button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        input: '',
        password: '',
        savePass:true,
        userName:'',
        phoneNumber:'',
        email:''
      }
    },
    methods:{
      // onSubmit() {
      //   let reg=/^\d{8,}$/
      //   let regResult=this.userName.match(reg);
      //   console.log(regResult)
      //   if (regResult){
      //     let phoneNumber=this.userName;
      //     let params={
      //       phoneNumber,
      //       password: this.password
      //     }
      //     this.$axios.post(`${this.$store.state.httpAddress}/user/loginUser`,params).then(data=>{
      //       if(data.data){
      //         console.log(data)
      //         this.$store.commit('userStatus',true)
      //         console.log(this.$store.state.isLogin)
      //         this.$router.push({name:'first_page'})
      //       }
      //     }).catch(err=>{
      //       this.$message({
      //         message:'似乎哪里出了问题',
      //         type: 'warning'
      //       })
      //     })
      //   }
      //   else{
      //     let email=this.userName;
      //     let params={
      //       email,
      //       password: this.password
      //     }
      //     this.$axios.post(`http://${this.$store.state.httpAddress}/user/loginUser`,params).then(data=>{
      //       if(data.data){
      //         console.log(data)
      //         this.$store.commit('userStatus',true)
      //         console.log(this.$store.state.isLogin)
      //         this.$router.push({name:'first_page'})
      //       }
      //     }).catch(err=>{
      //       this.$message({
      //         message:'似乎哪里出了问题',
      //         type: 'warning'
      //       })
      //     })
      //   }
      //
      // },
      onSubmit(){
        this.$store.commit('userStatus',true)
                console.log(this.$store.state.isLogin)
                this.$router.push({name:'first_page'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../../assets/login_background.png") no-repeat;
    background-size: cover;
    background-size: 100% 100%;
  }
  .register_box{
    transform: scale(0.5);
    width: 1200px;
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding:100px 0px;
  }
  .login_box>span:first-child{
    color:#ffffff;
    font-size: 70px;
  }
  .input_div{
    background: #959FBA;
    opacity: 0.5;
    width: 800px;
    height:120px;
    font-size: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 0 40px;
    border-radius: 60px;
  }
  input{
    border: 0;
    height: 120px;
    width: 100%;
    font-size: 30px;
    background: transparent;
    padding-left: 20px;
  }
  input::placeholder{
    color:#C3D1D4;
  }
  button{
    width: 800px;
    height:120px;
    border-radius: 60px;
    background: #3962D6;
    color:#fff;
    font-size: 40px;
    border: 0;
    cursor: pointer;
  }

  div:nth-of-type(5){
    padding: 0;
    width: 900px;
    box-sizing: border-box;
    padding-right: 50px;
    height: 60px;
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  span{
    color:#C2CEE6;
    font-size: 35px;
    cursor: pointer;
  }
  span:hover{
    color:#a1c4fd
  }
  input:hover{
    border:0
  }
</style>
