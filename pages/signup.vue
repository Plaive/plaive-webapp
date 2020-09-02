<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE" class="img-fluid" alt="LOGO" style="max-width:125px">
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
          <input type="password" class="form-control" v-model="password">
      </div>
      <div v-if="error !== ''" class="alert alert-danger mt-4" role="alert">
        {{error}}
      </div>
      <div class="mt-4">
          <button :disabled="loading === true" type="submit" class="btn btn-outline-primary btn-block btn-lg">
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
  methods: {
    async signUp() {
      this.error = ""
      this.loading = true
      try {
        await this.$axios.$post("/auth/signup", { name: this.name, nickname: this.nickname, email: this.email, password: this.password })
        this.$router.replace(`/confirm-signup?email=${encodeURIComponent(this.email)}`)
      } catch(err) {
        this.error = err
      }
      this.loading = false
    }
  }
}
</script>