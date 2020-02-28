<template>
  <div class="top">
    <v-head></v-head>
    <div class="middleContent">
      <span v-for='(index, item) of dataShow' :key="'span'+item">
        <div class="everyPerson">
          <div class="position">
            <div class="personleft"><img :src="index.img" alt="img" class="personimg" /></div>
            <div class="personleft personpadding">
              <div class="persontitle" @click="innerContent(index.Id)">{{index.personname}}{{index.personage}}岁在{{index.definiteSpot}}走失</div>
              <div class="personcontent">所在城市 ：{{index.spot}}</div>
              <div class="personcontent">发布时间 ：{{index.time}}</div>
              <div class="personcontent">信息类型 ：寻人启事</div>
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
      allPerson: [],
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
      return this.allPerson.length
    },
    getallPerson () {
      this.axios.post('/api/person/allPerson').then(res => {
        this.allPerson = res.data
        this.totalData = this.allPerson.length
        this.pageNum = Math.ceil(this.allPerson.length / this.pageSize) || 1
        for (let i = 0; i < this.pageNum; i++) {
          this.totalPage[i] = this.allPerson.slice(this.pageSize * i, this.pageSize * (i + 1))
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
        path: '/innerContent4',
        name: 'innerContent4',
        params: {
          personID: id
        }
      })
    }
  },
  mounted () {
    this.getallPerson()
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
.personimg{
    width: 160px;
    height: 120px;
}
.everyPerson{
    height: 160px;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
}
.personleft{
  float: left;
}
.personpadding{
    padding-left: 20px;
}
.position{
    padding: 20px;
}
.persontitle{
    word-wrap: break-word;
    word-break: break-all;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    cursor: pointer;
}
.personcontent{
    font-size: 14px;
    color: #777;
    line-height: 20px
}
.pagination{
    padding: 10px;
    text-align: center;
}
</style>
