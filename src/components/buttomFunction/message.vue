<template>
  <div class="report">
    <v-head></v-head>
    <div class="reportphone">
      <el-divider content-position="left"><div class="formTitle">留言</div></el-divider>
      <div class="block"></div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="留下你想说的" prop="message">
          <el-input type="textarea" v-model="ruleForm.message"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确认举报</el-button>
        </el-form-item>
      </el-form>
    </div>
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
        message: ''
      },
      rules: {
        message: [
          { required: true, message: '请提交想说的话', trigger: 'blur' }
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
</style>
