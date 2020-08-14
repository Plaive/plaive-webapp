<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">Welcome to Plaive</h5>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.</p>
    </div>
    <form>
      <div class="form-group">
          <label>E-mail address</label>
          <input type="email" class="form-control">
      </div>
      <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password">
      </div>
      <div class="mt-4">
          <div class="row">
            <div class="col-12">
                <button type="submit" class="btn btn-outline-primary btn-block btn-lg">Sign In</button>
            </div>
          </div>
      </div>
    </form>
    <div class="text-center mt-5">
      <p class="light-gray">Don’t have an account? <nuxt-link to="/signup">Sign Up</nuxt-link></p>
    </div>
    <div class="text-center mt-2">
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
}
</script>