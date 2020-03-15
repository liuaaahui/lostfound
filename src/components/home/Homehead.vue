<template>
    <div class="head">
      <el-button round class="elbutton" @click="login" v-if="isLogin">登录</el-button>
      <span class="loginMessage" v-else>欢迎您，{{$store.state.userinfo.nickname}} | <span @click="exit" class="exitbutton">退出登录</span></span>
      <h1>失物招领</h1>
      <h2>lost and found</h2>
      <h2>———————&nbsp;&nbsp;<span class="innerWord"> 共同见证 失而复得的意义 </span>&nbsp;&nbsp;———————</h2>
      <div class="menu">
        <div class="inmenu">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#CA2E3B" text-color="#fff">
            <el-menu-item index="1" @click="home">首页</el-menu-item>
            <el-menu-item index="2" @click="allSearch">失物招领</el-menu-item>
            <el-menu-item index="3" @click="allMoney">寻物启事</el-menu-item>
            <el-menu-item index="4" @click="allPet">寻宠启事</el-menu-item>
            <el-menu-item index="5" @click="allPerson">寻人启事</el-menu-item>
            <el-menu-item index="6" @click="resist">抗击疫情</el-menu-item>
            <el-menu-item index="7" @click="allMessage">市民声音</el-menu-item>
            <el-menu-item index="8" @click="relate">关于我们</el-menu-item>
          </el-menu>
        </div>
        <img src="../../assets/search.svg" alt="search" />
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      is: this.$store.state.isLogin,
      isLogin: ''
    }
  },
  methods: {
    home () {
      this.$router.replace('/').catch(data => { })
    },
    allSearch () {
      this.$router.replace('/allSearch').catch(data => { })
    },
    allMoney () {
      this.$router.replace('/allMoney').catch(data => { })
    },
    allPet () {
      this.$router.replace('/allPet').catch(data => { })
    },
    allPerson () {
      this.$router.replace('/allPerson').catch(data => { })
    },
    resist () {
      this.$router.replace('/resist').catch(data => { })
    },
    allMessage () {
      this.$router.replace('/allMessage').catch(data => { })
    },
    relate () {
      this.$router.replace('/relate').catch(data => { })
    },
    login () {
      this.$router.replace('/login').catch(data => { })
    },
    exit () {
      localStorage.clear()
      this.$store.commit('CHECK_LOGIN', '0')
      this.$router.replace('/').catch(data => { })
      this.$router.go(0)
    }
  },
  created () {
    if (this.is === '1') {
      this.isLogin = false
    } else {
      this.isLogin = true
    }
  }
}
</script>

<style scoped>
.head{
  height: 200px;
  width: 100%;
  background-color: #CA2E3B;
  box-shadow: 0 2px 1px rgba(0,0,0,.2);
}
.elbutton{
    float: right;
    position: relative;
    top: 25px;
    right: 50px;
}
h1{
  color: #F4E5E6;
  font: 33px/33px Helvetica,Arial,'宋体';
  font-weight: bold;
  text-align: center;
  padding: 45px 0 2px 0;
}
h2{
  color: #F4E5E6;
  font: 16px/16px Helvetica,Arial,'宋体';
  text-align: center;
  padding: 0 0 16px 0;
}
.innerWord{
  color: #FFFFFF;
}
.el-menu-item{
  height: 50px;
  padding: 0 13px;
  font-size: 16px;
}
.menu{
  width: 740px;
  height: 50px;
  position: relative;
  left: 50%;
  margin-left: -370px;
  bottom: -6px;
}
.inmenu{
  float: left;
  width: 688px;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid transparent;
  color: #fff;
}
.el-menu--horizontal>.el-menu-item {
  height: 50px;
  line-height: 50px;
}
img{
  float: right;
  width: 25px;
  height: 25px;
  padding: 10px 5px;
  cursor: pointer;
}
.loginMessage{
  color: #fff;
  position: absolute;
  top: 30px;
  left: 70px;
  font-size: 14px;
}
.exitbutton{
  cursor: pointer;
}
</style>
