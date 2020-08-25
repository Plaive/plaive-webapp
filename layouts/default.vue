<template>
  <div>
    <MobileMenu />
    <Navbar @toggled="sidebarToggled" />
    <div id="wrapper">
        <Sidebar :isToggled="isSidebarToggled" />
        <div :class="this.$route.name.startsWith('channel-id') ? 'single-channel-page' : ''" id="content-wrapper">
            <div :class="!this.$route.name.startsWith('channel-id') ? 'container-fluid pb-0' : ''">
              <Nuxt />
            </div>
            <Footer :className="this.$route.name.startsWith('channel-id') ? 'sticky-footer ml-0' : 'sticky-footer'"/>
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
