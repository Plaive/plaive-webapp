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
                    <div class="col-md-4">
                  <div v-if="logged == 'true'">
                    <button v-if="video.purchased === false" class="btn btn-danger btn-sm" type="button">{{$t('buy')}}</button>
                    <button v-else class="btn btn-danger btn-sm" disabled type="button">{{$t('alreadyPurchased')}}</button>
                  </div>
                    </div>
                    <div class="col-md-8">
                  <nuxt-link v-if="video.purchased === true || video.free === true" to="/video/fullscreen/1')" class="btn btn-primary btn-sm">{{$t('enterClassroom')}}</nuxt-link>
                    </div>
                  </div>
                </div>
                <h2><a href="#">{{video.title}}</a></h2>
                <p class="mb-0">
                  <font-awesome-icon :icon="['fas', 'calendar-alt']" /> {{video.date}} 
                  <font-awesome-icon :icon="['fas', 'clock']" /> {{video.start}} - {{video.end}}
                </p>
                <div v-if="logged == 'true'" class="d-block d-md-none mt-3">
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
                <small>Created on {{channel.creationDate}}</small>
                <div class="d-block d-md-none mt-3">
                  <ChannelSubscribeButton :channel="channel"  @subscribed="subscribed" @unsubscribed="unsubscribed" />
                </div>
              </div>
              <div class="single-video-info-content box mb-3">
                <h6>{{$t('categories')}}:</h6>
                <p>{{categories}}</p>
                <h6>{{$t('about')}}:</h6>
                <p>{{channel.about}}</p>
                <h6>{{$t('tags')}}:</h6>
                <p class="tags mb-0">
                    <span v-for="(tag, index) in channel.tags" :key="index" style="margin: 0 3px"><nuxt-link to="tag.link">{{tag.name}}</nuxt-link></span>
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
                      <h6>{{$t('youMayBeAlsoInterestedIn')}}</h6>
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
          captions: false,
          fullscreenToggle: this.isMobile()
        },
        userActions: {
          doubleClick: this.isMobile()
        }
			},
      video: {
        title: "Contrary to popular belief, Lorem Ipsum (2020) is not.",
        category: "Education",
        date: moment().format("DD/MM/YYYY"),
        start: "14:30",
        end: "16:00",
        playbackUrl: "https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8",
        purchased: false,
        free: false
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
  methods: {
    isMobile () {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check
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
    const playbackUrl = this.video.playbackUrl
    registerIVSTech(videojs)
    this.player = videojs(this.$refs.videoPlayer, this.videoOptions, function onPlayerReady() {
      this.src(playbackUrl);
    })
    this.logged = sessionStorage.getItem("logged")
  }
}
</script>