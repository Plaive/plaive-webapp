<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="img/favicon.png" class="img-fluid" alt="LOGO">
      <h5 class="mt-3 mb-3">Reset Password</h5>
      <p>It is a long established fact that a reader <br> will be distracted by the readable.</p>
    </div>
    <form>
      <div class="form-group">
          <label>Code</label>
          <input type="text" class="form-control" v-model="code">
      </div>
      <div class="form-group">
          <label>New Password</label>
          <input type="password" class="form-control">
      </div>
      <div class="mt-4">
          <button type="submit" class="btn btn-outline-primary btn-block btn-lg">Reset Password</button>
      </div>
    </form>
    <div class="text-center mt-5">
      <p class="light-gray">Go back to <nuxt-link to="/signin">Sign In</nuxt-link></p>
    </div>
    <div class="text-center mt-2">
      <p class="light-gray">Don’t have an account? <nuxt-link to="/signup">Sign Up</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  head() {
    return {
    title: 'Reset Password' + ' - Plaive',
    }
  },
  data () {
    return {
      code: this.$route.query.token
    }
  }
}
</script>