<template>
  <div class="member">
    <v-head></v-head>
    <div class="personal">
      <el-divider content-position="left"><div class="formTitle">会员信息</div></el-divider>
      <div class="block"></div>
      <span class="firstmar">会员账号：{{$store.state.userinfo.nickname}}</span>
      <el-divider></el-divider>
      <span>会员手机：{{$store.state.userinfo.username}}</span>
    </div>
    <div class="information personal">
      <el-divider content-position="left"><div class="formTitle">我的寻物招领信息</div></el-divider>
      <div class="block"></div>
      <el-table :data="userMessage" style="width: 100%">
        <el-table-column prop="title" label="标题" min-width="200px"></el-table-column>
        <el-table-column prop="time" label="发表日期" min-width="200px"></el-table-column>
        <el-table-column prop="reward" label="酬金" min-width="200px"></el-table-column>
      </el-table>
    </div>
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
      userMessage: [[]]
    }
  },
  methods: {
    getuserMessage () {
      this.axios.get('/api/search/getSearchByuser', {
        params: {
          user: this.$store.state.userinfo.username
        }
      }).then((res) => {
        this.userMessage = res.data
        this.axios.get('/api/money/getMoneyByuser', {
          params: {
            user: this.$store.state.userinfo.username
          }
        }).then((res1) => {
          this.userMessage = this.userMessage.concat(res1.data)
          this.axios.get('/api/pet/getPetByuser', {
            params: {
              user: this.$store.state.userinfo.username
            }
          }).then((res2) => {
            this.userMessage = this.userMessage.concat(res2.data)
            this.axios.get('/api/person/getPersonByuser', {
              params: {
                user: this.$store.state.userinfo.username
              }
            }).then((res3) => {
              this.userMessage = this.userMessage.concat(res3.data)
            })
          })
        })
      })
    }
  },
  mounted () {
    this.getuserMessage()
  }
}
</script>

<style  scoped>
.personal{
    padding: 20px 20px 10px;
    font-size: 15px;
}
.el-divider--horizontal {
    margin: 15px 0;
}
.formTitle{
    font-size: 20px;
}
.firstmar{
    padding-top: 10px;
}
.block{
    height: 10px;
}
</style>
