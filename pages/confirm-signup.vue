<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">Verify Email</h5>
      <p>It is a long established fact that a reader <br> will be distracted by the readable.</p>
    </div>
    <form  v-on:submit.prevent="confirm">
      <div v-if="success == false" class="form-group">
          <label>E-mail address</label>
          <input type="email" class="form-control" v-model="email">
      </div>
      <div v-if="success == false" class="form-group">
          <label>Code</label>
          <input type="text" class="form-control" v-model="code">
      </div>
      <div v-if="error == true" class="alert alert-danger mt-4" role="alert">
        An error has occurred
      </div>
      <div v-if="success == true" class="alert mt-4" role="alert">
        Your account has been verified. You can <nuxt-link to="/signin">Sign In</nuxt-link> now.
      </div>
      <div v-if="success == false" class="mt-4">
          <button type="submit" :disabled="loading === true" class="btn btn-outline-primary btn-block btn-lg">
            <b-spinner v-if="this.loading === true" type="grow" label="Loading..." small></b-spinner>
            <span v-else>{{$t("confirm")}}</span>
          </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: "auth",
  head() {
    return {
      title: 'Confirm Signup' + ' - Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
    return {
      loading: false,
      email: this.$route.query.email,
      code: this.$route.query.code,
      success: false,
      error: false,
    }
  },
  methods: {
    async confirm() {
      this.loading = true
        this.success = false
        this.error = false
      try {
        await this.$axios.$post("/auth/confirm-signup", { email: this.email, code: this.code })
        this.success = true
      } catch {
        this.error = true
      }
      this.loading = false
    }
  }
}
</script>