<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">{{$t('welcome')}}</h5>
      <p>{{$t('welcomeMessage')}}</p>
    </div>
    <form v-on:submit.prevent="signIn">
      <div class="form-group">
          <label>{{$t('email')}}</label>
          <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
          <label>{{$t('password')}}</label>
          <input type="password" class="form-control" v-model="password">
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="chk_rememberMe" v-model="rememberMe">
        <label class="custom-control-label" for="chk_rememberMe">{{$t('rememberMe')}}</label>
      </div>
      <div v-if="error === true" class="alert alert-danger mt-4" role="alert">
        {{$t('signInError')}}
      </div>
      <div class="mt-4">
          <div class="row">
            <div class="col-12">
                <button :disabled="loading === true" type="submit" class="btn btn-outline-primary btn-block btn-lg">
                  <b-spinner v-if="this.loading === true" type="grow" label="Loading..." variant="success" small></b-spinner>
                  <span v-else>{{$t('signIn')}}</span>
                </button>
            </div>
          </div>
      </div>
    </form>
    <div class="text-center mt-5">
      <p class="light-gray">{{$t('noAccountQuestion')}} <nuxt-link to="/signup">{{$t('signUp')}}</nuxt-link></p>
    </div>
    <div class="text-center mt-2 mb-5">
      <p class="light-gray">{{$t('forgotPasswrdQuestion')}} <nuxt-link to="/forgot-password">{{$t('resetPasswordLink')}}</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  head() {
    return {
      title: 'Sign In' + ' - Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
    return {
      loading: false,
      rememberMe: false,
      email: "",
      password: "",
      error: false
    }
  },
  methods: {
    async signIn() {
      this.loading = true
      this.error = false
      try {
        const res = await this.$axios.$post("/auth/signin", { email: this.email, password: this.password, rememberMe: this.rememberMe })
        console.log(res)
        if(this.rememberMe === true) {
          localStorage.setItem("accessToken", res.refreshToken)
        }
        else {
          sessionStorage.setItem("accessToken", res.refreshToken)
        }
        this.$router.replace("/")
      } catch {
        this.error = true
      }
      this.loading = false
    }
  }
}
</script>