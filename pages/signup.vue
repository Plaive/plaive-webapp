<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="@/assets/img/logo-square.svg" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">{{$t('signupTitle')}}</h5>
      <p>{{$t('signupSubTitle')}}</p>
    </div>
    <form v-on:submit.prevent="signUp">
      <div class="form-group">
          <label>{{$t('fullName')}}</label>
          <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
          <label>{{$t('nickname')}}</label>
          <input type="text" class="form-control" v-model="nickname">
      </div>
      <div class="form-group">
          <label>{{$t('email')}}</label>
          <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
          <label>{{$t('password')}}</label>
          <b-form-input type="password" class="form-control" v-model="password" :state="passwordState"></b-form-input>
          <b-form-invalid-feedback>
            La password deve essere lunga almeno 8 caratteri
          </b-form-invalid-feedback>
      </div>
      <div v-if="error !== ''" class="alert alert-danger mt-4" role="alert">
        {{error}}
      </div>
      <div class="mt-4">
          <button :disabled="loading === true || passwordState !== true" type="submit" :class="`btn btn-block btn-lg ${passwordState === true ? 'btn-outline-primary' : ''}`">
            <b-spinner v-if="this.loading === true" type="grow" label="Loading..." small></b-spinner>
            <span v-else>{{$t('signUp')}}</span>
          </button>
      </div>
    </form>
    <div class="text-center mt-5 mb-5">
      <p class="light-gray">{{$t('goBackTo')}} <nuxt-link to="/signin">{{$t('signIn')}}</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  head() {
    return {
      title: 'Sign Up' + ' - Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
    return {
      loading: false,
      name: "",
      nickname: "",
      email: "",
      password: "",
      error: ""
    }
  },
  computed: {
    passwordState() {
      if(this.password == "") {
        return undefined
      }
      return this.password.length > 8 ? true : false
    }
  },
  methods: {
    async signUp() {
      this.error = ""
      this.loading = true
      try {
        await this.$axios.$post(`${this.$config.AUTH_BASE_URL}/signup`, { name: this.name, nickname: this.nickname, email: this.email, password: this.password })
        const res = await this.$axios.$post(`${this.$config.AUTH_BASE_URL}/signin`, { email: this.email, password: this.password, rememberMe: false })
        this.$axios.setToken(res.accessToken, 'Bearer')
        sessionStorage.setItem("rt", res.refreshToken)
        sessionStorage.setItem("logged", true)
        this.$router.replace("/")
      } catch(err) {
        this.error = err
      }
      this.loading = false
    }
  }
}
</script>