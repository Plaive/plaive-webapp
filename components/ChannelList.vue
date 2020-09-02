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
                        <div class="channels-card-image-btn">
                            <button v-if="channel.subscribed === false" type="button" class="btn btn-outline-danger btn-sm">{{$t('subscribe')}}</button>
                            <button v-else type="button" class="btn btn-outline-secondary btn-sm">{{$t('subscribed')}}</button>
                        </div>
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
        }
    },
    props: ["title", "channels"]
}
</script>