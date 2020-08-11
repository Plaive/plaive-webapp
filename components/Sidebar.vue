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
        <h6>MY LESSONS</h6>
        <ul>
            <li v-for="(lesson, index) in lessons" :key="index">
                <a href="#">
                    <img class="img-fluid" alt="" :src="lesson.logo"> {{ lesson.name }}
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
            lessons: [
                {
                    logo: "//via.placeholder.com/130x130",
                    name: "Lesson 1"
                }
            ]
        }
    }
}
</script>