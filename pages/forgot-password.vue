<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="@/assets/img/logo-square.svg" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">{{$t('resetPassword')}}</h5>
      <p>{{$t('forgotPasswordInfo')}}</p>
    </div>
    <form>
      <div class="form-group">
          <label>{{$t('email')}}</label>
          <input type="email" class="form-control">
      </div>
      <div class="mt-4">
          <button type="submit" class="btn btn-outline-primary btn-block btn-lg">{{$t('resetPasswordBtn')}}</button>
      </div>
    </form>
    <div class="text-center mt-5">
      <p class="light-gray">{{$t('goBackTo')}} <nuxt-link to="/signin">{{$t('signIn')}}</nuxt-link></p>
    </div>
    <div class="text-center mt-2 mb-5">
      <p class="light-gray">{{$t('noAccountQuestion')}} <nuxt-link to="/signup">{{$t('signUp')}}</nuxt-link></p>
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