<template>
    <div class="content">
        <div class="btn">
            <div class="pubbtn" @click="search"><img src="../../assets/search2.svg" alt="search" /><span class="buttonWord">发布寻物</span></div>
            <div class="pubbtn" @click="money"><img src="../../assets/money.svg" alt="money" /><span class="buttonWord">发布招领</span></div>
            <div class="pubbtn" @click="pet"><img src="../../assets/pet.svg" alt="pet" /><span class="buttonWord">&nbsp;发布寻宠</span></div>
            <div class="pubbtn" @click="person"><img src="../../assets/person.svg" alt="person" /><span class="buttonWord">发布寻人</span></div>
        </div>
        <div class="carousel">
            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="item in imgbox" :key="item.id">
                    <img :src="item.idView">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="middle btn">
            <div class="lefttop all left">
                <div>
                    <h2>失物招领</h2>
                    <el-divider content-position="left"><span class="divider">THE LOST THING</span></el-divider>
                    <span v-for='(index, item) of someSearch' :key="'span'+item">
                      <div class="everyMessage">
                        <div class="messageNumber">{{item + 1}}</div>
                        <div class="messageTitle" @click="innerContent(index.id)"><span v-if="index.finish === '已完成'">【{{index.finish}}】</span>{{index.title}}</div>
                        <div class="messageTime">{{index.time}}</div>
                      </div>
                    </span>
                    <div class="center"><el-button round @click="toSearch">查看更多</el-button></div>
                </div>
            </div>
            <div class="righttop all right">
                <div>
                    <h2>寻物启事</h2>
                    <el-divider content-position="left"><span class="divider">LOOKING FOR SOMETHING</span></el-divider>
                    <span v-for='(index, item) of someMoney' :key="'span'+item">
                      <div class="everyMessage">
                        <div class="messageNumber">{{item + 1}}</div>
                        <div class="messageTitle" @click="innerContent2(index.id)"><span v-if="index.finish === '已完成'">【{{index.finish}}】</span>{{index.title}}</div>
                        <div class="messageTime">{{index.time}}</div>
                      </div>
                    </span>
                    <div class="center"><el-button round @click="toMoney">查看更多</el-button></div>
                </div>
            </div>
            <div class="leftbottom all left">
                <div>
                    <h2>寻宠启示</h2>
                    <el-divider content-position="left"><span class="divider">LOOKING FOR PET</span></el-divider>
                    <span v-for='(index, item) of somePet' :key="'span'+item">
                      <div class="everyMessage">
                        <div class="messageNumber">{{item + 1}}</div>
                        <div class="messageTitle" @click="innerContent3(index.id)"><span v-if="index.finish === '已完成'">【{{index.finish}}】</span>{{index.title}}</div>
                        <div class="messageTime">{{index.time}}</div>
                      </div>
                    </span>
                    <div class="center"><el-button round @click="toPet">查看更多</el-button></div>
                </div>
            </div>
            <div class="rightbottom all right">
                <div>
                    <h2>寻人启事</h2>
                    <el-divider content-position="left"><span class="divider">LOOKING FOR PEOPLE</span></el-divider>
                    <span v-for='(index, item) of somePerson' :key="'span'+item">
                      <div class="everyMessage">
                        <div class="messageNumber">{{item + 1}}</div>
                        <div class="messageTitle" @click="innerContent4(index.id)"><span v-if="index.finish === '已完成'">【{{index.finish}}】</span>{{index.title}}</div>
                        <div class="messageTime">{{index.time}}</div>
                      </div>
                    </span>
                    <div class="center"><el-button round @click="toPerson">查看更多</el-button></div>
                </div>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
  data () {
    return {
      pageSize: 10,
      someSearch: [],
      someMoney: [],
      somePet: [],
      somePerson: [],
      imgbox: [{id: 0, idView: require('../../assets/lost1.jpg')},
        {id: 1, idView: require('../../assets/lost2.jpg')},
        {id: 2, idView: require('../../assets/lost3.jpg')}]
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    },
    money () {
      this.$router.push('/money')
    },
    pet () {
      this.$router.push('/pet')
    },
    person () {
      this.$router.push('/person')
    },
    toSearch () {
      this.$router.push('/allSearch')
    },
    toMoney () {
      this.$router.push('/allMoney')
    },
    toPet () {
      this.$router.push('/allPet')
    },
    toPerson () {
      this.$router.push('/allPerson')
    },
    getsomeSearch () {
      this.axios.post('/api/search/getSearchbyFirstKind').then(res => {
        this.someSearch = res.data.slice(0, this.pageSize)
      })
    },
    getsomeMoney () {
      this.axios.post('/api/search/getSearchbySecondKind').then(res => {
        this.someMoney = res.data.slice(0, this.pageSize)
      })
    },
    getsomePet () {
      this.axios.post('/api/search/getSearchbyThirdKind').then(res => {
        this.somePet = res.data.slice(0, this.pageSize)
      })
    },
    getsomePerson () {
      this.axios.post('/api/search/getSearchbyForthKind').then(res => {
        this.somePerson = res.data.slice(0, this.pageSize)
      })
    },
    innerContent (id) {
      this.$router.push({
        path: '/innerContent',
        name: 'innerContent',
        params: {
          searchID: id
        }
      })
    },
    innerContent2 (id) {
      this.$router.push({
        path: '/innerContent2',
        name: 'innerContent2',
        params: {
          moneyID: id
        }
      })
    },
    innerContent3 (id) {
      this.$router.push({
        path: '/innerContent3',
        name: 'innerContent3',
        params: {
          petID: id
        }
      })
    },
    innerContent4 (id) {
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
    this.getsomeSearch()
    this.getsomeMoney()
    this.getsomePet()
    this.getsomePerson()
  }
}
</script>

<style scoped>
.btn{
    width: 1000px;
    left: 50%;
    position: relative;
    margin-left: -500px;
}
.pubbtn{
    width: 194px;
    height: 50px;
    background-color: #CA2E3B;
    font-size: 20px;
    color: #fff;
    margin: 30px 28px;
    float: left;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
}
.pubbtn:hover{
    background-color: #D35561;
}
img{
    position: absolute;
    top: 40px;
}
.buttonWord{
    padding-left: 30px;
}
.carousel{
    width: 1000px;
    left: 50%;
    position: absolute;
    margin-left: -500px;
    top: 280px;
}
.middle{
    top: 320px;
}
.all{
    width:450px;
    height:500px;
}
.left{
    float: left;
}
.right{
    float: right;
}
h2{
    font-size: 25px;
    font-weight: 200;
}
.divider{
    color:grey;
}
.el-divider--horizontal {
    margin: 18px 0 15px;
}
.everyMessage{
    height: 38px;
}
.messageNumber{
    float: left;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    background-color: #dd5d69;
    color: #fff;
    position: relative;
    top: 9px;
}
.messageTime{
    float: right;
    font-size: 12px;
    color: #999;
    line-height: 38px;
}
.messageTitle{
    float: left;
    color: #585858;
    font-size: 16px;
    width: 310px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 38px;
    padding-left: 5px;
    cursor: pointer;
}
.messageTitle:hover{
    text-decoration: underline;
    color: #333;
}
.center{
    text-align: center;
}
</style>
