<template>
  <div class="top">
    <v-head></v-head>
    <div class="middleContent">
      <span v-for='(index, item) of newsList' :key="'span'+item">
        <div class="everyNews">
          <div class="position">
            <div class="newsleft"><img src="../../assets/news.jpg" alt="news" class="newsimg" /></div>
            <div class="newsleft newspadding">
              <div class="newstitle"><a :href=index.sourceUrl target="_blank">{{index.title}}</a></div>
              <div class="newscontent">发布时间 ：{{index.pubDateStr}}</div>
              <div class="newscontent limitnews">主要信息 ：{{index.summary}}</div>
              <div class="newscontent">来自：{{index.infoSource}}</div>
            </div>
          </div>
        </div>
      </span>
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
  },
  data () {
    return {
      newsList: []
    }
  },
  methods: {
    getNews () {
      var api = 'http://api.tianapi.com/txapi/ncov/index?key=f4a13c0f8f4e05a5eed41b24d5513329'
      this.axios.get(api).then((res) => {
        this.newsList = res.data.newslist[0].news
        // console.log(this.newsList)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getNews()
  }
}
</script>

<style scoped>
.middleContent{
    width: 1000px;
    left: 50%;
    position: relative;
    margin-left: -500px;
}
.newsimg{
    width: 160px;
    height: 120px;
}
.everyNews{
    height: 160px;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
}
.newsleft{
  float: left;
}
.newspadding{
    padding-left: 20px;
}
.position{
    padding: 20px;
}
.newstitle{
    word-wrap: break-word;
    word-break: break-all;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
}
a{
    color: #000;
}
.newscontent{
    font-size: 14px;
    color: #777;
    line-height: 20px
}
.limitnews{
    width: 750px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;
    white-space: nowrap;
}
</style>
