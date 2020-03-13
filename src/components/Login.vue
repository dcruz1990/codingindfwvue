<template>
  <b-container class="bv-example-row">
    <b-col md="8" offset="4">
      <b-row>
        <b-card
          border-variant="primary"
          header="Please, log into admin control panel"
          header-bg-variant="primary"
          header-text-variant="light"
          align="center"
        >
          <b-card-text>
            <p class="lead">Enter your email:</p>
            <b-form-input type="email" v-model="text" placeholder="Enter your name"></b-form-input>

            <p class="lead">Enter your password:</p>
            <b-form-input type="password" v-model="text" placeholder="Enter your password"></b-form-input>
            <br />
            <b-button @click.prevent="Login" variant="primary">Login</b-button>
          </b-card-text>
        </b-card>
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
export default {
  name: 'Login',
  props: {
    islogedOff: Boolean
  },
  methods: {
    Login () {
      fetch('http://www.google.com/',
        { method: 'get' }).then((res) => {
        console.log(res)
        return res
      })
    }
  }
}
</script>
