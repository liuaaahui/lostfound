<template>
  <div class="report">
    <v-head></v-head>
    <div class="reportphone">
      <el-divider content-position="left"><div class="formTitle">举报手机举报</div></el-divider>
      <div class="block"></div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="诈骗手机号码" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确认举报</el-button>
        </el-form-item>
      </el-form>
    </div>
    <span class="alert reportphone">提示：举报成功后，诈骗手机号将无法查看所有寻物招领的联系方式</span>
    <el-divider></el-divider>
  </div>
</template>

<script>
import head from '../module/top'
export default {
  components: {
    'v-head': head
  },
  data () {
    return {
      ruleForm: {
        phone: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入要举报的手机号码', trigger: 'blur' }
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
    }
  }
}
</script>

<style>
.reportphone{
    padding: 20px 20px 10px;
}
.formTitle{
    font-size: 20px;
}
.el-input__inner {
    width: 200px;
}
.alert{
    color: chocolate;
    font-size: 15px;
}
</style>
