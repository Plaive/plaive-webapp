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
          <div class="col-sm-6" style="margin-top: 17px;">
              <label class="control-label">{{$t('email')}}</label>
              <input class="form-control border-form-control" type="email" v-model="account.email">
          </div>
          <div class="col-sm-6">
              <label class="control-label">{{$t('password')}} 
                <span class="required">
                  <a v-b-modal.changePasswordModal class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></a>
                </span>
                <!-- Logout Modal-->
                <b-modal id="changePasswordModal" ref="changePasswordModal" centered>
                  <template v-slot:modal-title>
                    {{$t('changePassword')}}
                  </template>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label class="control-label">{{$t('currentPassword')}} <span class="required">*</span></label>
                        <input class="form-control border-form-control" type="password" v-model="changePassword.currentPassword">
                      </div>
                      <div class="form-group">
                        <label class="control-label">{{$t('newPassword')}} <span class="required">*</span></label>
                        <input class="form-control border-form-control" type="password" v-model="changePassword.newPassword">
                      </div>
                    </form>
                  </div>
                  <template v-slot:modal-footer>
                    <button class="btn btn-outline-secondary" @click="$refs['changePasswordModal'].hide()">{{$t('cancel')}}</button>
                    <button type="button" :disabled="passwordSaveLoading === true" class="btn btn-outline-primary" @click="changePassword">
                      <b-spinner v-if="passwordSaveLoading === true" type="grow" label="Loading..." small></b-spinner>
                      <span v-else>{{$t('changePassword')}}</span>
                    </button>
                  </template>
                </b-modal>
              </label>
              <input class="form-control border-form-control" value="password" disabled type="password" readonly>
          </div>
      </div>
      <div class="row mt-3 mb-3">
          <div class="col-sm-12 text-right">
            <button type="button" :disabled="accountSaveloading === true" class="btn btn-outline-primary" @click="updateAccount">
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
        <button type="button" class="btn btn-outline-primary mb-3">{{$t('configure')}}</button>
      </div>
      <div class="col-sm-6">
        <div class="main-title">
          <h6>{{$t('payoutAccount')}}</h6>
        </div>
        <p>
          {{$t('payoutAccountGenericInfo')}}
        </p>
        <button v-if="payoutAcount.stripeUserId === ''" type="button" class="btn btn-outline-primary mb-3">{{$t('configure')}}</button>
        <button v-else type="button" class="btn btn-outline-primary mb-3">{{$t('payoutDashboard')}}</button>
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
          <div class="col-lg-12">
              <label class="control-label">{{$t('description')}}</label>
              <vue-editor v-model="channel.description"></vue-editor>
          </div>
      </div>
      <div class="row mt-3 mb-3">
          <div class="col-sm-12 text-right">
            <button type="button" :disabled="channelSaveLoading === true" class="btn btn-outline-primary" @click="saveChannel">
              <b-spinner v-if="channelSaveLoading === true" type="grow" label="Loading..." small></b-spinner>
              <span v-else>{{$t('save')}}</span>
            </button>
          </div>
      </div>
    </form>
    <div class="row">
      <div class="col-sm-4">
        <div class="box mb-3">
          <h6>{{$t('logo')}} 
            <span class="required">
              <ImageUploader :aspectRatio="500 / 500" blobName="logo" :sasUrl="`${this.$config.CHANNELS_BASE_URL}/channel/blob/sas`" v-on:uploaded="getChannel"/>
            </span>
          </h6>
          <img :src="channel.logo" style="width:100%;max-width:500px;height:auto"/>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="box mb-3">
          <h6>{{$t('banner')}} 
            <span class="required">
              <ImageUploader :aspectRatio="1500 / 386" blobName="banner" :sasUrl="`${this.$config.CHANNELS_BASE_URL}/channel/blob/sas`" v-on:uploaded="getChannel"/>
            </span>
          </h6>
          <img :src="channel.banner" style="width:100%;height:auto"/>
        </div>
        </div>
    </div>
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
      passwordSaveLoading: false,
      channelSaveLoading: false,
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
        description: "",
        logo: "",
        banner: ""
      }
    }
  },
  methods: {
    async updateAccount () {
      this.accountSaveloading = true
      try {
        await this.$axios.$patch(`${this.$config.AUTH_BASE_URL}/user`, { name: this.account.name, nickname: this.account.nickname, email: this.account.email })
        this.$bvToast.toast(this.$t("accountUpdated"), {
          variant: "success",
          solid: true
        })
      } catch {
        this.$bvToast.toast(this.$t(err), {
          variant: "danger",
          solid: true
        })
      }
      this.accountSaveloading = false
    },
    async changePassword () {
      this.passwordSaveLoading = true
      try {
        await this.$axios.$patch(`${this.$config.AUTH_BASE_URL}/password`, { currentPassword: this.changePassword.currentPassword, newPassword: this.changePassword.newPassword })
        this.$bvToast.toast(this.$t("accountUpdated"), {
          variant: "success",
          solid: true
        })
      } catch(err) {
        this.$bvToast.toast(this.$t(err), {
          variant: "danger",
          solid: true
        })
      }
      this.passwordSaveLoading = false
    },
    async getChannel () {
      this.channel.logo = "//via.placeholder.com/500x500"
      this.channel.banner = "//via.placeholder.com/1500x386"
      var channelRes = await this.$axios.$get(`${this.$config.CHANNELS_BASE_URL}/channel/my`)
      if(channelRes == "") {
        await this.$axios.$post(`${this.$config.CHANNELS_BASE_URL}/channel`)
      } else {
        this.channel.name = channelRes.name
        this.channel.description = channelRes.description
        this.channel.logo = channelRes.logo == "" ? "//via.placeholder.com/500x500" : channelRes.logo
        this.channel.banner = channelRes.banner == "" ? "//via.placeholder.com/1500x386" : channelRes.banner
      }
    },
    async saveChannel () {
      this.channelSaveLoading = true
        try {
          await this.$axios.$patch(`${this.$config.CHANNELS_BASE_URL}/channel`, { name: this.channel.name, description: this.channel.description })
          this.$bvToast.toast(this.$t("accountUpdated"), {
            variant: "success",
            solid: true
          })
        } catch {
          this.$bvToast.toast(this.$t(err), {
            variant: "danger",
            solid: true
          })
        }
        this.channelSaveLoading = false
    },
  },
  async mounted () {
    var accountRes = await this.$axios.$get(`${this.$config.AUTH_BASE_URL}/user`)
    this.account.name = accountRes.name
    this.account.nickname = accountRes.nickname
    this.account.email = accountRes.email
    this.getChannel()
  }
}
</script>