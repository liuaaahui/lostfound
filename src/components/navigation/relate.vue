<template>
  <div class="top">
    <v-head></v-head>
    <div class="middleContent">
      <div class="relatecontent">
        <p>失物招领网是社会公益性网站。</p>
        <p>有人说，物品存在的意义是因为主人，只有在主人的身边，它们才有自己独特的记忆，一旦失去主人，再也无人赋予它们最独特的意义。</p>
        <p>火车站、汽车站、景点，总是会设置失物招领处，人们将拾得的物品存放在此，却极少有人前来将它领走，于是，它们就一直安静的停留在这里，直至最后被当作垃圾处理掉。</p>
        <p>失物招领网通过互联网+技术创新，集合各社区、治安岗亭、派出所、站台、网站等零散失物招领信息，统一发布渠道，并通过整合微博、微信、媒体等渠道强化信息传播，提高信息曝光率和浏览量，以增加招领成功机会为目的。</p>
        <p>失物招领网发布信息只需注册，即可把丢失和拾获物品的信息在网站发布，供失主及时查询。</p>
        <p>欢迎各个基层组织和个人以及志愿者加入到这一团队中来，让涓涓细流汇集成爱的海洋，帮助那些丢失物品物归原主。为社会精神文明建设与和谐进步、践行社会主义核心价值观“作出一份贡献！</p>
      </div>
    </div>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
import head from '../home/Homehead'
import bottom from '../module/footer'
export default {
  components: {
    'v-head': head,
    'v-bottom': bottom
  }
}
</script>

<style scoped>
.middleContent{
    width: 1000px;
    left: 50%;
    position: relative;
    margin-left: -500px;
    border: 1px solid #ccc;
    border-style: none solid;
}
.relatecontent{
    padding: 40px;
    line-height: 30px;
    text-indent: 1em;
}
</style>
