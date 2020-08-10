<template>
  <div class="top-category section-padding mb-4">
    <div class="row">
        <div class="col-md-12">
            <div class="main-title">
                <h6>Categories</h6>
            </div>
        </div>
        <div class="col-md-12">
            <carousel
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
                <div v-for="(cat, index) in categories" :key="index" class="item">
                    <div class="category-item">
                        <nuxt-link :to="cat.link">
                            <img class="img-fluid" :src="cat.logo" alt="">
                            <h6>{{cat.name}}</h6>
                            <p>74,853 views</p>
                        </nuxt-link>
                    </div>
                </div>
            </carousel>
        </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel"

export default {
  components: { 
    carousel 
  },
  data() {
    return {
      categories: [
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
        {
          link: "#",
          logo: "//via.placeholder.com/130x130",
          name: "Category Name",
          subscribers: "382.323"
        },
      ]
    }
  }
}
</script>