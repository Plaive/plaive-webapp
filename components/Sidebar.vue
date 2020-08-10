<template>
  <ul class="sidebar navbar-nav">
    <li :class="$route.path === '/' ? 'nav-item active' : 'nav-item'">
        <nuxt-link to="/" class="nav-link">
            <font-awesome-icon :icon="['fas', 'home']" />
            <span>Home</span>
        </nuxt-link>
    </li>
    <li :class="$route.path === '/channels' ? 'nav-item active' : 'nav-item'">
        <nuxt-link to="/channels" class="nav-link">
            <font-awesome-icon :icon="['fas', 'users']" />
            <span>Channels</span>
        </nuxt-link>
    </li>
    <li class="nav-item channel-sidebar-list" style="border-top:none">
        <h6>SUBSCRIPTIONS</h6>
        <ul>
            <li v-for="(sub, index) in subscriptions" :key="index">
                <a href="#">
                    <img class="img-fluid" alt="" :src="sub.logo"> {{ sub.name }}
                </a>
            </li>
        </ul>
    </li>
</ul>
</template>

<script>
export default {
    data () {
        return {
            subscriptions: [
                {
                    logo: "//via.placeholder.com/130x130",
                    name: "Subscription 1"
                }
            ]
        }
    }
}
</script>