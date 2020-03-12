<template>
  <div class="searchControl">
    <h1>失物招领信息展示</h1>
    <div class="searchTable">
      <el-table :data="allSearch" style="width: 100%" height="500">
        <el-table-column prop="title" label="标题" min-width="200px"></el-table-column>
        <el-table-column prop="time" label="发表日期" min-width="170px"></el-table-column>
        <el-table-column prop="kind" label="类型" min-width="150px"></el-table-column>
        <el-table-column prop="finish" label="状态" min-width="150px"></el-table-column>
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
      allSearch: []
    }
  },
  methods: {
    getallSearch () {
      this.axios.post('/api/search/allSearch').then((res) => {
        this.allSearch = res.data
      })
    },
    finish (row) {
      console.log(row)
      this.axios.get('/api/search/updatebyID', {
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
        this.axios.post('/api/search/allSearch').then((res) => {
          this.allSearch = res.data
        })
      })
    },
    deleterow (row) {
      this.axios.get('/api/search/deletebyID', {
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
        this.axios.post('/api/search/allSearch').then((res) => {
          this.allSearch = res.data
        })
      })
    }
  },
  mounted () {
    this.getallSearch()
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
