<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
          <div class="main-title">
            <h6>Account</h6>
          </div>
      </div>
    </div>
    <form>
      <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
                <label class="control-label">Full Name <span class="required">*</span></label>
                <input class="form-control border-form-control" type="text" v-model="account.name">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
                <label class="control-label">Nickname <span class="required">*</span></label>
                <input class="form-control border-form-control" v-model="account.nickname">
            </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-6">
              <label class="control-label">Email <span class="required"><button type="button" class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></button></span></label>
              <input class="form-control border-form-control" disabled type="email" readonly v-model="account.email">
          </div>
          <div class="col-sm-6">
              <label class="control-label">Password <span class="required"><button type="button" class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></button></span></label>
              <input class="form-control border-form-control" value="password" disabled type="password" readonly>
          </div>
      </div>
      <div class="row mt-3 mb-3">
          <div class="col-sm-12 text-right">
            <button type="button" class="btn btn-success border-none">Save</button>
          </div>
      </div>
    </form>
    <hr/>
    <div class="row">
      <div class="col-sm-6">
        <div class="main-title">
          <h6>Billing</h6>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet massa sapien. Praesent elementum interdum libero quis rhoncus. Vivamus id erat sed lectus cursus gravida. In quis fringilla metus. Aliquam erat volutpat. Aliquam id quam in tortor commodo placerat ut et orci. Sed auctor augue vitae urna mollis tempus. 
        </p>
        <button type="button" class="btn btn-success border-none mb-3">Configure Billing</button>
      </div>
      <div class="col-sm-6">
        <div class="main-title">
          <h6>Payout Account</h6>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet massa sapien. Praesent elementum interdum libero quis rhoncus. Vivamus id erat sed lectus cursus gravida. In quis fringilla metus. Aliquam erat volutpat. Aliquam id quam in tortor commodo placerat ut et orci. Sed auctor augue vitae urna mollis tempus. 
        </p>
        <button v-if="payoutAcount.stripeUserId === ''" type="button" class="btn btn-success border-none mb-3">Configure Payout Account</button>
        <button v-else type="button" class="btn btn-success border-none mb-3">Payout Dashboard</button>
      </div>
    </div>
    <hr/>
        <div class="row">
      <div class="col-lg-12">
          <div class="main-title">
            <h6>Channel</h6>
          </div>
      </div>
    </div>
    <form>
      <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
                <label class="control-label">Name <span class="required">*</span></label>
                <input class="form-control border-form-control" type="text" v-model="channel.name">
            </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-4">
            <div class="box mb-3">
              <h6>Logo <span class="required"><button type="button" class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></button></span></h6>
              <img src="//via.placeholder.com/500x500" style="width:100%;max-width:500px;height:auto"/>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="box mb-3">
              <h6>Banner <span class="required"><button type="button" class="btn btn-link border-none"><font-awesome-icon :icon="['fas', 'edit']" /></button></span></h6>
              <img src="//via.placeholder.com/1500x386" style="width:100%;height:auto"/>
            </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-12">
              <label class="control-label">About</label>
              <vue-editor v-model="channel.about"></vue-editor>
          </div>
      </div>
      <div class="row mt-3 mb-3">
          <div class="col-sm-12 text-right">
            <button type="button" class="btn btn-success border-none">Save</button>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
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
  }
}
</script>