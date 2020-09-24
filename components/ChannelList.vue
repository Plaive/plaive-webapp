<template>
    <div class="video-block section-padding">
        <div class="row">
            <div class="col-md-12">
                <div class="main-title">
                    <h6>{{title}}</h6>
                </div>
            </div>
            <div v-for="(channel, index) in channels" :key="index" class="col-xl-3 col-sm-6 mb-3">
                <div class="channels-card">
                    <div class="channels-card-image">
                        <nuxt-link :to="channel.link"><img class="img-fluid" :src="channel.logo" alt=""></nuxt-link>
                        <ChannelSubscribeButton :channel="channel" @subscribed="subscribed" @unsubscribed="unsubscribed"/>
                    </div>
                    <div class="channels-card-body">
                        <div class="channels-title">
                            <nuxt-link :to="channel.link">{{channel.name}}</nuxt-link>
                        </div>
                        <div class="channels-view">
                            {{channel.subscribers}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            logged: false
        }
    },
    props: ["title", "channels"],
    methods: {
        subscribed (channel) {
            const obj = this.channels.find(obj => obj.id == channel.id)
            obj.subscribed = true
            obj.subscribers++
        },
        unsubscribed (channel) {
            const obj = this.channels.find(obj => obj.id == channel.id)
            obj.subscribed = false
            obj.subscribers--
        }
    },
    mounted () {
        this.logged = sessionStorage.getItem("logged")
    }
}
</script>