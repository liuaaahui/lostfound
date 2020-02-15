<template>
    <div class="content">
        <div class="btn">
            <div class="pubbtn"><img src="../../assets/search2.svg" alt="search" /><span>发布寻物</span></div>
            <div class="pubbtn"><img src="../../assets/money.svg" alt="money" /><span>发布招领</span></div>
            <div class="pubbtn"><img src="../../assets/pet.svg" alt="pet" /><span>发布寻宠</span></div>
            <div class="pubbtn"><img src="../../assets/person.svg" alt="person" /><span>发布寻人</span></div>
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
                </div>
            </div>
            <div class="righttop all right">
                <div>
                    <h2>寻物启事</h2>
                    <el-divider content-position="left"><span class="divider">LOOKING FOR SOMETHING</span></el-divider>
                </div>
            </div>
            <div class="leftbottom all left">
                <div>
                    <h2>寻宠启示</h2>
                    <el-divider content-position="left"><span class="divider">LOOKING FOR PET</span></el-divider>
                </div>
            </div>
            <div class="rightbottom all right">
                <div>
                    <h2>寻人启事</h2>
                    <el-divider content-position="left"><span class="divider">LOOKING FOR PEOPLE</span></el-divider>
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
      imgbox: [{id: 0, idView: require('../../assets/lost1.jpg')},
        {id: 1, idView: require('../../assets/lost2.jpg')},
        {id: 2, idView: require('../../assets/lost3.jpg')}]
    }
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
    top: 37px;
}
span{
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
.lefttop{

}
h2{
    font-size: 25px;
    font-weight: 200;
}
.divider{
    color:grey;
}
</style>
