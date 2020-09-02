<template>
    <ul :class="isToggled === true ? 'sidebar navbar-nav toggled' : 'sidebar navbar-nav'">
        <li :class="`d-none d-md-inline-block ${$route.path === '/' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/" class="nav-link">
                <font-awesome-icon :icon="['fas', 'home']" />
                <span>{{$t('home')}}</span>
            </nuxt-link>
        </li>
        <li :class="`d-none d-md-inline-block ${$route.path === '/channels' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/channels" class="nav-link">
                <font-awesome-icon :icon="['fas', 'users']" />
                <span>{{$t('channels')}}</span>
            </nuxt-link>
        </li>
        <li v-if="logged == 'true'" class="d-none d-md-inline-block nav-item channel-sidebar-list" style="border-top:none">
            <h6>{{$t('myLessons')}}</h6>
            <ul>
                <li v-for="(lesson, index) in lessons" :key="index">
                    <nuxt-link to="lesson.link">
                        <img class="img-fluid" alt="" :src="lesson.logo"> {{ lesson.name }}
                    </nuxt-link>
                </li>
            </ul>
        </li>

        <li v-if="logged == 'true'" :class="`d-block d-md-none ${$route.path === '/account' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/account" class="nav-link">
                <font-awesome-icon :icon="['fas', 'user-circle']" />
                <span>{{$t('myAccountMenuLink')}}</span>
            </nuxt-link>
        </li>
        <li v-if="logged == 'true'" :class="`d-block d-md-none ${$route.path === '/channel/my' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/channel/my" class="nav-link">
                <font-awesome-icon :icon="['fas', 'user-graduate']" />
                <span>{{$t('myChannelMenuLink')}}</span>
            </nuxt-link>
        </li>
        <li v-else :class="`d-block d-md-none ${$route.path === '/channel/my' ? 'nav-item active' : 'nav-item'}`">
            <nuxt-link to="/signin" class="nav-link">
                <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
                <span>{{$t('signIn')}}</span>
            </nuxt-link>
        </li>

        <li v-if="logged == 'true'" class="d-block d-md-none nav-item">
            <a v-b-modal.logoutModalMobile class="nav-link">
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                <span>{{$t('signout')}}</span>
            </a>
        </li>
        <!-- Logout Modal-->
        <b-modal id="logoutModalMobile" ref="logoutModalMobile" centered>
            <template v-slot:modal-title>
                {{$t('signoutModalTitle')}}
            </template>
            <div class="modal-body">{{$t('signoutModalBody')}}</div>
            <template v-slot:modal-footer>
                <button class="btn btn-secondary" @click="$refs['logoutModalMobile'].hide()">{{$t('cancel')}}</button>
                <button class="btn btn-primary" @click="logout">{{$t('signout')}}</button>
            </template>
        </b-modal>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            logged: false,
            lessons: [
                {
                    logo: "//via.placeholder.com/130x130",
                    name: "Lesson 1",
                    link: "/video/1"
                }
            ]
        }
    },
    props: ["isToggled"],
    methods: {
        logout () {
            sessionStorage.removeItem("logged")
            this.$router.go()
        }
    },
    mounted () {
        this.logged = sessionStorage.getItem("logged")
    }
}
</script>