<template>
  <div class>
    <Login v-if="!isAuthenticated" class="loginbox" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  props: {
  },
  components: {
    Login
  },
  computed: {
    ...mapState(['user', 'isLoading', 'isAuthenticated'])
  }
}
</script>

<style >
.loginbox {
  margin-top: 20px;
  margin-left: 200px;
}
</style>
