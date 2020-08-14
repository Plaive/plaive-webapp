<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">Reset Password</h5>
      <p>It is a long established fact that a reader <br> will be distracted by the readable.</p>
    </div>
    <form>
      <div class="form-group">
          <label>E-mail address</label>
          <input type="email" class="form-control">
      </div>
      <div class="mt-4">
          <button type="submit" class="btn btn-outline-primary btn-block btn-lg">Reset Password</button>
      </div>
    </form>
    <div class="text-center mt-5">
      <p class="light-gray">Go back to <nuxt-link to="/signin">Sign In</nuxt-link></p>
    </div>
    <div class="text-center mt-2 mb-5">
      <p class="light-gray">Don’t have an account? <nuxt-link to="/signup">Sign Up</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  head() {
    return {
    title: 'Forgot Password' + ' - Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
}
</script>