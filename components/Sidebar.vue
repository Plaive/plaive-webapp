<template>
    <ul :class="isToggled === true ? 'sidebar navbar-nav toggled' : 'sidebar navbar-nav'">
        <li :class="`d-none d-md-inline-block ${$route.path === '/' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/" class="nav-link">
                <font-awesome-icon :icon="['fas', 'home']" />
                <span>Home</span>
            </nuxt-link>
        </li>
        <li :class="`d-none d-md-inline-block ${$route.path === '/channels' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/channels" class="nav-link">
                <font-awesome-icon :icon="['fas', 'users']" />
                <span>Channels</span>
            </nuxt-link>
        </li>
        <li class="d-none d-md-inline-block nav-item channel-sidebar-list" style="border-top:none">
            <h6>MY LESSONS</h6>
            <ul>
                <li v-for="(lesson, index) in lessons" :key="index">
                    <nuxt-link :to="lesson.link">
                        <img class="img-fluid" alt="" :src="lesson.logo"> {{ lesson.name }}
                    </nuxt-link>
                </li>
            </ul>
        </li>

        <li :class="`d-block d-md-none ${$route.path === '/account' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/account" class="nav-link">
                <font-awesome-icon :icon="['fas', 'user-circle']" />
                <span>My Account</span>
            </nuxt-link>
        </li>
        <li :class="`d-block d-md-none ${$route.path === '/channel/my' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/channel/my" class="nav-link">
                <font-awesome-icon :icon="['fas', 'user-graduate']" />
                <span>My Channel</span>
            </nuxt-link>
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
                    name: "Lesson 1",
                    link: "/video/1"
                }
            ]
        }
    },
    props: ["isToggled"]
}
</script>