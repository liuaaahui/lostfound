<template>
  <div class="top">
    <v-head></v-head>
    <div class="middleContent">
      <div class="innercontent">
        <div><h1><span v-if="aPet.finish === '已完成'">【{{aPet.finish}}】</span>{{aPet.title}}</h1></div>
        <div class="subhead">栏目：寻宠启事 发布时间：{{aPet.time}}</div>
        <el-divider content-position="left"><div class="formTitle">信息详情</div></el-divider>
        <div class="buttomSolid"><img src="../../assets/phone.svg" alt="phone" class="iconimg" />联系电话：<span v-if="trueStatus">{{aPet.phonenumber}}</span><span class="warningMess" v-else>【对不起，您无权查看电话信息】</span></div>
        <div class="buttomSolid"><img src="../../assets/kind.svg" alt="kind" class="iconimg" />物品种类：{{aPet.kindOrSex}}</div>
        <div class="buttomSolid"><img src="../../assets/spot.svg" alt="spot" class="iconimg" />丢失地点：{{aPet.spot}}{{aPet.definiteSpot}}</div>
        <div class="buttomSolid"><img src="../../assets/name.svg" alt="name" class="iconimg" />联系人员：{{aPet.contact}}</div>
        <div class="buttomSolid"><img src="../../assets/time.svg" alt="time" class="iconimg" />丢失时间：{{aPet.selectdata}}</div>
        <div class="buttomSolid"><img src="../../assets/reward.svg" alt="reward" class="iconimg" />酬谢金额：{{aPet.reward}}</div>
        <div class="buttomSolid bigline clearfix"><div class="petleft"><img src="../../assets/img.svg" alt="img" class="iconimg" />物品图片：</div><img :src="aPet.img" alt="img" class="petimg" /></div>
        <div class="buttomSolid"><img src="../../assets/remark.svg" alt="remark" class="iconimg" />备注内容：{{aPet.remark}}</div>
      </div>
    </div>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
import head from '../home/Homehead'
import bottom from '../module/footer'
export default {
  components: {
    'v-head': head,
    'v-bottom': bottom
  },
  data () {
    return {
      aPet: [],
      status: this.$store.state.userinfo.status,
      trueStatus: ''
    }
  },
  methods: {
    getinnerContent () {
      this.axios.get('/api/search/SearchbyID', {
        params: {
          id: this.$route.params.petID
        }
      }).then(res => {
        this.aPet = res.data
      })
    }
  },
  mounted () {
    this.getinnerContent()
  },
  created () {
    if (this.status === '0') {
      this.trueStatus = false
    } else {
      this.trueStatus = true
    }
  }
}
</script>

<style scoped>
.middleContent{
    width: 1000px;
    left: 50%;
    position: relative;
    margin-left: -500px;
}
.innercontent{
    padding: 20px 20px 70px 20px;
    text-align: left;
}
h1{
    font-size: 24px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px dotted #999;
}
.subhead{
    border-style: solid;
    border-width: 1px 1px 1px 5px;
    border-color: #e6e6e6;
    margin: 20px 0 30px 0;
    padding: 15px;
    font-size: 14px;
    line-height: 22px;
}
.el-divider--horizontal {
    margin: 30px 0 6px 0;
}
.formTitle{
    font-size: 20px;
}
.buttomSolid{
    line-height: 20px;
    padding: 12px;
    font-size: 13px;
    border-bottom: 1px solid #e6e6e6;
    color: #333333;
}
.petimg{
    width: 300px;
    height: 400px;
    float: left;
}
.bigline{
    line-height: 402px;
}
.petleft{
    float: left;
}
.iconimg{
    position: relative;
    top: 6px;
}
.warningMess{
  color: red;
}
</style>
