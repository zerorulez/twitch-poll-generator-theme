<template>
  <div id="app" v-if="results.length > 0">
    <h1>Replys</h1>
    <div class="reply" v-for="(item, index) in results" :key="index">
      <div class="reply-header">
        <p>{{item.word}}</p>
        <p>{{item.count}} Votes</p>
      </div>
      <div class="reply-body">
        <div class="result-bar" :style="{width: item.percentage + '%' }"></div>
        <div class="percentage">
          <p>{{Math.trunc(item.percentage)}}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      results: []
    }
  },
  sockets: {
    results: function(data) {
      this.results = data
      console.log(this.results)
    }
  },
}
</script>

<style>
body {
  background-color: transparent;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.result-bar{
  min-height: 45px;
  background-color: yellowgreen;
}
.reply-header {
  display: flex;
  justify-content: space-between;
}
.reply-body {
  display: flex;
  justify-content: space-between;
}
.percentage {
  min-width: 50px;
  text-align: right;
}
</style>
