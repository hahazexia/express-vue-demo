<template>
  <div id="app">
      Index 组件
      <img src="../../../assets/logo.png" alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
    async mounted () {
        const res = await axios.request({
            url: '/ajax/abc',
            method: 'POST'
        });
        console.log(res, 'res')
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
