<template>
  <div>
    <VideoList :title="$t('featuredVideoTitle')" :videos="featuredVideos"/>
    <hr class="mt-0">
    <ChannelList :title="$t('popularChannels')" :channels="popularChannels" />
  </div>
</template>

<script>
import moment from "moment"
export default {
  head() {
    return {
    title: 'Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
    return {
      featuredVideos: [
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
            free: false
        }
      ],
      popularChannels: [
        {
            link: "/channel/1",
            logo: "//via.placeholder.com/130x130",
            name: "Channels Name",
            subscribers: "382.323",
            subscribed: false
        },
        {
            link: "/channel/1",
            logo: "//via.placeholder.com/130x130",
            name: "Channels Name",
            subscribers: "382.323",
            subscribed: false
        },
        {
            link: "/channel/1",
            logo: "//via.placeholder.com/130x130",
            name: "Channels Name",
            subscribers: "382.323",
            subscribed: true
        },
        {
            link: "/channel/1",
            logo: "//via.placeholder.com/130x130",
            name: "Channels Name",
            subscribers: "382.323",
            subscribed: false
        }
      ]
    }
  }
}
</script>