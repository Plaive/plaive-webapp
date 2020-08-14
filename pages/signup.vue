<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">Create your Plaive Account</h5>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.</p>
    </div>
    <form>
      <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control">
      </div>
      <div class="form-group">
          <label>Nickname</label>
          <input type="text" class="form-control">
      </div>
      <div class="form-group">
          <label>E-mail address</label>
          <input type="email" class="form-control">
      </div>
      <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control">
      </div>
      <div class="mt-4">
          <button type="submit" class="btn btn-outline-primary btn-block btn-lg">Sign Up</button>
      </div>
    </form>
    <div class="text-center mt-5 mb-5">
      <p class="light-gray">Already have an Account? <nuxt-link to="/signin">Sign In</nuxt-link></p>
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
}
</script>