<template>
  <div id="app">
  <Myhead />
    <router-view></router-view>
  </div>
</template>

<script>
import Myhead from '@/components/Myhead.vue'
export default {
  name: 'App',
  components: Myhead
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
