<template>
  <div class="backimg">
    <div class="back">
      <h1 class="logintitle">失物招领</h1>
      <h2 class="littleTitle">lost and found</h2>
      <div class="loginForm">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="phonenumber">
            <el-input placeholder="请输入手机号" prefix-icon="el-icon-phone" v-model="ruleForm.phonenumber"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <span class="backTohome" @click="home">返回首页</span>
      <span class="regist" @click="regist">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        phonenumber: '',
        password: ''
      },
      rules: {
        phonenumber: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let _this = this
          this.axios.post('/api/user/login', {
            username: _this.ruleForm.phonenumber,
            password: _this.ruleForm.password
          }).then(res => {
            if (res.data.length === 0) {
              _this.$message({
                type: 'error',
                showClose: true,
                duration: 3000,
                message: '该手机号未注册!'
              })
              this.$refs.ruleForm.resetFields()
            } else {
              _this.$message({
                type: 'success',
                showClose: true,
                duration: 3000,
                message: '登录成功!'
              })
              _this.$store.commit('SAVE_USERINFO', res.data[0])
              _this.$store.commit('CHECK_LOGIN', '1')
              this.$router.replace('/')
              this.$router.go(0)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    home () {
      this.$router.replace('/')
    },
    regist () {
      this.$router.push('/regist')
    }
  }
}
</script>

<style scoped>
.backimg{
  background: url(../../assets/background.jpg) no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  opacity: 0.9;
}
.back{
  height: 470px;
  width: 320px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -160px;
  margin-top: -235px;
  color: #fff;
  text-align: center;
}
.logintitle{
  color: #fff;
  font: 33px/33px Helvetica,Arial,'宋体';
  font-weight: bold;
}
.littleTitle{
  color: #fff;
  font: 16px/16px Helvetica,Arial,'宋体';
}
.loginForm{
  padding: 40px 0;
}
.el-button--primary {
    width: 100%;
    color: #fff;
}
.el-input__inner {
  /* background-color: transparent; */
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}
.backTohome{
  float: left;
  cursor: pointer;
}
.regist{
  float: right;
  cursor: pointer;
}
</style>
