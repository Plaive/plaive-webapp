<template>
    <div v-if="logged == 'true' && channel.subscribed != null">
        <button  v-if="channel.subscribed === false" class="btn btn-outline-danger btn-sm" type="button" @click="subscribe">
            <b-spinner v-if="loading === true" type="grow" label="Loading..." small></b-spinner>
            <span v-else>{{$t('subscribe')}}</span>
        </button>
        <button v-else class="btn btn-outline-secondary btn-sm" type="button" @click="unsubscribe">
            <b-spinner v-if="loading === true" type="grow" label="Loading..." small></b-spinner>
            <span v-else>{{$t('subscribed')}}</span>
        </button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            logged: false,
            loading: false
        }
    },
    props: ["channel"],
    methods: {
      async subscribe () {
            this.loading = true
            try {
                await this.$axios.$post(`${this.$config.CHANNELS_BASE_URL}/channel/${this.channel.id}/subscribe`)
                this.$emit("subscribed", this.channel)
            } catch {}
            this.loading = false
      },
      async unsubscribe () {
            this.loading = true
            try {
                await this.$axios.$post(`${this.$config.CHANNELS_BASE_URL}/channel/${this.channel.id}/unsubscribe`)
                this.$emit("unsubscribed", this.channel)
            } catch {}
            this.loading = false
      }    
    },
    mounted () {
        this.logged = sessionStorage.getItem("logged")
    }
}
</script>