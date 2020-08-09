<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
        &nbsp;&nbsp;
        <a class="navbar-brand mr-1" href="/"><img class="img-fluid" alt="" src="//via.placeholder.com/120x30?text=PLAIVE_LOGO"></a>
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
