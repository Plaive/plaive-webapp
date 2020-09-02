<template>
  <div>
    <div class="single-channel-image">
      <img class="img-fluid" alt="" :src="channel.banner">
      <div class="channel-profile">
        <img class="channel-profile-img" alt="" :src="channel.logo">
      </div>
    </div>
    <div class="single-channel-nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <span class="channel-brand">{{channel.name}}</span>
        <button class="navbar-toggler" type="button" v-b-toggle.navbarSupportedContent>
          <span class="navbar-toggler-icon"></span>
        </button>
        <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li :class="activeTab === 'about' ? 'nav-item active' : 'nav-item'">
                  <button class="btn btn-link border-none nav-link" @click="activeTab = 'about'">{{$t('about')}}</button>
              </li>
              <li :class="activeTab === 'lessons' ? 'nav-item active' : 'nav-item'">
                  <button class="btn btn-link border-none nav-link" @click="activeTab = 'lessons'">{{$t('lessons')}}</button>
              </li>
            </ul>
            <form v-if="isMy === false" class="form-inline my-2 my-lg-0">
              <input v-if="activeTab === 'lessons'" class="form-control form-control-sm mr-sm-1" type="search" placeholder="Search" aria-label="Search">
              <button v-if="activeTab === 'lessons'" class="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit">
                <font-awesome-icon :icon="['fas', 'search']" />
              </button> 
              &nbsp;&nbsp;&nbsp; 
              <div v-if="logged == 'true'">
                <button v-if="channel.subscribed === false" class="btn btn-outline-danger btn-sm" type="button">{{$t('subscribe')}}</button>
                <button v-else class="btn btn-outline-secondary btn-sm" type="button">{{$t('subscribed')}}</button>
              </div>
            </form>
            <form v-else class="form-inline my-2 my-lg-0">
              <nuxt-link to="/lesson/new" class="d-none d-md-inline-block btn btn-outline-danger btn-sm" type="button">{{$t('addLesson')}}</nuxt-link>
              <nuxt-link to="/lesson/new" class="d-block d-md-none btn btn-block btn-outline-danger btn-sm" type="button">{{$t('addLesson')}}</nuxt-link>
            </form>
        </b-collapse>
      </nav>
    </div>
    <div class="container-fluid" mode="out-in" :duration="250">
      <transition name="page">
        <div v-if="activeTab === 'about'" class="box mb-3">
          <h6>{{$t('about')}}</h6>
          <p>{{channel.about}}</p>
        </div>
      </transition>
      <transition name="page" mode="out-in" :duration="250">
        <VideoList v-if="activeTab === 'lessons'" :type="isMy === true ?'myChannelLessons' : ''" :title="$t('lessons')" :videos="lessons" />
      </transition>
    </div>
  </div>
</template>

<script>
import moment from "moment"
export default {
  head() {
    return {
      title: this.channel.name + ' - Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
      return {
        logged: true,
        activeTab: "about",
        isMy: false,
        lessons: [
          {
              img: "//via.placeholder.com/270x169",
              link: "/video/1",
              title: "There are many variations of passages of Lorem",
              category: "Education",
              date: moment().format("DD/MM/YYYY"),
              start: "14:30",
              end: "16:00",
              free: false
          },
          {
              img: "//via.placeholder.com/270x169",
              link: "/video/1",
              title: "There are many variations of passages of Lorem",
              category: "Education",
              date: moment().format("DD/MM/YYYY"),
              start: "14:30",
              end: "16:00",
              free: false
          }
        ],
        channel: {
          banner: "//via.placeholder.com/1500x386",
          logo: "//via.placeholder.com/130x130",
          name: "Channel Name",
          subscribed: false,
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada purus a finibus tempor. Morbi congue odio at augue condimentum, sit amet suscipit felis lobortis. Duis a tortor ut magna varius auctor sit amet a tortor. Sed quis leo lacus. Nullam elementum nisl viverra, viverra diam et, sagittis nunc. Vestibulum viverra finibus enim et auctor. Morbi bibendum augue egestas hendrerit porttitor. Vestibulum suscipit nisi vitae luctus auctor. Morbi ac orci auctor, finibus nisi nec, vehicula risus. Morbi faucibus odio eu felis fringilla, non facilisis felis dignissim. Phasellus elementum purus eget metus faucibus, nec rutrum mi faucibus. Morbi faucibus maximus massa, sed lobortis diam porta non. Nullam bibendum eget magna in faucibus. Fusce quis neque gravida, pretium enim quis, feugiat turpis. Etiam mi quam, euismod vel nulla ac, dictum cursus dui. Cras iaculis sagittis orci eget suscipit. Nam condimentum faucibus nisi nec commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean venenatis ullamcorper sagittis. Quisque tortor mauris, vulputate lobortis consectetur ac, volutpat eu sapien. Ut laoreet eget ipsum id tempus. Aenean lorem ipsum, laoreet et mauris at, pellentesque finibus enim. Pellentesque faucibus diam at ullamcorper ornare. Phasellus maximus ante consectetur, facilisis sapien ut, maximus est. Phasellus sit amet imperdiet turpis, vitae sollicitudin eros. Ut risus justo, hendrerit quis ipsum sit amet, fringilla finibus erat.Pellentesque sodales non mi ut pretium. Sed maximus, orci eu rutrum pretium, purus enim dictum arcu, nec tincidunt risus lacus quis urna. Sed ullamcorper nulla a nulla porttitor, in interdum dui semper. Sed dolor eros, fringilla vitae tortor vitae, eleifend luctus libero. Donec egestas libero vitae risus volutpat dignissim. Sed venenatis rutrum odio. Nulla lectus lectus, interdum nec imperdiet a, volutpat non est. Nulla hendrerit augue est, at lobortis odio fermentum eu. Nam posuere ac ligula et venenatis. Suspendisse et venenatis lacus. Integer ut porta ex, malesuada mattis quam. Donec placerat sem mattis bibendum rutrum. Vivamus ut accumsan neque."
        },
      }
  },
  mounted () {
    if(this.$route.params.id === "my") {
      this.isMy = true
    }
    this.logged = sessionStorage.getItem("logged")
  }
}
</script>
