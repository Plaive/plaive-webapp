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
                        <div class="time" v-if="video.free === true">{{$t('free')}}</div>
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
                                    <nuxt-link :to="`/lesson/${videos[index].id}`"><font-awesome-icon :icon="['fas', 'edit']" /> {{$t('edit')}}</nuxt-link>
                                    <a v-b-modal="`deleteLessonModal_${index}`" class="text-danger ml-1"><font-awesome-icon :icon="['fas', 'trash']" /> {{$t('delete')}}</a>
                                    <b-modal :id="`deleteLessonModal_${index}`" centered>
                                        <template v-slot:modal-title>
                                            {{$t('deleteLessonConfirmTitle')}}
                                        </template>
                                        <div class="modal-body">{{$t('deleteLessonConfirmBody')}}</div>
                                        <template v-slot:modal-footer>
                                            <button class="btn btn-secondary" @click="$bvModal.hide(`deleteLessonModal_${index}`)">{{$t('cancel')}}</button>
                                            <button class="btn btn-primary" @click="deleteLesson(index)">{{$t('delete')}}</button>
                                        </template>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                        <div v-if="type === 'myChannelLessons'" class="row mt-3">
                            <div class="col text-center">
                                <button v-b-modal="`streamingKeys_${index}`" class="btn btn-link border-none" style="color:rgba(0, 0, 0, 0.5)">{{$t('showStreamingKeys')}}</button>
                                <b-modal :id="`streamingKeys_${index}`" centered>
                                    <template v-slot:modal-title>
                                        {{videos[index].title}} {{$t('streamingKeys')}}
                                    </template>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label>{{$t('streamingServer')}}</label>
                                                <input type="text" class="form-control" :value="videos[index].streamingServer" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label>{{$t('streamingKey')}}</label>
                                                <input type="text" class="form-control" :value="videos[index].streamingKey" readonly>
                                            </div>
                                        </form>
                                    </div>
                                    <template v-slot:modal-footer>
                                        <button class="btn btn-secondary" @click="$bvModal.hide(`streamingKeys_${index}`)">{{$t('close')}}</button>
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
        }
    },
    props: ["title", "type", "videos"],
    methods: {
        async deleteLesson(index) {
            await this.$axios.$delete(`${this.$config.LESSONS_BASE_URL}/lesson/${this.videos[index].id}`)
            this.videos.splice(index, 1)
            this.$bvModal.hide(`deleteLessonModal_${index}`)
        }
    }
}
</script>