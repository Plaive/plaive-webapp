<template>
  <ul class="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
    <!-- Notifications -->
    <li class="nav-item dropdown no-arrow mx-1">
        <b-nav-item-dropdown right>
        <template slot="button-content">
            <font-awesome-icon :icon="['fas', 'bell']" />
            <span class="badge badge-danger">9+</span>
        </template>
            <b-dropdown-item>Notification 1</b-dropdown-item>
            <b-dropdown-item>Notification 2</b-dropdown-item>
            <b-dropdown-item>Notification 3</b-dropdown-item>
        </b-nav-item-dropdown>
    </li>

    <!-- Messages -->
    <li class="nav-item dropdown no-arrow mx-1">
        <b-nav-item-dropdown right>
        <template slot="button-content">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span class="badge badge-success">3</span>
        </template>
            <b-dropdown-item>Message 1</b-dropdown-item>
            <b-dropdown-item>Message 2</b-dropdown-item>
            <b-dropdown-item>Message 3</b-dropdown-item>
        </b-nav-item-dropdown>
    </li>

    <!-- User -->
    <li class="nav-item dropdown no-arrow osahan-right-navbar-user">
        <b-nav-item-dropdown right class="user-dropdown-link">
        <template slot="button-content">
            <img alt="Avatar" src="@/assets/img/user.png">
            %USERNAME%
        </template>
            <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'user-circle']" /> &nbsp; My Account</a>
            <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'video']" /> &nbsp; Subscriptions</a>
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