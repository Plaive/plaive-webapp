<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
        &nbsp;&nbsp;
        <nuxt-link to="/" class="navbar-brand mr-1"><img class="img-fluid" alt="" src="//via.placeholder.com/120x30?text=PLAIVE_LOGO"></nuxt-link>
        <!-- Navbar Search -->
        <GlobalSearch />
        <!-- Navbar -->
        <Navbar />
    </nav>
    <div id="wrapper">
        <!-- Sidebar -->
        <Sidebar />
        <div id="content-wrapper">
            <div class="container-fluid pb-0">
              <Nuxt />
            </div>
            <!-- Sticky Footer -->
            <Footer />
        </div>
    </div>
  </div>
</template>
