<template>
  <div class="report">
    <v-head></v-head>
    <div class="reportphone">
      <el-divider content-position="left"><div class="formTitle">留言</div></el-divider>
      <div class="block"></div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="messageInput">
        <el-form-item label="留下你想说的" prop="message">
          <el-input type="textarea" v-model="ruleForm.message" placeholder="（最多500字）"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确认发布</el-button>
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
      gettime: '',
      rules: {
        message: [
          { required: true, message: '请提交想说的话', trigger: 'blur' }
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
          this.axios.post('/api/message/addMessage', {
            content: _this.ruleForm.message,
            author: this.$store.state.userinfo.nickname,
            phone: this.$store.state.userinfo.username,
            time: _this.gettime
          }).then(res => {
            if (res.data === 1) {
              _this.$message({
                type: 'success',
                showClose: true,
                duration: 3000,
                message: '发布成功!'
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

<style scoped>
.reportphone{
    padding: 20px 20px 10px;
}
.formTitle{
    font-size: 20px;
}
.el-textarea {
    width: 500px;
}
</style>
