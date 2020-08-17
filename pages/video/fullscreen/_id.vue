<template>
  <div ref="videoContainer">
    <div class="row no-gutters">
      <div :class="showChat === true ? 'col-10' : 'col-12 full-height'">
        <div style="  position: relative;top:50%;transform:translateY(-50%);">
          <div class="video-overlay video-overlay-top">
            <div class="row">
              <div class="col-2">
                <nuxt-link to="/video/1"><font-awesome-icon :icon="['fas', 'arrow-left']" /></nuxt-link>
              </div>
              <div class="col-8 text-center">
                <span style="font-size:20px">{{video.title}}</span>
              </div>
              <div class="col-2 text-right">
                <span class="dot mr-2"></span> <span>LIVE</span> <button v-if="showChat === false" @click="showChatBox" class="btn btn-link border-none" style="color:#fff;font-size:20px"><font-awesome-icon :icon="['fas', 'comment']" /></button>
              </div>
            </div>
          </div>
          <video ref="videoPlayer" class="video-js vjs-16-9 vjs-big-play-centered" controls autoplay playsinline></video>
        </div>
      </div>
      <div v-if="showChat === true" class="col-2">
        <div class="chat-toggle">
          <button v-if="showChat === true" @click="showChat = false" class="btn btn-link text-danger border-none" style="font-size:20px"><font-awesome-icon :icon="['fas', 'times']"/></button>
        </div>

        <div class="px-2 py-2 chat-box bg-white">

          <infinite-loading direction="top" @infinite="infiniteHandler"></infinite-loading>

          <div v-for="(msg, index) in chatMessages" :key="index" class="media mb-2">
            <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="25" class="rounded-circle">
            <div class="media-body ml-1">
              <div class="bg-light rounded py-1 px-1 mb-1">
                <p class="text-small mb-0 text-muted">{{msg.message}}</p>
                <p class="small text-muted mb-0">{{msg.nickname}} @{{msg.timestamp}}</p>
              </div>
            </div>
          </div>

          <div style="height:55px" ref="chatBoxEnd" />
          
        </div>

        <!-- Typing area -->
        <div class="chat-typing-area">
          <form class="bg-light" v-on:submit.prevent="sendMessage">
            <div class="input-group">
              <input type="text" placeholder="Type a message" class="form-control rounded-0 border-0 py-4 bg-light" v-model="typedMessage">
              <div class="input-group-append">
                <button type="submit" class="btn btn-link text-success"> <font-awesome-icon :icon="['fas', 'paper-plane']" /></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"
import videojs from "video.js"
import InfiniteLoading from 'vue-infinite-loading'

export default {
  layout:"fullscreen-video",
  head() {
    return {
      title: this.video.title + ' - Plaive',
    }
  },
  components: {
    InfiniteLoading,
  },
  data () {
    return {
      showChat: true,
      page: 1,
      chatScrollPosition: null,
      typedMessage: "",
      player: null,
      videoOptions: {
				autoplay: false,
        controls: true,
        techOrder: ["AmazonIVS"],
        fluid: true,
        liveui: true,
        controls: false,
			},
      video: {
        title: "Contrary to popular belief, Lorem Ipsum (2020) is not.",
        category: "Education",
        date: moment().format("DD/MM/YYYY"),
        start: "14:30",
        end: "16:00",
        playbackUrl: "https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8",
        purchased: true,
      },
      chatMessages: []
    }
  },
  methods: {
    infiniteHandler($state) {
      this.page += 1
      var messagesChunk = []
      for(var i = 35; i > 0; i--) {
        this.chatMessages.push({
          nickname: "username",
          message: "Test which is a new approach all solutions",
          timestamp: moment().add(-i, "minutes").format("HH:mm:ss")
        })
      }
      this.chatMessages.unshift(messagesChunk)
      $state.loaded()
      //no more results $state.complete()
    },
    onFullScreenChange () {
      var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
      if(fullscreenElement === undefined) {
        this.$router.replace("/video/1").catch(()=>{});
      }

      var isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
      if(isFullscreen === false) {
        this.$router.replace("/video/1").catch(()=>{});
      }
    },
    sendMessage () {
      this.chatMessages.push({
        nickname: "username",
        message: this.typedMessage,
        timestamp: moment().format("HH:mm:ss")
      })
      this.typedMessage = ""
      this.$nextTick(() => {
        var chatBoxEnd = this.$refs.chatBoxEnd
        chatBoxEnd.scrollIntoView()
      })
    },
    showChatBox () {
      this.showChat = true
      this.$nextTick(() => {
        var chatBoxEnd = this.$refs.chatBoxEnd
        chatBoxEnd.scrollIntoView()
      })
    }
  },
  beforeMount() {
    var self = this;
    document.addEventListener("fullscreenchange", self.onFullScreenChange)
    document.addEventListener("webkitfullscreenchange", self.onFullScreenChange)
    document.addEventListener("mozfullscreenchange", self.onFullScreenChange)
  },
  beforeDestroy() {
    document.removeEventListener("fullscreenchange", self.onFullScreenChange)
    document.removeEventListener("webkitfullscreenchange", self.onFullScreenChange)
    document.removeEventListener("mozfullscreenchange", self.onFullScreenChange)
  },
  mounted () {
    const playbackUrl = this.video.playbackUrl
    registerIVSTech(videojs)
    this.player = videojs(this.$refs.videoPlayer, this.videoOptions, function onPlayerReady() {
      this.src(playbackUrl);
    })
    this.$refs.videoContainer.requestFullscreen();

    for(var i = 35; i > 0; i--) {
      this.chatMessages.push({
        nickname: "username",
        message: "Test which is a new approach all solutions",
        timestamp: moment().add(-i, "minutes").format("HH:mm:ss")
      })
    }
    if(this.showChat === true) {
      this.$nextTick(() => {
        var chatBoxEnd = this.$refs.chatBoxEnd
        chatBoxEnd.scrollIntoView()
      })
    }
  }
}
</script>

<style scoped>
.full-height {
  height: 100vh;
}

.chat-toggle {
  position: absolute;
  left: -40px;
  width: 40px;
  background: #fff;
}

.chat-typing-area {
  position: relative;
}

.text-small {
  font-size: 0.9rem;
}

.messages-box,
.chat-box {
  height: calc(100vh - 48px);
  overflow-y: scroll;
}

.rounded-lg {
  border-radius: 0.5rem;
}

input::placeholder {
  font-size: 0.9rem;
  color: #999;
}

.dot {
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
}

.video-overlay {
  position: absolute;
  width: 100%;
  z-index: 999990;
  background: transparent;
  padding: 0px 35px;
  color: #fff;
}

.video-overlay a {
  color: #fff;
  font-size: 20px;
}

.video-overlay span {
  color: #fff;
  line-height: 20px;
}

.video-overlay-top {
  top: -35px;
  left: 0;
}
</style>