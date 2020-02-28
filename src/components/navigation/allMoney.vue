<template>
  <div class="top">
    <v-head></v-head>
    <div class="middleContent">
      <span v-for='(index, item) of dataShow' :key="'span'+item">
        <div class="everyMoney">
          <div class="position">
            <div class="moneyleft"><img :src="index.img" alt="img" class="moneyimg" /></div>
            <div class="moneyleft moneypadding">
              <div class="moneytitle" @click="innerContent(index.Id)">在{{index.definiteSpot}}丢失{{index.goodsname}}</div>
              <div class="moneycontent">所在城市 ：{{index.spot}}</div>
              <div class="moneycontent">发布时间 ：{{index.time}}</div>
              <div class="moneycontent">信息类型 ：寻物启事</div>
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
      allMoney: [],
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
      return this.allMoney.length
    },
    getallMoney () {
      this.axios.post('/api/money/allMoney').then(res => {
        this.allMoney = res.data
        this.totalData = this.allMoney.length
        this.pageNum = Math.ceil(this.allMoney.length / this.pageSize) || 1
        for (let i = 0; i < this.pageNum; i++) {
          this.totalPage[i] = this.allMoney.slice(this.pageSize * i, this.pageSize * (i + 1))
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
        path: '/innerContent2',
        name: 'innerContent2',
        params: {
          moneyID: id
        }
      })
    }
  },
  mounted () {
    this.getallMoney()
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
.moneyimg{
    width: 160px;
    height: 120px;
}
.everyMoney{
    height: 160px;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
}
.moneyleft{
  float: left;
}
.moneypadding{
    padding-left: 20px;
}
.position{
    padding: 20px;
}
.moneytitle{
    word-wrap: break-word;
    word-break: break-all;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    cursor: pointer;
}
.moneycontent{
    font-size: 14px;
    color: #777;
    line-height: 20px
}
.pagination{
    padding: 10px;
    text-align: center;
}
</style>
