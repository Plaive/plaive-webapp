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
                  <button class="btn btn-link border-none nav-link" @click="activeTab = 'about'">{{$t('description')}}</button>
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
              <ChannelSubscribeButton :channel="channel" @subscribed="subscribed" @unsubscribed="unsubscribed" />
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
          <h6>{{$t('description')}}</h6>
          <p v-html="channel.description"></p>
        </div>
      </transition>
      <transition name="page" mode="out-in" :duration="250">
        <div v-if="activeTab === 'lessons'" class="box mb-3">
          <VideoList :type="isMy === true ?'myChannelLessons' : ''" :title="$t('lessons')" :videos="lessons" />
        </div>
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
  data () {
      return {
        logged: true,
        activeTab: "about",
        isMy: false,
        lessons: [],
        channel: {
          banner: "//via.placeholder.com/1500x386",
          logo: "//via.placeholder.com/500x500",
          name: "",
          subscribed: null,
          description: ""
        },
      }
  },
  methods: {
    async getChannel () {
      this.channel.logo = "//via.placeholder.com/500x500"
      this.channel.banner = "//via.placeholder.com/1500x386"
      var channelRes = await this.$axios.$get(`${this.$config.CHANNELS_BASE_URL}/channel/${this.$route.params.id}`)
      if(channelRes == "") {
        await this.$axios.$post(`${this.$config.CHANNELS_BASE_URL}/channel`)
      } else {
        this.channel.id = channelRes.id
        this.channel.name = channelRes.name
        this.channel.description = channelRes.description
        this.channel.logo = channelRes.logo == "" ? "//via.placeholder.com/500x500" : channelRes.logo
        this.channel.banner = channelRes.banner == "" ? "//via.placeholder.com/1500x386" : channelRes.banner
        this.channel.subscribed = channelRes.subscribed
      }
    },
    async getChannelLessons () {
      this.lessons = []
      var lessonsRes = await this.$axios.$get(`${this.$config.LESSONS_BASE_URL}/lessons/channel/${this.$route.params.id}?size=50`)
      lessonsRes.data.map((lesson) => {
        console.log(lesson)
        this.lessons.push({
          id: lesson.id,
          img: typeof lesson.banner == "undefined" ? "//via.placeholder.com/270x169" : lesson.banner,
          link: `/video/${lesson.id}`,
          title: lesson.title,
          category: lesson.category,
          date: lesson.date,
          start: lesson.start,
          end: lesson.end,
          free: lesson.price == 0 ? true : false,
          streamingServer: lesson.ingestEndpoint,
          streamingKey: typeof lesson.streamKey != "undefined" ? lesson.streamKey.value : undefined
        })
      })
    },
    subscribed (channel) {
      this.channel.subscribed = true
      this.channel.subscribers++
    },
    unsubscribed (channel) {
      this.channel.subscribed = false
      this.channel.subscribers--
    }
  },
  mounted () {
    if(this.$route.params.id === "my") {
      this.isMy = true
    }
    this.logged = sessionStorage.getItem("logged")
    this.getChannel()
    this.getChannelLessons()
  }
}
</script>
