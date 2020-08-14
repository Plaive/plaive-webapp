<template>
  <div ref="videoContainer">
    <video ref="videoPlayer" class="video-js vjs-16-9 vjs-big-play-centered" controls autoplay playsinline style="top: 50%;
    transform: translateY(-50%);"></video>
    <div style="background:red">PROVA</div>
  </div>
</template>

<script>
import moment from "moment"
import videojs from "video.js"

export default {
  layout:"fullscreen-video",
  head() {
    return {
      title: this.video.title + ' - Plaive',
    }
  },
  data () {
    return {
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
      }
    }
  },
  mounted () {
    const playbackUrl = this.video.playbackUrl
    registerIVSTech(videojs)
    this.player = videojs(this.$refs.videoPlayer, this.videoOptions, function onPlayerReady() {
      this.src(playbackUrl);
    })
    this.$refs.videoContainer.requestFullscreen();
  }
}
</script>