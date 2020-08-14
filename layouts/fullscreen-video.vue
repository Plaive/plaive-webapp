<template>
  <div>
    <Nuxt />
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
