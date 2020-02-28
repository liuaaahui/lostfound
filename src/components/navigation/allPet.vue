<template>
  <div class="top">
    <v-head></v-head>
    <div class="middleContent">
      <span v-for='(index, item) of dataShow' :key="'span'+item">
        <div class="everyPet">
          <div class="position">
            <div class="petleft"><img :src="index.img" alt="img" class="petimg" /></div>
            <div class="petleft petpadding">
              <div class="pettitle" @click="innerContent(index.Id)">在{{index.definiteSpot}}丢失{{index.goodsname}}</div>
              <div class="petcontent">所在城市 ：{{index.spot}}</div>
              <div class="petcontent">发布时间 ：{{index.time}}</div>
              <div class="petcontent">信息类型 ：寻宠启示</div>
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
      allPet: [],
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
      return this.allPet.length
    },
    getallPet () {
      this.axios.post('/api/pet/allPet').then(res => {
        this.allPet = res.data
        this.totalData = this.allPet.length
        this.pageNum = Math.ceil(this.allPet.length / this.pageSize) || 1
        for (let i = 0; i < this.pageNum; i++) {
          this.totalPage[i] = this.allPet.slice(this.pageSize * i, this.pageSize * (i + 1))
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
        path: '/innerContent3',
        name: 'innerContent3',
        params: {
          petID: id
        }
      })
    }
  },
  mounted () {
    this.getallPet()
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
.petimg{
    width: 160px;
    height: 120px;
}
.everyPet{
    height: 160px;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
}
.petleft{
  float: left;
}
.petpadding{
    padding-left: 20px;
}
.position{
    padding: 20px;
}
.pettitle{
    word-wrap: break-word;
    word-break: break-all;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    cursor: pointer;
}
.petcontent{
    font-size: 14px;
    color: #777;
    line-height: 20px
}
.pagination{
    padding: 10px;
    text-align: center;
}
</style>
