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
          <el-form-item prop="nickname">
            <el-input placeholder="昵称" prefix-icon="el-icon-user-solid" v-model="ruleForm.nickname"></el-input>
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
        nickname: '',
        password: '',
        ensurepwd: ''
      },
      rules: {
        phonenumber: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '昵称不能为空', trigger: 'blur' }
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
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let _this = this
          this.axios.post('/api/user/regist', {
            username: _this.ruleForm.phonenumber,
            nickname: _this.ruleForm.nickname,
            password: _this.ruleForm.password
          }).then(res => {
            if (res.data === 0) {
              _this.$message({
                type: 'error',
                showClose: true,
                duration: 3000,
                message: '该手机号已经被注册!'
              })
            } else {
              _this.$message({
                type: 'success',
                showClose: true,
                duration: 3000,
                message: '注册成功!'
              })
            }
            this.$refs.ruleForm.resetFields()
            console.log(res)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    home () {
      this.$router.replace('/').catch(data => { })
    },
    login () {
      this.$router.push('/login').catch(data => { })
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
