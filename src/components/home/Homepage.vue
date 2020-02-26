<template>
  <div class="homeHeight">
    <!-- <div><v-head></v-head></div>
    <div><v-content></v-content></div>
    <div><v-bottom></v-bottom></div> -->
    <v-head></v-head>
    <v-content></v-content>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
import head from '../home/Homehead'
import content from '../home/Homecontent'
import bottom from '../home/Homebottom'
export default {
  name: 'Homepage',
  components: {
    'v-head': head,
    'v-content': content,
    'v-bottom': bottom
  }
}
</script>

<style scoped>
.homeHeight{
  height: 1800px;
}
</style>
