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
      gettime: '',
      rules: {
        phone: [
          { required: true, message: '请输入要举报的手机号码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let _this = this
          let yy = new Date().getFullYear()
          let mm = new Date().getMonth() + 1
          let dd = new Date().getDate()
          let hh = new Date().getHours()
          let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
          let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
          _this.gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
          this.axios.post('/api/report/addReport', {
            phonenumber: _this.ruleForm.phone,
            informer: this.$store.state.userinfo.username,
            time: _this.gettime
          }).then(res => {
            if (res.data === 1) {
              _this.$message({
                type: 'success',
                showClose: true,
                duration: 3000,
                message: '举报成功!'
              })
            }
            this.$refs.ruleForm.resetFields()
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

<style  scoped>
.reportphone{
    padding: 20px 20px 10px;
}
.formTitle{
    font-size: 20px;
}
.el-input {
    width: 200px;
}
.alert{
    color: chocolate;
    font-size: 15px;
}
</style>
