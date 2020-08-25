<template>
  <div>
    <div class="text-center mb-5 login-main-left-header pt-4">
      <img src="//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE" class="img-fluid" alt="LOGO" style="max-width:125px">
      <h5 class="mt-3 mb-3">{{$t('resetPassword')}}</h5>
      <p>{{$t('resetPasswordInfo')}}</p>
    </div>
    <form>
      <div class="form-group">
          <label>{{$t('code')}}</label>
          <input type="text" class="form-control" v-model="code">
      </div>
      <div class="form-group">
          <label>{{$t('newPassword')}}</label>
          <input type="password" class="form-control">
      </div>
      <div class="mt-4">
          <button type="submit" class="btn btn-outline-primary btn-block btn-lg">{{$t('resetPasswordBtn')}}</button>
      </div>
    </form>
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
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
    return {
      code: this.$route.query.token
    }
  }
}
</script>