<template>
    <div class="video-block section-padding">
        <div class="row">
            <div class="col-md-12">
                <div class="main-title">
                    <h6>Featured Videos</h6>
                </div>
            </div>
            <div v-for="(video, index) in videos" :key="index" class="col-xl-3 col-sm-6 mb-3">
                <div class="video-card">
                    <div class="video-card-image">
                        <nuxt-link class="play-icon" :to="video.link"><font-awesome-icon :icon="['fas', 'play-circle']" class="play-icon-btn" /></nuxt-link>
                        <nuxt-link :to="video.link"><img class="img-fluid" :src="video.img" alt=""></nuxt-link>
                        <div class="time">{{video.time}}</div>
                    </div>
                    <div class="video-card-body">
                        <div class="video-title">
                            <nuxt-link :to="video.link">{{video.title}}</nuxt-link>
                        </div>
                        <div class="video-page text-success">
                            {{video.category}}
                        </div>
                        <div class="video-view">
                            1.8M views &nbsp;<font-awesome-icon :icon="['fas', 'calendar-alt']" /> 11 Months ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .play-icon-btn {
        bottom: 0;
        height: 40px;
        left: 0;
        margin: auto;
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
    }
</style>

<script>
export default {
    data () {
        return {
            videos: [
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    time: "3:50",
                    title: "There are many variations of passages of Lorem",
                    category: "Education"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    time: "3:50",
                    title: "There are many variations of passages of Lorem",
                    category: "Education"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    time: "3:50",
                    title: "There are many variations of passages of Lorem",
                    category: "Education"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    time: "3:50",
                    title: "There are many variations of passages of Lorem",
                    category: "Education"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    time: "3:50",
                    title: "There are many variations of passages of Lorem",
                    category: "Education"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    time: "3:50",
                    title: "There are many variations of passages of Lorem",
                    category: "Education"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    time: "3:50",
                    title: "There are many variations of passages of Lorem",
                    category: "Education"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    time: "3:50",
                    title: "There are many variations of passages of Lorem",
                    category: "Education"
                }
            ]
        }
    }
}
</script>