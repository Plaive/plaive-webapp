<template>
  <div>
    <ChannelList :title="$t('channels')" :channels="channels" />
  </div>
</template>

<script>
export default {
    head() {
        return {
        title: 'Channels' + ' - Plaive',
        }
    },
    transition: {
        name: "page",
        mode: 'out-in'
    },
    data () {
        return {
            channels: [
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