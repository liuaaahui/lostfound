<template>
<div class="backgroundImg">
  <div class="search">
    <div class="title">
        —————————— &nbsp;&nbsp;&nbsp;&nbsp;<span class="titleWord"> 发布寻物启示 </span>&nbsp;&nbsp;&nbsp;&nbsp; ——————————
    </div>
    <div class="searchForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="丢失地点" prop="selectedOptions">
          <el-cascader :options="options" v-model="ruleForm.selectedOptions" @change="handleChange" :separator="' '"></el-cascader>
        </el-form-item>
        <el-form-item prop="site">
          <el-input v-model="ruleForm.site" placeholder="填写详细丢失地点"></el-input>
        </el-form-item>
        <el-form-item label="丢失物品" prop="kind">
          <el-select v-model="ruleForm.kind" placeholder="请选择物品种类">
            <el-option label="证件" value="证件"></el-option>
            <el-option label="首饰" value="首饰"></el-option>
            <el-option label="其他" value=" "></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="goodsname">
          <el-input v-model="ruleForm.goodsname" placeholder="物品名称"></el-input>
        </el-form-item>
        <el-form-item label="丢失时间" required>
            <el-form-item prop="date">
              <el-date-picker type="date" placeholder="点击选择日期" v-model="ruleForm.date" @change="datachange"  format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-form-item>
         <el-form-item label="联系人" prop="name">
          <el-input v-model="ruleForm.name" placeholder="联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phonenumber">
          <el-input v-model="ruleForm.phonenumber" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item label="微信号" prop="wechat">
          <el-input v-model="ruleForm.wechat" placeholder="微信号"></el-input>
        </el-form-item>
        <el-form-item label="酬金" prop="reward">
          <el-input v-model="ruleForm.reward" placeholder="填写金额"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <el-form-item label="上传图片" prop="uploadImg">
          <!-- v-model="ruleForm.uploadImg" -->
          <!-- <button>选择文件</button> -->
          <el-upload class="upload-demo"
                     ref="upload"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-change="onChange"
                     :on-exceed="handleExceed"
                     :file-list="fileList"
                     :before-upload="beforeUpload"
                     list-type="picture"
                     :limit='1'
                     :auto-upload="false">
            <el-button size="small" type="primary">选择文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传一个jpg/png文件，且不超过1M</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认发布</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
import options from '../js/country.js'
export default {
  data () {
    return {
      ruleForm: {
        selectedOptions: [],
        site: '',
        kind: '',
        name: '',
        goodsname: '',
        date: '',
        phonenumber: '',
        wechat: '',
        reward: '',
        remark: ''
      },
      options: options,
      spot: '',
      Selectdata: '',
      fileList: [],
      downLoadLoading: '',
      rules: {
        site: [
          { required: true, message: '请输入地点', trigger: 'blur' }
        ],
        selectedOptions: [
          { required: true, message: '请选择地点', trigger: 'change' }
        ],
        kind: [
          { required: true, message: '请选择种类', trigger: 'change' }
        ],
        goodsname: [
          { required: true, message: '请填写物品名称', trigger: 'blur' }
        ],
        date: [
          { type: 'string', required: true, message: '请选择日期', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请填写联系人', trigger: 'blur' }
        ],
        phonenumber: [
          { required: true, message: '请填写联系电话', trigger: 'blur' }
        ],
        wechat: [
          { required: true, message: '请填写微信号', trigger: 'blur' }
        ],
        reward: [
          { required: true, message: '请填写酬金，无酬金可填0', trigger: 'blur' }
        ],
        remark: [
          { required: true, message: '请具体描述', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.submitUpload()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleChange (value) {
      console.log(this.Selectdata)
      console.log(this.ruleForm.name)
      this.spot = value[0] + '--' + value[1]
    },
    datachange (value) {
      this.Selectdata = value
    },
    handleExceed (files, fileList) {
      this.$message.warning('只能选择1个文件!')
    },
    submitUpload () {
      var that = this
      setTimeout(function () {
        if (that.$refs.upload.$children[0].fileList.length === 1) {
          that.$refs.upload.submit()
        } else {
          that.$message({
            type: 'error',
            showClose: true,
            duration: 3000,
            message: '请选择文件!'
          })
        }
      }, 100)
    },
    onChange (file) {
      var that = this
      var fileName = file.name.substring(file.name.lastIndexOf('.') + 1)
      if (fileName !== 'png' && fileName !== 'jpg') {
        that.$message({
          type: 'error',
          showClose: true,
          duration: 3000,
          message: '文件类型错误!'
        })
        return false
      }
    },
    beforeUpload (file) {
      var that = this
      var fileSize = file.size
      if (fileSize > 1048576) {
        that.$message({
          type: 'error',
          showClose: true,
          duration: 3000,
          message: '文件大于1M!'
        })
        return false
      }
      that.downloadLoading = that.$loading({
        lock: true,
        text: '数据导入中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,0.7)'
      })
      let fd = new FormData()
      fd.append('file', file)
      fd.append('_t1', new Date())
      // this.axios({
      //   method: 'post',
      //   url: '/api/hello'
      // }).then(function (response) {
      //   console.log(response)
      // }).catch(function (error) {
      //   console.log(error)
      // })
      // this.axios({
      //   method: 'post',
      // url: '/upload/' + new Date().getTime(),
      // url: '/api/upload',
      // data: fd
      // headers: {'Content-Type': 'multipart/form-data;boundary=' + new Date().getTime()}
      this.axios.post('/api/search/addsearch', {
        spot: this.spot,
        definiteSpot: that.ruleForm.site,
        kind: that.ruleForm.kind,
        goodsname: that.ruleForm.goodsname,
        Selectdata: this.Selectdata,
        name: that.ruleForm.name,
        phonenumber: that.ruleForm.phonenumber,
        wechat: that.ruleForm.wechat,
        reward: that.ruleForm.reward,
        remark: that.ruleForm.remark,
        img: fd
      }).then(rsp => {
        that.downloadLoading.close()
        let resp = rsp.data
        if (resp.resultCode === 200) {
          that.$message.success(resp.resultMsg)
        } else {
          that.$message({
            type: 'error',
            showClose: true,
            duration: 60000,
            message: resp.resultMsg
          })
        }
      }).catch(error => {
        that.downloadLoading.close()
        that.$message({
          type: 'error',
          showClose: true,
          duration: 60000,
          message: '请求失败! error:' + error
        })
      })
      return false
    }
  }
}
</script>

<style scoped>
.backgroundImg{
    /* background-image: url(../../assets/back.png); */
    position: absolute;
    top: 0;
    left: 0;
    background-position: center 0;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    /* background-size: 100% 100%; */
    /* -webkit-background-size: 100% 100%; */
    /* -moz-background-size: 100% 100%; */
}
.search{
    width: 700px;
    position: relative;
    left: 50%;
    margin-left: -350px;
    border: 1px solid #ccc;
    border-style: none solid;
    animation:search 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
}
.title{
    height: 80px;
    background-color: #CA2E3B;
    color: #CCCCCC;
    text-align: center;
    line-height: 80px;
}
.titleWord{
    font-size: 20px;
    color: #fff;
}
.searchForm{
    background-color: #fff;
    padding: 30px;
}
@keyframes search{
  0% {
      opacity: 0;
      transform: translateX(2000px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
}
</style>
