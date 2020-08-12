<template>
  <div>
    <MobileMenu />
    <Navbar @toggled="sidebarToggled" />
    <div id="wrapper">
        <!-- Sidebar -->
        <Sidebar :isToggled="isSidebarToggled" />
        <div v-if="this.$route.name !== 'channel-id'" id="content-wrapper">
            <div class="container-fluid pb-0">
              <Nuxt />
            </div>
            <!-- Sticky Footer -->
            <Footer className="sticky-footer"/>
        </div>
        <div v-if="this.$route.name === 'channel-id'" class="single-channel-page" id="content-wrapper">
            <Nuxt />
            <Footer className="sticky-footer ml-0"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSidebarToggled: false
    }
  },
  methods: {
    sidebarToggled() {
      this.isSidebarToggled = !this.isSidebarToggled
    }
  }
}
</script>
