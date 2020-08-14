<template>
        <section class="login-main-wrapper">
         <div class="container-fluid pl-0 pr-0">
            <div class="row no-gutters">
               <div class="col-md-5 p-5 bg-white full-height">
                  <div class="login-main-left">
                     <Nuxt />
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="login-main-right bg-white p-5 mt-5 mb-5 d-none d-md-block">
                    <carousel
                      :items="1"
                      loop
                      :autoplayTimeout="2000"
                      :autoplayHoverPause="true"
                      class="owl-carousel-login"
                      :navText="['&lt', '&gt']"
                    >
                      <div class="item">
                          <div class="carousel-login-card text-center">
                            <img src="//via.placeholder.com/264x256" class="img-fluid" alt="LOGO">
                            <h5 class="mt-5 mb-3">Lorem ipsum</h5>
                            <p class="mb-4">when an unknown printer took a galley of type and scrambled<br> it to make a type specimen book. It has survived not <br>only five centuries</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="carousel-login-card text-center">
                            <img src="//via.placeholder.com/264x256" class="img-fluid" alt="LOGO">
                            <h5 class="mt-5 mb-3">Lorem ipsum</h5>
                            <p class="mb-4">when an unknown printer took a galley of type and scrambled<br> it to make a type specimen book. It has survived not <br>only five centuries</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="carousel-login-card text-center">
                            <img src="//via.placeholder.com/264x256" class="img-fluid" alt="LOGO">
                            <h5 class="mt-5 mb-3">Lorem ipsum</h5>
                            <p class="mb-4">when an unknown printer took a galley of type and scrambled<br> it to make a type specimen book. It has survived not <br>only five centuries</p>
                          </div>
                      </div>
                    </carousel>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>

<script>
import carousel from "vue-owl-carousel"

export default {
  components: { 
    carousel 
  },
  mounted () {
    const body = document.body
    body.classList.remove("login-main-body")
    body.classList.add("login-main-body")
  }
}
</script>
