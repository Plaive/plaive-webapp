<template>
<client-only>
  <div class="top-category section-padding mb-4">
    <div class="row">
        <div class="col-md-12">
            <div class="main-title">
                <h6>Categories</h6>
            </div>
        </div>
        <div class="col-md-12">
            <div v-if="!isNuxtReady" style="max-height:160px;min-height:160px;height:160px"></div>
            <carousel v-else
              nav 
              autoplay 
              loop 
              :dots="false" 
              :responsive="{0:{items:1},600:{items:3},1000:{items:4},1200:{items:8}}" 
              :autoplayTimeout="2000"
              :autoplayHoverPause="true"
              :navText="['&lt', '&gt']"
              class="owl-carousel-category" 
              style="max-height:160px">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s1.png" alt="">
                            <h6>Your Life</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s2.png" alt="">
                            <h6>Unboxing Cool</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s3.png" alt="">
                            <h6>Service Reviewing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s4.png" alt="">
                            <h6>Gaming <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><font-awesome-icon :icon="['fas', 'check-circle']" /></span></h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s5.png" alt="">
                            <h6>Technology Tutorials</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s6.png" alt="">
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s7.png" alt="">
                            <h6>Cooking</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s8.png" alt="">
                            <h6>Traveling</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s1.png" alt="">
                            <h6>Education</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s2.png" alt="">
                            <h6>Noodles, Sauces & Instant Food</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s3.png" alt="">
                            <h6>Comedy <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><font-awesome-icon :icon="['fas', 'check-circle']" /></span></h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                            <img class="img-fluid" src="@/assets/img/s4.png" alt="">
                            <h6>Lifestyle Advice</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </carousel>
        </div>
    </div>
  </div>
</client-only>
</template>

<script>
const carousel = () => window && window !== undefined ? import("vue-owl-carousel") : null;

export default {
  components: { 
    carousel 
  },
  data() {
    return {
      isNuxtReady: false,
    }
  },
  mounted() {
    const vm = this;
    if (process.browser) {
      window.onNuxtReady(app => {
        console.log("Nuxt ready!");
        vm.isNuxtReady = true;
      });
    }
  }
}
</script>