<template>
    <nav class="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
        &nbsp;&nbsp; 
        <div class="d-block d-md-none">
            <button class="btn btn-link btn-sm text-secondary order-1 order-sm-0" @click="toggleSidebar">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </button> 
        </div>
        &nbsp;&nbsp;
        <nuxt-link to="/" class="navbar-brand mr-1"><img class="img-fluid" alt="" src="@/assets/img/logo.svg" width="120"></nuxt-link>
        <!-- Navbar Search -->
        <GlobalSearch />
        <!-- Navbar -->
        <ul class="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
            <!-- Notifications -->
            <li v-if="logged == 'true'" class="d-none d-md-inline-block nav-item mx-1">
                <nuxt-link to="/notifications" class="nav-link">
                    <font-awesome-icon :icon="['fas', 'bell']" />
                    <span v-if="numberOfNotifications > 0" class="badge badge-danger">{{numberOfNotifications}}</span>
                </nuxt-link>
            </li>

            <!-- Messages -->
            <!-- <li v-if="logged == 'true'" class="d-none d-md-inline-block nav-item mx-1">
                <nuxt-link to="/messages" class="nav-link">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                    <span class="badge badge-success">{{numberOfMessages}}</span>
                </nuxt-link>
            </li> -->

            <!-- User -->
            <li v-if="logged == 'true'" class="d-none d-md-inline-block nav-item dropdown no-arrow osahan-right-navbar-user">
                <b-nav-item-dropdown right class="user-dropdown-link">
                <template slot="button-content">
                    <img alt="Avatar" src="//via.placeholder.com/81x81">
                    {{nickname}}
                </template>
                    <nuxt-link class="dropdown-item" to="/account"><font-awesome-icon :icon="['fas', 'user-circle']" /> &nbsp; {{$t('myAccountMenuLink')}}</nuxt-link>
                    <nuxt-link class="dropdown-item" to="/channel/my"><font-awesome-icon :icon="['fas', 'user-graduate']" /> &nbsp;  {{$t('myChannelMenuLink')}}</nuxt-link>
                    <nuxt-link class="dropdown-item" to="/my-lessons"><font-awesome-icon :icon="['fas', 'video']" /> &nbsp;  {{$t('myLessons')}}</nuxt-link>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" v-b-modal.logoutModal><font-awesome-icon :icon="['fas', 'sign-out-alt']" /> &nbsp; {{$t('logoutMenuLink')}}</a>
                </b-nav-item-dropdown>
            </li>
            <li v-else class="d-none d-md-inline-block nav-item mx-1">
                <nuxt-link to="/signin" class="nav-link">
                    <font-awesome-icon :icon="['fas', 'sign-in-alt']" /> {{$t("signIn")}}
                </nuxt-link>
            </li>

            <!-- Logout Modal-->
            <b-modal id="logoutModal" ref="logoutModal" centered>
                <template v-slot:modal-title>
                    {{$t('signoutModalTitle')}}
                </template>
                <div class="modal-body">{{$t('signoutModalBody')}}</div>
                <template v-slot:modal-footer>
                    <button class="btn btn-secondary" @click="$refs['logoutModal'].hide()">{{$t('cancel')}}</button>
                    <button class="btn btn-primary" @click="logout">{{$t('signout')}}</button>
                </template>
            </b-modal>
        </ul>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            logged: false,
            nickname: '',
            notificationCount: 0,
        }
    },
    computed: {
        numberOfNotifications () {
            if(this.notificationCount > 9) {
                return "9+"
            }
            return this.notificationCount
        },
        numberOfMessages () {
            if(this.messages.length > 9) {
                return "9+"
            }
            return this.messages.length
        }
    },
    methods: {
        isMobile () {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check
        },
        toggleSidebar() {
            const body = document.body
            body.classList.toggle("sidebar-toggled")
            this.$emit('toggled')
        },
        async logout () {
            try { 
                await this.$axios.$post(`${this.$config.AUTH_BASE_URL}/signout`)
            } catch {}
            sessionStorage.removeItem("rt")
            localStorage.removeItem("rt")
            sessionStorage.removeItem("logged")
            this.$router.go()
        }
    },
    async mounted () {
        if(this.isMobile()) {
            this.toggleSidebar()
        }
        this.logged = sessionStorage.getItem("logged")
        if(this.logged == 'true') {
            var res = await this.$axios.$get(`${this.$config.AUTH_BASE_URL}/user`)
            this.nickname = res.nickname
            //var notificationCountRes = await this.$axios.$get("notifications/count")
            //this.notificationCount = notificationCountRes.count
        }
    }
}
</script>