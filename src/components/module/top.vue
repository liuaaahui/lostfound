<template>
  <div class="toptop">
    <img src="../../assets/member.svg" alt="member" class="memberImg floleft"/>
    <span class="memberTitle floleft">会员中心</span>
    <span class="memberFunc"><span class="word" @click="home">【返回首页】</span></span>
    <span class="memberFunc"><span class="word" @click="exit">退出</span></span>
  </div>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.replace('/')
    },
    exit () {
      localStorage.clear()
      this.$store.commit('CHECK_LOGIN', '0')
      this.$router.push('/')
      // this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.toptop{
    height: 70px;
    width: 100%;
    background-color: #CA2E3B;
    line-height: 70px;
    color: #fff;
    font-size: 15px;
}
.memberImg{
    padding: 20px 10px 20px 20px;
}
.memberTitle{
    font-size: 22px;
}
.floleft{
    float: left;
}
.memberFunc{
    float: right;
    padding: 0 15px;
}
.word{
    cursor: pointer;
}
</style>
