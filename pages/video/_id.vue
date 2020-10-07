<template>
  <div class="video-block section-padding">
    <div class="row">
        <div class="col-md-8">
          <div class="single-video-left">
              <div class="single-video">
                <video ref="videoPlayer" class="video-js vjs-16-9 vjs-big-play-centered" controls autoplay playsinline></video>
              </div>
              <div class="single-video-title box mb-3">
                <div class="d-none d-md-inline-block float-right">
                  <div class="row">
                    <div class="col-md-12">
                      <div v-if="logged == 'true' && video.free !== true" >
                        <button v-if="video.purchased === false" class="btn btn-danger btn-sm" type="button">{{$t('buy')}}</button>
                        <button v-else class="btn btn-danger btn-sm" disabled type="button">{{$t('alreadyPurchased')}}</button>
                      </div>
                    </div>
                  </div>
                </div>
                <h2><a href="#">{{video.title}}</a></h2>
                <p class="mb-0">
                  <font-awesome-icon :icon="['fas', 'calendar-alt']" /> {{video.date}} 
                  <font-awesome-icon :icon="['fas', 'clock']" /> {{video.start}} - {{video.end}}
                </p>
                <div v-if="logged == 'true' && video.free !== true" class="d-block d-md-none mt-3">
                  <button v-if="video.purchased === false" class="btn btn-danger btn-block btn-sm" type="button">{{$t('buy')}}</button>
                  <button v-else class="btn btn-danger btn-block btn-sm" disabled type="button">{{$t('alreadyPurchased')}}</button>
                </div>
              </div>
              <div class="single-video-author box mb-3">
                <div class="d-none d-md-inline-block float-right">
                  <ChannelSubscribeButton :channel="channel"  @subscribed="subscribed" @unsubscribed="unsubscribed" />
                </div>
                <img class="img-fluid" :src="channel.logo" alt="">
                <p><nuxt-link :to="channel.link"><strong>{{channel.name}}</strong></nuxt-link></p>
                <small>{{channel.subscribers}}</small>
                <div class="d-block d-md-none mt-3">
                  <ChannelSubscribeButton :channel="channel"  @subscribed="subscribed" @unsubscribed="unsubscribed" />
                </div>
              </div>
              <div class="single-video-info-content box mb-3">
                <h6>{{$t('category')}}:</h6>
                <p>{{video.category}}</p>
                <h6>{{$t('description')}}:</h6>
                <p>{{video.description}}</p>
                <h6>{{$t('tags')}}:</h6>
                <p class="tags mb-0">
                    <span v-for="(tag, index) in video.tags" :key="index" style="margin: 0 3px"><nuxt-link to="tag.link">{{tag.tag}}</nuxt-link></span>
                </p>
              </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-video-right">
              <div class="row">
                <div class="col-md-12">
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"
import videojs from "video.js"

export default {
  head() {
    return {
      title: this.video.title + ' - Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
    return {
      logged: false,
      player: null,
      videoOptions: {
				autoplay: false,
        controls: true,
        techOrder: ["AmazonIVS"],
        fluid: true,
        responsive: true,
        liveui: true,
        controlBar: {
          progressControl: false,
          seekBar: false,
          captions: false
        }
			},
      video: {
        title: "",
        description: "",
        category: "",
        date: "",
        start: "",
        end: "",
        playbackUrl: "",
        purchased: false,
        free: false,
        tags: []
      },
      channel: {
        id: "",
        link: "",
        name: "",
        description: "",
        logo: "",
        banner: "",
        subscribed: false,
        subscribers: 0
      }
    }
  },
  methods: {
    async getLesson () {
      var lessonRes = await this.$axios.$get(`${this.$config.LESSONS_BASE_URL}/lesson/${this.$route.params.id}`)
      console.log(lessonRes)
      this.video.title = lessonRes.title
      this.video.description = lessonRes.description
      this.video.category = lessonRes.category
      this.video.date = lessonRes.date
      this.video.start = lessonRes.start
      this.video.end = lessonRes.end
      this.video.playbackUrl = lessonRes.playbackUrl
      this.video.free = lessonRes.price == 0 ? true : false
      this.video.tags = lessonRes.tags

      await this.getChannel(lessonRes.channelId)
      const playbackUrl = this.video.playbackUrl
      registerIVSTech(videojs)
      this.player = videojs(this.$refs.videoPlayer, this.videoOptions, function onPlayerReady() {
        this.src(playbackUrl);
      })
    },
    async getChannel (id) {
      this.channel.logo = "//via.placeholder.com/500x500"
      this.channel.banner = "//via.placeholder.com/1500x386"
      var channelRes = await this.$axios.$get(`${this.$config.CHANNELS_BASE_URL}/channel/${id}`)

      this.channel.id = id
      this.channel.link = `/channel/${id}`
      this.channel.name = channelRes.name
      this.channel.description = channelRes.description
      this.channel.logo = channelRes.logo == "" ? "//via.placeholder.com/500x500" : channelRes.logo
      this.channel.banner = channelRes.banner == "" ? "//via.placeholder.com/1500x386" : channelRes.banner
      this.channel.subscribed = channelRes.subscribed
      this.channel.subscribers = channelRes.subscribers
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
  computed: {
    categories () {
      return this.channel.categories.join(", ")
    }
  },
  mounted () {
    this.logged = sessionStorage.getItem("logged")
    this.getLesson()
  }
}
</script>