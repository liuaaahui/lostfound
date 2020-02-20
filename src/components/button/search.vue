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
            <el-option label="证件" value="shanghai"></el-option>
            <el-option label="首饰" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="goodsname">
          <el-input v-model="ruleForm.goodsname" placeholder="物品名称"></el-input>
        </el-form-item>
        <el-form-item label="丢失时间" required>
            <el-form-item prop="date">
              <el-date-picker type="date" placeholder="点击选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
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
          <button>选择文件</button>
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
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
        ],
        uploadImg: [
          { required: true, message: '请选择一张照片以供参考', trigger: 'blur' }
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
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
