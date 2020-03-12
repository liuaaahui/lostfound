<template>
  <div class="reportControl">
    <h1>展示举报信息</h1>
    <div class="reportTable">
      <el-table :data="allReport" style="width: 100%" height="500">
        <el-table-column prop="phonenumber" label="举报手机" min-width="200px"></el-table-column>
        <el-table-column prop="informer" label="举报人" min-width="170px"></el-table-column>
        <el-table-column prop="time" label="举报时间" min-width="150px"></el-table-column>
        <el-table-column prop="state" label="状态" min-width="150px"></el-table-column>
        <el-table-column fixed="right" label="操作" min-width="80px">
          <template slot-scope="scope">
            <el-button @click="finish(scope.row)" type="text" size="small">完成</el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="80px">
          <template slot-scope="scope">
            <el-button @click="deleterow(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allReport: []
    }
  },
  methods: {
    getallReport () {
      this.axios.post('/api/report/getAllReport').then((res) => {
        this.allReport = res.data
      })
    },
    finish (row) {
      console.log(row)
      this.axios.get('/api/report/updatebyID', {
        params: {
          id: row.Id
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
        this.axios.post('/api/report/getAllReport').then((res) => {
          this.allSearch = res.data
        })
      })
    },
    deleterow (row) {
      this.axios.get('/api/report/deletebyID', {
        params: {
          id: row.Id
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
        this.axios.post('/api/report/getAllReport').then((res) => {
          this.allSearch = res.data
        })
      })
    }
  },
  mounted () {
    this.getallReport()
  }
}
</script>

<style scoped>
h1{
    font: 27px/60px Helvetica,Arial,'宋体';
    letter-spacing: 5px;
    font-weight: bold;
    text-align: center;
}
</style>
