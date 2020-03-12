<template>
  <div class="addUser">
    <h1 class="center">添加新用户</h1>
    <div class="addForm">
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
            <el-button type="primary" @click="submitForm('ruleForm')">确认添加</el-button>
        </el-form-item>
      </el-form>
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
    }
  }
}
</script>

<style scoped>
.addUser{
    text-align: center;
    position: relative;
    width: 250px;
    height: 288px;
    left: 50%;
    top: 42%;
    margin-left: -125px;
    margin-top: -144px;
}
h1{
    position: relative;
    font: 27px/27px Helvetica,Arial,'宋体';
    letter-spacing: 5px;
    font-weight: bold;
    top: -70px;
}
</style>
