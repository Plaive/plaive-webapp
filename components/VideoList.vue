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
                            <div class="row">
                                <div class="col-md-6">
                                    <font-awesome-icon :icon="['fas', 'calendar-alt']" /> {{video.date}} 
                                    <font-awesome-icon :icon="['fas', 'clock']" class="ml-1"/> {{video.start}} - {{video.end}}
                                </div>
                                <div v-if="type === 'myChannelLessons'" class="col-md-6 text-right">
                                    <nuxt-link :to="`/lesson/${index}`"><font-awesome-icon :icon="['fas', 'edit']" /> Edit</nuxt-link>
                                    <a v-b-modal="`deleteLessonModal_${index}`" class="text-danger ml-1"><font-awesome-icon :icon="['fas', 'trash']" /> Delete</a>
                                    <b-modal :id="`deleteLessonModal_${index}`" centered>
                                        <template v-slot:modal-title>
                                            Delete Confirmation
                                        </template>
                                        <div class="modal-body">Are you sure you want to delete the lesson?</div>
                                        <template v-slot:modal-footer>
                                            <button class="btn btn-secondary" @click="$bvModal.hide(`deleteLessonModal_${index}`)">Cancel</button>
                                            <button class="btn btn-primary" @click="deleteLesson(index)">Delete</button>
                                        </template>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                        <div v-if="type === 'myChannelLessons'" class="row mt-3">
                            <div class="col text-center">
                                <button v-b-modal="`streamingKeys_${index}`" class="btn btn-link border-none" style="color:rgba(0, 0, 0, 0.5)">Show Streaming Keys</button>
                                <b-modal :id="`streamingKeys_${index}`" centered>
                                    <template v-slot:modal-title>
                                        {{videos[index].title}} Streaming Keys
                                    </template>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label>Streaming Key</label>
                                                <input type="text" class="form-control" :value="videos[index].streamingServer" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label>Streaming Key</label>
                                                <input type="text" class="form-control" :value="videos[index].streamingKey" readonly>
                                            </div>
                                        </form>
                                    </div>
                                    <template v-slot:modal-footer>
                                        <button class="btn btn-secondary" @click="$bvModal.hide(`streamingKeys_${index}`)">Close</button>
                                    </template>
                                </b-modal>
                            </div>
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
    methods: {
        deleteLesson(index) {
            this.videos.splice(index, 1)
            this.$bvModal.hide(`deleteLessonModal_${index}`)
        }
    },
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
        } 
        else if(this.type === "myChannelLessons") {
            this.videos = [
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    title: "There are many variations of passages of Lorem",
                    category: "Education",
                    date: moment().format("DD/MM/YYYY"),
                    start: "14:30",
                    end: "16:00",
                    free: false,
                    streamingServer: "https://streaming.server.tld",
                    streamingKey: "my-secret-streaming-key"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    title: "There are many variations of passages of Lorem",
                    category: "Education",
                    date: moment().format("DD/MM/YYYY"),
                    start: "14:30",
                    end: "16:00",
                    free: false,
                    streamingServer: "https://streaming.server.tld",
                    streamingKey: "my-secret-streaming-key"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    title: "There are many variations of passages of Lorem",
                    category: "Education",
                    date: moment().format("DD/MM/YYYY"),
                    start: "14:30",
                    end: "16:00",
                    free: true,
                    streamingServer: "https://streaming.server.tld",
                    streamingKey: "my-secret-streaming-key"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    title: "There are many variations of passages of Lorem",
                    category: "Education",
                    date: moment().format("DD/MM/YYYY"),
                    start: "14:30",
                    end: "16:00",
                    free: false,
                    streamingServer: "https://streaming.server.tld",
                    streamingKey: "my-secret-streaming-key"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    title: "There are many variations of passages of Lorem",
                    category: "Education",
                    date: moment().format("DD/MM/YYYY"),
                    start: "14:30",
                    end: "16:00",
                    free: true,
                    streamingServer: "https://streaming.server.tld",
                    streamingKey: "my-secret-streaming-key"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    title: "There are many variations of passages of Lorem",
                    category: "Education",
                    date: moment().format("DD/MM/YYYY"),
                    start: "14:30",
                    end: "16:00",
                    free: false,
                    streamingServer: "https://streaming.server.tld",
                    streamingKey: "my-secret-streaming-key"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    title: "There are many variations of passages of Lorem",
                    category: "Education",
                    date: moment().format("DD/MM/YYYY"),
                    start: "14:30",
                    end: "16:00",
                    free: false,
                    streamingServer: "https://streaming.server.tld",
                    streamingKey: "my-secret-streaming-key"
                },
                {
                    img: "//via.placeholder.com/270x169",
                    link: "/video/1",
                    title: "There are many variations of passages of Lorem",
                    category: "Education",
                    date: moment().format("DD/MM/YYYY"),
                    start: "14:30",
                    end: "16:00",
                    free: false,
                    streamingServer: "https://streaming.server.tld",
                    streamingKey: "my-secret-streaming-key"
                }
            ]
        } 
        else if(this.type === "myLessons") {
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