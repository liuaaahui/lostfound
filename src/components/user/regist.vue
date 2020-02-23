<template>
  <div class="backimg">
    <div class="back">
      <h1 class="title">失物招领</h1>
      <h2 class="littleTitle">lost and found</h2>
      <div class="loginForm">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="phonenumber">
            <el-input placeholder="手机号,用于登录" prefix-icon="el-icon-phone" v-model="ruleForm.phonenumber"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" prefix-icon="el-icon-lock" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item prop="ensurepwd">
            <el-input placeholder="确认密码" prefix-icon="el-icon-lock" v-model="ruleForm.ensurepwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确认注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <span class="backTohome" @click="home">返回首页</span>
      <span class="regist" @click="login">已有账号直接登陆</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var checkPwd = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('密码不一致'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phonenumber: '',
        password: '',
        ensurepwd: ''
      },
      rules: {
        phonenumber: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        ensurepwd: [
          { validator: checkPwd, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this
          this.axios.post('/api/userRegist', {
            phonenumber: _this.formName.phonenumber,
            password: _this.formName.password
          }).then(res => {
            _this.$message({
              type: 'success',
              showClose: true,
              duration: 3000,
              message: '注册成功!'
            })
            this.$router.go(0)
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
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
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
.title{
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
