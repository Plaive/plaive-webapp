<template>
  <div>
    <Navbar @toggled="sidebarToggled" />
    <div id="wrapper">
        <!-- Sidebar -->
        <Sidebar :isToggled="isSidebarToggled" />
        <div id="content-wrapper">
            <div class="container-fluid pb-0">
              <Nuxt />
            </div>
            <!-- Sticky Footer -->
            <Footer className="sticky-footer"/>
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
