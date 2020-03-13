<template>
  <div class>
    <Login v-if="islogedOff" class="loginbox" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  props: {
  },
  data () {
    return {
      islogedOff: true
    }
  },
  components: {
    Login
  },
  methods: {
  }
}
</script>

<style >
.loginbox {
  margin-top: 20px;
  margin-left: 200px;
}
</style>
