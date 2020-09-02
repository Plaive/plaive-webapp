<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
          <div class="main-title">
            <h6>{{$t('account')}}</h6>
          </div>
      </div>
    </div>
    <form>
      <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
                <label class="control-label">{{$t('fullName')}}<span class="required">*</span></label>
                <input class="form-control border-form-control" type="text" v-model="account.name">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
                <label class="control-label">{{$t('nickname')}} <span class="required">*</span></label>
                <input class="form-control border-form-control" v-model="account.nickname">
            </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-6">
              <label class="control-label">{{$t('email')}} <span class="required"><button type="button" class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></button></span></label>
              <input class="form-control border-form-control" disabled type="email" readonly v-model="account.email">
          </div>
          <div class="col-sm-6">
              <label class="control-label">{{$t('password')}} <span class="required"><button type="button" class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></button></span></label>
              <input class="form-control border-form-control" value="password" disabled type="password" readonly>
          </div>
      </div>
      <div class="row mt-3 mb-3">
          <div class="col-sm-12 text-right">
            <button type="button" :disabled="accountSaveloading === true" class="btn btn-success border-none" @click="updateAccount">
              <b-spinner v-if="accountSaveloading === true" type="grow" label="Loading..." small></b-spinner>
              <span v-else>{{$t('save')}}</span>
            </button>
          </div>
      </div>
    </form>
    <hr/>
    <div class="row">
      <div class="col-sm-6">
        <div class="main-title">
          <h6>{{$t('billingMethod')}}</h6>
        </div>
        <p>
          {{$t('billingMethodGenericInfo')}}
        </p>
        <button type="button" class="btn btn-success border-none mb-3">{{$t('configure')}}</button>
      </div>
      <div class="col-sm-6">
        <div class="main-title">
          <h6>{{$t('payoutAccount')}}</h6>
        </div>
        <p>
          {{$t('payoutAccountGenericInfo')}}
        </p>
        <button v-if="payoutAcount.stripeUserId === ''" type="button" class="btn btn-success border-none mb-3">{{$t('configure')}}</button>
        <button v-else type="button" class="btn btn-success border-none mb-3">{{$t('payoutDashboard')}}</button>
      </div>
    </div>
    <hr/>
        <div class="row">
      <div class="col-lg-12">
          <div class="main-title">
            <h6>{{$t('channel')}}</h6>
          </div>
      </div>
    </div>
    <form>
      <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
                <label class="control-label">{{$t('name')}} <span class="required">*</span></label>
                <input class="form-control border-form-control" type="text" v-model="channel.name">
            </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-4">
            <div class="box mb-3">
              <h6>{{$t('logo')}} <span class="required"><button type="button" class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></button></span></h6>
              <img src="//via.placeholder.com/500x500" style="width:100%;max-width:500px;height:auto"/>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="box mb-3">
              <h6>{{$t('banner')}} <span class="required"><button type="button" class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></button></span></h6>
              <img src="//via.placeholder.com/1500x386" style="width:100%;height:auto"/>
            </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-12">
              <label class="control-label">{{$t('about')}}</label>
              <vue-editor v-model="channel.about"></vue-editor>
          </div>
      </div>
      <div class="row mt-3 mb-3">
          <div class="col-sm-12 text-right">
            <button type="button" class="btn btn-success border-none">{{$t('save')}}</button>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  middleware: ['auth'],
  head() {
    return {
      title: 'Account' + ' - Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  components: {
    VueEditor
  },
  data () {
    return {
      accountSaveloading: false,
      account: {
        name: "",
        nickname: "",
        email: ""
      },
      payoutAcount: {
        stripeUserId: ""
      },
      channel: {
        name: "",
        about: "",
        logo: "",
        banner: ""
      }
    }
  },
  methods: {
    updateAccount () {
      this.accountSaveloading = true
      this.$axios.$patch("account", { name: this.account.name, nickname: this.account.nickname }).then((res) => {
        this.account.name = res.name
        this.account.nickname = res.nickname
        this.account.email = res.email
        this.$bvToast.toast(this.$t("accuntUpdated"), {
          variant: "success",
          solid: true
        })
        this.accountSaveloading = false
      }).catch((err) => {
        this.$bvToast.toast(this.$t(err), {
          variant: "danger",
          solid: true
        })
        this.accountSaveloading = false
      })
    }
  },
  async mounted () {
    var res = await this.$axios.$get("account")
    this.account.name = res.name
    this.account.nickname = res.nickname
    this.account.email = res.email
  }
}
</script>