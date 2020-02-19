<template>
  <div class="backimg">
    <div class="back">
      <h1 class="title">失物招领</h1>
      <h2 class="littleTitle">lost and found</h2>
      <div class="loginForm">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input placeholder="请选择日期" prefix-icon="el-icon-date" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item prop="region">
            <el-input placeholder="请选择日期" prefix-icon="el-icon-date" v-model="ruleForm.region"></el-input>
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
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
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
