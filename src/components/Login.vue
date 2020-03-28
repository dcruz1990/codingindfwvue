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
            <div>
                <b-alert fade v-model = "error.errorFlag" dismissible variant="danger">{{ error.errorType }}</b-alert>
                <b-alert fade v-model = "myerror" dismissible variant="danger">You must insert something!!</b-alert>
            </div>
            <p class="lead">Enter your email:</p>
            <b-form-input type="email" v-model="auth.email" placeholder="Enter your email"></b-form-input>
            <p class="lead">Enter your password:</p>
            <b-form-input type="password" v-model="auth.password" placeholder="Enter your password"></b-form-input>
            <br />
            <b-button
              @click.prevent="login"
              variant="primary"
            >Login</b-button>
          </b-card-text>
        </b-card>
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  props: {
    isAuthenticated: Boolean,
    user: Object,
    error: Object
  },
  data () {
    return {
      auth: { email: '', password: '' },
      dismissSecs: 5,
      dismissCountDown: 5,
      myerror: false
    }
  },
  computed: {
    ...mapState(['error'])
  },
  methods: {
    login () {
      if (this.auth.password.length !== 0 && this.auth.email.length !== 0) {
        this.$store.dispatch('Login', this.auth)
        this.auth.password = ''
        this.auth.email = ''
      } else {
        this.myerror = true
      }
    }
  }
}
</script>
