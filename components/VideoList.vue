<template>
    <div class="video-block section-padding">
        <div class="row">
            <div class="col-md-12">
                <div class="main-title">
                    <h6>{{title}}</h6>
                </div>
            </div>
            <div v-for="(video, index) in videos" :key="index" class="col-xl-3 col-sm-6 mb-3">
                <div class="video-card">
                    <div class="video-card-image">
                        <nuxt-link class="play-icon" :to="video.link"><font-awesome-icon :icon="['fas', 'play-circle']" class="play-icon-btn" /></nuxt-link>
                        <nuxt-link :to="video.link"><img class="img-fluid" :src="video.img" alt=""></nuxt-link>
                        <div class="time" v-if="video.free === true">FREE</div>
                    </div>
                    <div class="video-card-body">
                        <div class="video-title">
                            <nuxt-link :to="video.link">{{video.title}}</nuxt-link>
                        </div>
                        <div class="video-page text-success">
                            {{video.category}}
                        </div>
                        <div class="video-view">
                            <font-awesome-icon :icon="['fas', 'calendar-alt']" /> {{video.date}} 
                            <font-awesome-icon :icon="['fas', 'clock']" /> {{video.start}} - {{video.end}}
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
import moment from "moment"
export default {
    data () {
        return {
            videos: []
        }
    },
    props: ["title", "type"],
    mounted () {
        if(this.type === "featured") {
            this.videos = [
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
            ]
        }
        else if(this.type === "channelLessons") {
            this.videos = [
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
            ]
        } else if(this.type === "myLessons") {
            this.videos = [
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
            ]
        }
    }
}
</script>