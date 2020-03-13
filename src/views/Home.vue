<template>
  <div class>
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  props: {
    toggleLog: Boolean
  },
  data () {

  },
  components: {
    Login
  },
  methods: {
    toggleLogin (toggleLogin) {
      return !toggleLogin
    }
  }
}
</script>
