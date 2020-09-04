<template>
  <div class="mobile-menu">
    <ul class="bottom-navbar-nav">
      <li :class="$route.path === '/' ? 'bottom-nav-item active' : 'bottom-nav-item'">
          <nuxt-link to="/" class="bottom-nav-link">
            <font-awesome-icon :icon="['fas', 'home']" />
          </nuxt-link>
      </li>
      <li :class="$route.path === '/channels' ? 'bottom-nav-item active' : 'bottom-nav-item'">
          <nuxt-link to="/channels" class="bottom-nav-link">
            <font-awesome-icon :icon="['fas', 'users']" />
          </nuxt-link>
      </li>
      <li v-if="logged == 'true'" :class="$route.path === '/my-lessons' ? 'bottom-nav-item active' : 'bottom-nav-item'">
          <nuxt-link to="/my-lessons" class="bottom-nav-link">
            <font-awesome-icon :icon="['fas', 'video']" />
          </nuxt-link>
      </li>
      <li v-if="logged == 'true'" :class="$route.path === '/notifications' ? 'bottom-nav-item active' : 'bottom-nav-item'">
          <nuxt-link to="/notifications" class="bottom-nav-link">
            <span class="badge badge-danger" style="position: relative;top: 10px;width: 7px;height: 11px;border-radius: 50px;left: 30px;">&nbsp;</span>
            <font-awesome-icon :icon="['fas', 'bell']" />
          </nuxt-link>
      </li>
      <!-- <li v-if="logged == 'true'" :class="$route.path === '/messages' ? 'bottom-nav-item active' : 'bottom-nav-item'">
          <nuxt-link to="#" class="bottom-nav-link">
            <span class="badge badge-success" style="position: relative;top: 10px;width: 7px;height: 11px;border-radius: 50px;left: 30px;">&nbsp;</span>
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </nuxt-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logged: false
    }
  },
  mounted () {
      this.logged = sessionStorage.getItem("logged")
  }
}
</script>