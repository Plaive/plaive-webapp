<template>
  <div>
    <Navbar />
    <div id="wrapper">
        <!-- Sidebar -->
        <Sidebar />
        <div class="single-channel-page" id="content-wrapper">
            <Nuxt />
            <Footer className="sticky-footer ml-0"/>
        </div>
    </div>
  </div>
</template>
