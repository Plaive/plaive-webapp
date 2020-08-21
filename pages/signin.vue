<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">Welcome to Plaive</h5>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.</p>
    </div>
    <form v-on:submit.prevent="signIn">
      <div class="form-group">
          <label>E-mail address</label>
          <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="password">
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="chk_rememberMe" v-model="rememberMe">
        <label class="custom-control-label" for="chk_rememberMe">Remember me</label>
      </div>
      <div v-if="error === true" class="alert alert-danger mt-4" role="alert">
        Invalid e-mail or password
      </div>
      <div class="mt-4">
          <div class="row">
            <div class="col-12">
                <button :disabled="loading === true" type="submit" class="btn btn-outline-primary btn-block btn-lg">
                  <b-spinner v-if="this.loading === true" type="grow" label="Loading..." variant="success" small></b-spinner>
                  <span v-else>Sign In</span>
                </button>
            </div>
          </div>
      </div>
    </form>
    <div class="text-center mt-5">
      <p class="light-gray">Don’t have an account? <nuxt-link to="/signup">Sign Up</nuxt-link></p>
    </div>
    <div class="text-center mt-2 mb-5">
      <p class="light-gray">Forgot your password? <nuxt-link to="/forgot-password">Recover it</nuxt-link></p>
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