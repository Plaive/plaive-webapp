<template>
  <ul class="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
    <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <font-awesome-icon :icon="['fas', 'bell']" />
            <span class="badge badge-danger">9+</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
            <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'edit']" /> &nbsp; Action</a>
            <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'headphones-alt']" /> &nbsp; Another action</a>
        </div>
    </li>
    <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span class="badge badge-success">7</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
            <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'edit']" /> &nbsp; Action</a>
            <a class="dropdown-item" href="#"><font-awesome-icon :icon="['fas', 'headphones-alt']" /> &nbsp; Another action</a>
        </div>
    </li>
    <li class="nav-item dropdown no-arrow osahan-right-navbar-user">
        <a class="nav-link dropdown-toggle user-dropdown-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img alt="Avatar" src="@/assets/img/user.png">
            %USERNAME%
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="account.html"><font-awesome-icon :icon="['fas', 'user-circle']" /> &nbsp; My Account</a>
            <a class="dropdown-item" href="subscriptions.html"><font-awesome-icon :icon="['fas', 'video']" /> &nbsp; Subscriptions</a>
            <a class="dropdown-item" href="settings.html"><font-awesome-icon :icon="['fas', 'cog']" /> &nbsp; Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"><font-awesome-icon :icon="['fas', 'sign-out-alt']" /> &nbsp; Logout</a>
        </div>
    </li>
  </ul>
</template>