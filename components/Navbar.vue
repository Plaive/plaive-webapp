<template>
  <ul class="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
    <!-- Notifications -->
    <li class="nav-item dropdown no-arrow mx-1">
        <b-nav-item-dropdown right>
        <template slot="button-content">
            <font-awesome-icon :icon="['fas', 'bell']" />
            <span class="badge badge-danger">{{numberOfNotifications}}</span>
        </template>
        <b-dropdown-item v-for="(not, index) in notifications" :key="index">{{not.title}}</b-dropdown-item>
        </b-nav-item-dropdown>
    </li>

    <!-- Messages -->
    <li class="nav-item dropdown no-arrow mx-1">
        <b-nav-item-dropdown right>
        <template slot="button-content">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span class="badge badge-success">{{numberOfMessages}}</span>
        </template>
            <b-dropdown-item v-for="(msg, index) in messages" :key="index">{{msg.title}}</b-dropdown-item>
        </b-nav-item-dropdown>
    </li>

    <!-- User -->
    <li class="nav-item dropdown no-arrow osahan-right-navbar-user">
        <b-nav-item-dropdown right class="user-dropdown-link">
        <template slot="button-content">
            <img alt="Avatar" src="//via.placeholder.com/81x81">
            %USERNAME%
        </template>
            <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'user-circle']" /> &nbsp; My Account</a>
            <nuxt-link class="dropdown-item" to="/my-lessons"><font-awesome-icon :icon="['fas', 'video']" /> &nbsp; My Lessons</nuxt-link>
            <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'cog']" /> &nbsp; Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" v-b-modal.logoutModal><font-awesome-icon :icon="['fas', 'sign-out-alt']" /> &nbsp; Logout</a>
        </b-nav-item-dropdown>
    </li>

    <!-- Logout Modal-->
    <b-modal id="logoutModal" ref="logoutModal" centered>
        <template v-slot:modal-title>
            Ready to Leave?
        </template>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <template v-slot:modal-footer>
            <button class="btn btn-secondary" @click="$refs['logoutModal'].hide()">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
        </template>
    </b-modal>
  </ul>
</template>

<script>
export default {
    data () {
        return {
            notifications: [
                {
                    title: "Notification 1",
                    link: "#"
                },
                {
                    title: "Notification 2",
                    link: "#"
                },
                {
                    title: "Notification 3",
                    link: "#"
                },
                {
                    title: "Notification 4",
                    link: "#"
                },
                {
                    title: "Notification 5",
                    link: "#"
                },
                {
                    title: "Notification 6",
                    link: "#"
                },
                {
                    title: "Notification 7",
                    link: "#"
                },
                {
                    title: "Notification 8",
                    link: "#"
                },
                {
                    title: "Notification 9",
                    link: "#"
                },
                {
                    title: "Notification 10",
                    link: "#"
                }
            ],
            messages: [
                {
                    title: "Message 1",
                    link: "#"
                },
                {
                    title: "Message 2",
                    link: "#"
                },
                {
                    title: "Message 3",
                    link: "#"
                }
            ]
        }
    },
    computed: {
        numberOfNotifications () {
            if(this.notifications.length > 9) {
                return "9+"
            }
            return this.notifications.length
        },
        numberOfMessages () {
            if(this.messages.length > 9) {
                return "9+"
            }
            return this.messages.length
        }
    }
}
</script>