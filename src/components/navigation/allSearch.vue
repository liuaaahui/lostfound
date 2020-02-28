<template>
  <div class="top">
    <v-head></v-head>
    <div class="middleContent">
      <span v-for='(index, item) of dataShow' :key="'span'+item">
        <div class="everySearch">
          <div class="position">
            <div class="searchleft"><img :src="index.img" alt="img" class="searchimg" /></div>
            <div class="searchleft searchpadding">
              <div class="searchtitle" @click="innerContent(index.Id)">在{{index.definiteSpot}}拾到{{index.goodsname}}</div>
              <div class="searchcontent">所在城市 ：{{index.spot}}</div>
              <div class="searchcontent">发布时间 ：{{index.time}}</div>
              <div class="searchcontent">信息类型 ：失物招领</div>
            </div>
          </div>
        </div>
      </span>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" @prev-click="prePage" @next-click="nextPage" :total="totalData" :page-size="pageSize"></el-pagination>
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
  },
  data () {
    return {
      allSearch: [],
      totalData: 0,
      totalPage: [],
      pageSize: 6,
      pageNum: 1,
      dataShow: '',
      currentPage: 0
    }
  },
  methods: {
    totalnum () {
      return this.allSearch.length
    },
    getallSearch () {
      this.axios.post('/api/search/allSearch').then(res => {
        this.allSearch = res.data
        this.totalData = this.allSearch.length
        this.pageNum = Math.ceil(this.allSearch.length / this.pageSize) || 1
        for (let i = 0; i < this.pageNum; i++) {
          this.totalPage[i] = this.allSearch.slice(this.pageSize * i, this.pageSize * (i + 1))
        }
        this.dataShow = this.totalPage[this.currentPage]
      })
    },
    nextPage () {
      if (this.currentPage === this.pageNum - 1) return
      this.dataShow = this.totalPage[++this.currentPage]
    },
    prePage () {
      if (this.currentPage === 0) return
      this.dataShow = this.totalPage[--this.currentPage]
    },
    innerContent (id) {
      this.$router.push({
        path: '/innerContent',
        name: 'innerContent',
        params: {
          searchID: id
        }
      })
    }
  },
  mounted () {
    this.getallSearch()
  }
}
</script>

<style scoped>
.middleContent{
    width: 1000px;
    left: 50%;
    position: relative;
    margin-left: -500px;
    min-height: 380px;
}
.searchimg{
    width: 160px;
    height: 120px;
}
.everySearch{
    height: 160px;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
}
.searchleft{
  float: left;
}
.searchpadding{
    padding-left: 20px;
}
.position{
    padding: 20px;
}
.searchtitle{
    word-wrap: break-word;
    word-break: break-all;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    cursor: pointer;
}
.searchcontent{
    font-size: 14px;
    color: #777;
    line-height: 20px
}
.pagination{
    padding: 10px;
    text-align: center;
}
</style>
