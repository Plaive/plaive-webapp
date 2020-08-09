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
            <li>
                <a href="#">
                    <img class="img-fluid" alt="" src="@/assets/img/s1.png"> Your Life
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="img-fluid" alt="" src="@/assets/img/s2.png"> Unboxing
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="img-fluid" alt="" src="@/assets/img/s3.png"> Product / Service
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="img-fluid" alt="" src="@/assets/img/s4.png">  Gaming
                </a>
            </li>
        </ul>
    </li>
</ul>
</template>