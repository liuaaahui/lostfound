<template>
<div class="backgroundImg">
  <div class="pet">
    <div class="title">
        —————————— &nbsp;&nbsp;&nbsp;&nbsp;<span class="titleWord"> 发布寻宠启示 </span>&nbsp;&nbsp;&nbsp;&nbsp; ——————————
    </div>
    <div class="petForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" enctype="multipart/form-data">
        <el-form-item label="丢失地点" prop="selectedOptions">
          <el-cascader :options="options" v-model="ruleForm.selectedOptions" @change="handleChange" :separator="' '"></el-cascader>
        </el-form-item>
        <el-form-item prop="site">
          <el-input v-model="ruleForm.site" placeholder="填写详细丢失地点"></el-input>
        </el-form-item>
        <el-form-item label="丢失宠物" prop="kind">
          <el-select v-model="ruleForm.kind" placeholder="请选择宠物种类">
            <el-option label="猫" value="猫"></el-option>
            <el-option label="狗" value="狗"></el-option>
            <el-option label="其他" value=" "></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="goodsname">
          <el-input v-model="ruleForm.goodsname" placeholder="宠物品种"></el-input>
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
        <el-form-item label="上传图片">
          <el-upload class="upload-demo"
                     ref="upload"
                     action="''"
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
      imgURL: '',
      gettime: '',
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
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let yy = new Date().getFullYear()
          let mm = new Date().getMonth() + 1
          let dd = new Date().getDate()
          let hh = new Date().getHours()
          let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
          let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
          this.gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
          this.submitUpload()
        } else {
          console.log('error!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleChange (value) {
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
      this.axios({
        method: 'post',
        url: '/api/upload/add',
        data: fd,
        headers: {'Content-Type': 'multipart/form-data;boundary=' + new Date().getTime()}
      }).then(rsp => {
        that.downloadLoading.close()
        if (rsp.data !== '上传失败') {
          this.imgURL = rsp.data
          this.axios.post('/api/pet/addPet', {
            spot: this.spot,
            definiteSpot: that.ruleForm.site,
            kind: that.ruleForm.kind,
            goodsname: that.ruleForm.goodsname,
            selectdata: this.Selectdata,
            name: that.ruleForm.name,
            phonenumber: that.ruleForm.phonenumber,
            wechat: that.ruleForm.wechat,
            reward: that.ruleForm.reward,
            remark: that.ruleForm.remark,
            img: this.imgURL,
            time: this.gettime
          }).then(res => {
            if (res.data === 1) {
              that.$message({
                type: 'success',
                showClose: true,
                duration: 3000,
                message: '发布成功!'
              })
            } else {
              that.$message({
                type: 'error',
                showClose: true,
                duration: 60000,
                message: '发布失败'
              })
            }
            this.$refs.ruleForm.resetFields()
          })
        } else {
          that.$message({
            type: 'error',
            showClose: true,
            duration: 60000,
            message: '图片上传出错'
          })
        }
      }).catch(error => {
        that.downloadLoading.close()
        that.$message({
          type: 'error',
          showClose: true,
          duration: 60000,
          message: '图片请求失败! error:' + error
        })
      })
      return false
    }
  }
}
</script>

<style scoped>
.pet{
    width: 700px;
    position: relative;
    left: 50%;
    margin-left: -350px;
    border: 1px solid #ccc;
    border-style: none solid;
    animation:pet 1s;
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
.petForm{
    background-color: #fff;
    padding: 30px;
}
@keyframes pet{
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
