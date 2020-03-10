<template>
    <div class="bottom">
        <div class="foot">
            <span class="link">友情链接：<a href="http://www.rbjjz.com/" target="_blank">九江信息网</a><a href="http://www.diunal.com/" target="_blank">丢哪了</a><br><span class="inner">Copyright @ 失物招领网 www.shiwzl.com 咨询热线：1234567890</span></span>
            <span class="admin" @click="adminLogin">管理员进入：审核信息 修改信息</span>
        </div>
        <div class="blank"></div>
        <div class="fixation">
            <div class="icon">
                <div class="click right" @click="home"><img src="../../assets/home.svg" alt="home" /><br>&nbsp;&nbsp;&nbsp;<span class="word">首页</span></div>
                <div class="click right" @click="message"><img src="../../assets/message.svg" alt="message" /><br>&nbsp;&nbsp;&nbsp;<span class="word">留言</span></div>
                <div class="click right" @click="member"><img src="../../assets/people.svg" alt="people" /><br><span class="word">会员中心</span></div>
                <div class="click" @click="report"><img src="../../assets/report.svg" alt="report" /><br><span class="word">诈骗举报</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    adminLogin () {
      this.$router.replace('/adminLogin')
    },
    home () {
      this.$router.replace('/')
    },
    message () {
      this.$router.replace('/message')
    },
    member () {
      this.$router.replace('/member')
    },
    report () {
      this.$router.replace('/report')
    }
  }
}
</script>

<style scoped>
.foot{
    width: 100%;
    height: 80px;
    background-color: #F0F0F0;
    text-align: center;
    font-size: 12px;
}
.link{
    width: 100%;
    line-height: 25px;
    float: left;
    padding-top: 15px;
}
.inner{
    padding: 0 200px;
}
.admin{
    float: right;
    cursor: pointer;
    position: relative;
    bottom: 20px;
    padding-right: 77px;
}
.admin:hover{
    text-decoration: underline;
}

a{
    padding-left: 15px;
}
.blank{
    width: 100%;
    height: 81px;
}
.fixation{
    width: 100%;
    height: 80px;
    position: fixed;
    background-color:#fff;
    bottom: 0;
    border-top: 1px solid #eee;
    z-index: 9999;
}
.icon{
    width: 970px;
    height: 100%;
    left: 50%;
    position: relative;
    margin-left: -485px;
    cursor: pointer;
}
.click{
    float: left;
}
.right{
    margin-right: 241px;
}
img{
    padding: 10px 12px;
}
.click:hover{
    color: #C20C0C;
}
</style>
