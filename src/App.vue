<template>
  <div id="app" :class="{'visible': poll.results.length > 0}">
    <h2>{{poll.question}}</h2>
    <div class="reply" v-for="(item, index) in poll.results" :key="index">
      <div class="reply-header">
        <p>{{item.word}}</p>
        <p>{{item.count}} Votes</p>
      </div>
      <div class="reply-body">
        <div class="result-bar-bg">
          <div class="result-bar" :style="{width: item.percentage + '%' }"></div>
        </div>
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
      poll: {
        question: '',
        results: []
      }
    }
  },
  sockets: {
    results: function(data) {
      this.poll = data
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
  opacity: 0;
  transition: opacity .3s;
  font-size: 24px;
}
.visible {
  opacity: 1 !important;
}
p {
  font-weight: bold;
}
.result-bar{
  min-height: 45px;
  transition: width .3s;
}
.result-bar:nth-child(even) {
  background-color: #52734d;
}
.result-bar:nth-child(odd) {
  background-color: #91c788;
}
.result-bar-bg {
  width: 100%;
  background-color: lightgray;
  height: 100%;
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
