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
            channels: []
        }
    },
    async mounted () {
        var channelsRes = await this.$axios.$get(`${this.$config.CHANNELS_BASE_URL}/channels?size=12`)
        this.channels = []
        channelsRes.data.map((el) => {
            this.channels.push({
                link: `/channel/${el.id}`,
                logo: el.logo == "" ? `//via.placeholder.com/130x130?text=${el.name}` : el.logo,
                name: el.name,
                subscribers: el.subscribers
            })
        })
    }
}
</script>