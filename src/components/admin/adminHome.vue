<template>
  <div class="adminHome">
    <div class="adminTop">
      <div class="topInner">
        <h1 class="adminTitle">失物招领后台管理</h1>
        <h2 class="littleadminTitle">lost and found backstage management</h2>
        <span class="admin"><img src="../../assets/admin.svg" alt="admin" />&nbsp;{{$store.state.auserinfo.username}}</span>
      </div>
    </div>
    <div class="adminLeft">
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#414141" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
            <el-menu-item-group >
              <router-link to="/adminHome" class="ahome"><el-menu-item index="1-1">查看用户</el-menu-item></router-link>
              <router-link to="/adminHome/addUser" class="ahome"><el-menu-item index="1-2">添加用户</el-menu-item></router-link>
            </el-menu-item-group>
        </el-submenu>
        <router-link to="/adminHome/searchControl" class="ahome">
          <el-menu-item index="2">
            <i class="el-icon-set-up"></i>
            <span slot="title">失物招领信息管理</span>
          </el-menu-item>
        </router-link>
        <router-link to="/adminHome/reportControl" class="ahome">
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">处理举报信息</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="4" @click="Aloginout()">
          <i class="el-icon-user"></i>
          <span slot="title">退出登录</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="adminRight">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'adminHome',
  methods: {
    Aloginout () {
      localStorage.clear()
      this.$store.commit('CHECK_ALOGIN', '0')
      this.$router.replace('/').catch(data => { })
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.adminTop{
    width: 100%;
    height: 12vh;
    background-color: #2B82E1;
    color: #fff;
}
.topInner{
    padding: 0 20px;
}
.adminTitle{
    font: 33px/33px Helvetica,Arial,'宋体';
    font-weight: bold;
    padding-top: 14px;
}
.littleadminTitle{
    font: 16px/16px Helvetica,Arial,'宋体';
}
.admin{
    float: right;
    position: relative;
    top: -30px;
}
.adminLeft{
    width: 22%;
    float: left;
}
.el-menu-vertical-demo{
    height: 88vh;
}
.adminRight{
    height: 86vh;
    width: 78%;
    float: right;
}
</style>>
