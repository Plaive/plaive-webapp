<template>
  <div class="video-block section-padding">
    <div class="row">
        <div class="col-md-8">
          <div class="single-video-left">
              <div class="single-video">
                <video ref="videoPlayer" class="video-js vjs-16-9 vjs-big-play-centered" controls autoplay playsinline></video>
              </div>
              <div class="single-video-title box mb-3">
                <div class="float-right">
                  <button v-if="channel.subscribed === false" class="btn btn-danger" type="button">Subscribe</button>
                  <button v-else class="btn btn-secondary" type="button">Subscribed</button>
                </div>
                <h2><a href="#">{{video.title}}</a></h2>
                <p class="mb-0">
                  <font-awesome-icon :icon="['fas', 'calendar-alt']" /> {{video.date}} 
                  <font-awesome-icon :icon="['fas', 'clock']" /> {{video.start}} - {{video.end}}
                </p>
              </div>
              <div class="single-video-author box mb-3">
                <div class="float-right">
                  <button v-if="channel.subscribed === false" class="btn btn-danger" type="button">Subscribe</button>
                  <button v-else class="btn btn-secondary" type="button">Subscribed</button>
                </div>
                <img class="img-fluid" :src="channel.logo" alt="">
                <p><nuxt-link :to="channel.link"><strong>{{channel.name}}</strong></nuxt-link></p>
                <small>Created on {{channel.creationDate}}</small>
              </div>
              <div class="single-video-info-content box mb-3">
                <h6>Categories :</h6>
                <p>{{categories}}</p>
                <h6>About :</h6>
                <p>{{channel.about}}</p>
                <h6>Tags :</h6>
                <p class="tags mb-0">
                    <span v-for="(tag, index) in channel.tags" :key="index" style="margin: 0 3px"><nuxt-link :to="tag.link">{{tag.name}}</nuxt-link></span>
                </p>
              </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="single-video-right">
              <div class="row">
                <div class="col-md-12">
                    <div class="adblock">
                      <div class="img">
                          Google AdSense<br>
                          336 x 280
                      </div>
                    </div>
                    <div class="main-title">
                      <h6>You may be also interested in</h6>
                    </div>
                </div>
                <div class="col-md-12">
                    <div v-for="(video, index) in suggestedVideos" :key="index" class="video-card video-card-list">
                      <div class="video-card-image">
                          <nuxt-link class="play-icon" :to="video.link"><i class="fas fa-play-circle"></i></nuxt-link>
                          <nuxt-link :to="video.link"><img class="img-fluid" :src="video.img" alt=""></nuxt-link>
                          <div v-if="video.free === true" class="time">FREE</div>
                      </div>
                      <div class="video-card-body">
                          <div class="video-title">
                            <nuxt-link :to="video.link">{{video.title}}</nuxt-link>
                          </div>
                          <div class="video-page text-success">
                            {{video.category}}
                          </div>
                          <div class="video-view">
                            <font-awesome-icon :icon="['fas', 'calendar-alt']" /> {{video.date}} 
                            <font-awesome-icon :icon="['fas', 'clock']" /> {{video.start}} - {{video.end}}
                          </div>
                      </div>
                    </div>
                    <div class="adblock mt-0">
                      <div class="img">
                          Google AdSense<br>
                          336 x 280
                      </div>
                    </div>
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
  data () {
    return {
      player: null,
      videoOptions: {
				autoplay: false,
        controls: true,
        techOrder: ["AmazonIVS"]
			},
      video: {
        title: "Contrary to popular belief, Lorem Ipsum (2020) is not.",
        category: "Education",
        date: moment().format("DD/MM/YYYY"),
        start: "14:30",
        end: "16:00",
        playbackUrl: "https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8",
        booked: false,
      },
      channel: {
        link: "/channel/1",
        logo: "//via.placeholder.com/130x130",
        name: "Channels Name",
        creationDate: moment().format("DD/MM/YYYY"),
        subscribers: "382.323",
        subscribed: false,
        categories: ["Gaming", "PS4 Exclusive", "Gameplay", "1080p"],
        about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved overVarious versions have evolved over the years, sometimes",
        tags: [
          {
            name: "Tag 1",
            link: "#"
          },
          {
            name: "Tag 2",
            link: "#"
          },
          {
            name: "Tag 3",
            link: "#"
          },
          {
            name: "Tag 4",
            link: "#"
          }
        ]
      },
      suggestedVideos: [
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
          },
          {
              img: "//via.placeholder.com/270x169",
              link: "/video/1",
              title: "There are many variations of passages of Lorem",
              category: "Education",
              date: moment().format("DD/MM/YYYY"),
              start: "14:30",
              end: "16:00",
              free: true
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
          },
          {
              img: "//via.placeholder.com/270x169",
              link: "/video/1",
              title: "There are many variations of passages of Lorem",
              category: "Education",
              date: moment().format("DD/MM/YYYY"),
              start: "14:30",
              end: "16:00",
              free: true
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
      ]
    }
  },
  computed: {
    categories () {
      return this.channel.categories.join(", ")
    }
  },
  mounted () {
    const playbackUrl = this.video.playbackUrl
    registerIVSTech(videojs)
    this.player = videojs(this.$refs.videoPlayer, this.videoOptions, function onPlayerReady() {
      this.src(playbackUrl);
    })
  }
}
</script>