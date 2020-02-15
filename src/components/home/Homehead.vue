<template>
  <div>
    <div class="head">
      <h1>失物招领</h1>
      <h2>lost and found</h2>
      <h2>———————&nbsp;&nbsp;<span class="innerWord"> 共同见证 失而复得的意义 </span>&nbsp;&nbsp;———————</h2>
      <div class="menu">
        <div class="inmenu">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#CA2E3B" text-color="#fff">
            <el-menu-item index="1" @click="home">首页</el-menu-item>
            <el-menu-item index="2" @click="home">失物招领</el-menu-item>
            <el-menu-item index="3" @click="home">寻物启事</el-menu-item>
            <el-menu-item index="4" @click="home">寻宠启事</el-menu-item>
            <el-menu-item index="5" @click="home">寻人启事</el-menu-item>
            <el-menu-item index="6" @click="home">政策法规</el-menu-item>
            <el-menu-item index="7" @click="home">市民声音</el-menu-item>
            <el-menu-item index="8" @click="home">关于我们</el-menu-item>
          </el-menu>
        </div>
        <img src="../../assets/search.svg" alt="search" />
      </div>
    </div>
    <v-content></v-content>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
import content from '../home/Homecontent'
import bottom from '../home/Homebottom'
export default {
  name: 'Homehead',
  components: {
    'v-content': content,
    'v-bottom': bottom
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // eslint-disable-next-line
      console.log(key, keyPath);
    },
    home () {
      this.$router.replace('/')
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
</style>
