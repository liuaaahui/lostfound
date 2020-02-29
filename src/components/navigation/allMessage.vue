<template>
  <div class="top">
    <v-head></v-head>
    <div class="middleContent">
      <div class="allMessagecontent">
        <span v-for='(index, item) of allMessage' :key="'span'+item">
          <div class="everymessage">
            <div class="position">
              <div class="messageleft"><img src="../../assets/avatar.svg" alt="avatar" class="newsimg" /><span class="nick">未知网友</span></div>
              <div class="messagecontent messageleft">{{index.content}}</div>
              <div class="messagetime">{{index.time}}</div>
            </div>
          </div>
        </span>
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
      allMessage: []
    }
  },
  methods: {
    getallMessage () {
      this.axios.post('/api/message/allMessage').then(res => {
        this.allMessage = res.data
      })
    }
  },
  mounted () {
    this.getallMessage()
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
.allMessagecontent{
    /* padding: 40px; */
    line-height: 30px;
    text-indent: 1em;
    min-height: 300px;
}
.everymessage{
    width: 100%;
    height: 100px;
}
.position{
    padding: 20px;
}
.nick{
    position: relative;
    left: -51px;
    top: 16px;
    font-size: 14px;
    color: slategrey;
}
.messageleft{
    float: left;
}
.messagetime{
    float: right;
    line-height: 65px;
    font-size: 15px;
    color: rgb(84, 87, 90);
}
.messagecontent{
    line-height: 65px;
    position: relative;
    left: -42px;
}
</style>
