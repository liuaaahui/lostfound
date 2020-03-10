<template>
  <div class="backimg">
    <div class="back">
      <h1 class="logintitle">失物招领后台管理</h1>
      <h2 class="littleTitle">lost and found backstage management</h2>
      <div class="loginForm">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="phonenumber">
            <el-input placeholder="请输入账号" prefix-icon="el-icon-user-solid" v-model="ruleForm.phonenumber"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
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
          this.axios.post('/api/admin/login', {
            username: _this.ruleForm.phonenumber,
            password: _this.ruleForm.password
          }).then(res => {
            if (res.data.length === 0) {
              _this.$message({
                type: 'error',
                showClose: true,
                duration: 3000,
                message: '用户名或密码错误!'
              })
              this.$refs.ruleForm.resetFields()
            } else {
              _this.$message({
                type: 'success',
                showClose: true,
                duration: 3000,
                message: '登录成功!'
              })
              _this.$store.commit('SAVE_AUSERINFO', res.data[0])
              _this.$store.commit('CHECK_ALOGIN', '2')
              this.$router.replace('/adminHome')
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
  background: url(../../assets/adminBackground.jpg) no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.back{
  height: 370px;
  width: 320px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -160px;
  margin-top: -185px;
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
