<template>
  <div class>
    <Login v-if="!isAuthenticated" class="loginbox" :error = "error" />
    <Sidebar v-if="isAuthenticated" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Sidebar from '@/components/Sidebar.vue'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  props: {
  },
  components: {
    Login,
    Sidebar
  },
  computed: {
    ...mapState(['user', 'isLoading', 'isAuthenticated', 'error'])
  }
}
</script>

<style >
.loginbox {
  margin-top: 20px;
  margin-left: 200px;
}
</style>
