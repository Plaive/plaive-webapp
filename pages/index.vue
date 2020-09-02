<template>
  <div>
    <VideoList type="featured" :title="$t('featuredVideoTitle')" />
    <hr class="mt-0">
    <ChannelList :title="$t('popularChannels')" :channels="popularChannels" />
  </div>
</template>

<script>
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