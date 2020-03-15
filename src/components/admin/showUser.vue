<template>
  <div class="showUser">
    <h1 class="center">所有用户展示</h1>
    <div class="UserFrom">
      <el-table class="eltable" :data="user.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column  prop="username"  label="姓名(手机号)"  min-width="150px"  ></el-table-column>
        <el-table-column  prop="nickname"  label="昵称"  min-width="150px"  ></el-table-column>
        <el-table-column  prop="password"  label="密码"  min-width="150px"></el-table-column>
        <el-table-column  prop="status"  label="有无查看权限"  min-width="150px"></el-table-column>
        <el-table-column fixed="right" label="操作" min-width="150px">
          <template slot-scope="scope">
            <el-button @click="deleterow(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="center">
      <el-pagination layout="prev, pager, next" @current-change="current_change" :total="50" class="elpage"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: [],
      pagesize: 7,
      totalNumber: 0,
      currentPage: 1
    }
  },
  methods: {
    current_change: function (currentPage) {
      this.currentPage = currentPage
    },
    deleterow (row) {
      this.axios.get('/api/user/deleteUserbyID', {
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
        this.axios.post('/api/user/showUser').then(res => {
          this.user = res.data
        })
      })
    }
  },
  created () {
    this.axios.post('/api/user/showUser').then(res => {
      this.user = res.data
      this.totalNumber = this.user.length
    })
  }
}
</script>

<style scoped>
h1{
    font: 27px/60px Helvetica,Arial,'宋体';
    letter-spacing: 5px;
    font-weight: bold;
}
.center{
    text-align: center;
}
</style>>
