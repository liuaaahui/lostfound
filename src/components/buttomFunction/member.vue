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
        <el-table-column prop="time" label="发表日期" min-width="170px"></el-table-column>
        <el-table-column prop="kind" label="类型" min-width="150px"></el-table-column>
        <el-table-column prop="finish" label="状态" min-width="150px"></el-table-column>
        <el-table-column fixed="right" label="操作" min-width="150px">
          <template slot-scope="scope">
            <el-button @click="finish(scope.row)" type="text" size="small">完成</el-button>
            <el-button @click="deleterow(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="查看" min-width="80px">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
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
      userMessage: []
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
      })
    },
    finish (row) {
      this.axios.get('/api/search/updatebyID', {
        params: {
          id: row.id
        }
      }).then(res => {
        if (res.data === 1) {
          this.$message({
            type: 'success',
            showClose: true,
            duration: 3000,
            message: '更新成功!'
          })
        } else {
          this.$message({
            type: 'error',
            showClose: true,
            duration: 60000,
            message: '更新失败!'
          })
        }
        this.axios.get('/api/search/getSearchByuser', {
          params: {
            user: this.$store.state.userinfo.username
          }
        }).then((res) => {
          this.userMessage = res.data
        })
      })
    },
    deleterow (row) {
      this.axios.get('/api/search/deletebyID', {
        params: {
          id: row.id
        }
      }).then(res => {
        if (res.data === 1) {
          this.$message({
            type: 'success',
            showClose: true,
            duration: 3000,
            message: '删除成功!'
          })
        } else {
          this.$message({
            type: 'error',
            showClose: true,
            duration: 60000,
            message: '删除失败!'
          })
        }
        this.axios.get('/api/search/getSearchByuser', {
          params: {
            user: this.$store.state.userinfo.username
          }
        }).then((res) => {
          this.userMessage = res.data
        })
      })
    },
    check (row) {
      let kind = row.kind
      if (kind === '失物招领') {
        this.$router.push({
          path: '/innerContent',
          name: 'innerContent',
          params: {
            searchID: row.id
          }
        })
      } else if (kind === '寻物启事') {
        this.$router.push({
          path: '/innerContent2',
          name: 'innerContent2',
          params: {
            moneyID: row.id
          }
        })
      } else if (kind === '寻宠启事') {
        this.$router.push({
          path: '/innerContent3',
          name: 'innerContent3',
          params: {
            petID: row.id
          }
        })
      } else {
        this.$router.push({
          path: '/innerContent4',
          name: 'innerContent4',
          params: {
            personID: row.id
          }
        })
      }
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
