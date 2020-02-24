<template>
  <div class="member">
    <v-head></v-head>
    <div class="personal">
      <el-divider content-position="left"><div class="formTitle">会员信息</div></el-divider>
      <div class="block"></div>
      <span class="firstmar">会员账号：</span>
      <el-divider></el-divider>
      <span>会员手机：</span>
    </div>
    <div class="information personal">
      <el-divider content-position="left"><div class="formTitle">我的寻物招领信息</div></el-divider>
      <div class="block"></div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题" min-width="200px"></el-table-column>
        <el-table-column prop="date" label="发表日期" min-width="200px"></el-table-column>
        <el-table-column prop="operation" label="操作" min-width="200px"></el-table-column>
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
      tableData: []
    }
  }
}
</script>

<style>
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
