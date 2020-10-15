<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
          <div class="osahan-form">
            <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                      <label>{{$t('title')}}</label>
                      <input type="text" class="form-control" v-model="lesson.title">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                      <label>{{$t('description')}}</label>
                      <textarea rows="5" class="form-control" v-model="lesson.description"></textarea>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                  <div class="form-group">
                      <label>{{$t('date')}}</label>
                      <b-form-datepicker locale="it" v-model="lesson.date"></b-form-datepicker>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>{{$t('start')}}</label>
                      <b-form-timepicker locale="it" v-model="lesson.start"></b-form-timepicker>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>{{$t('end')}}</label>
                      <b-form-timepicker locale="it" v-model="lesson.end"></b-form-timepicker>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>{{$t('price')}}</label>
                      <input class="form-control" type="number" min="0" step="any" v-model="lesson.price" readonly>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>{{$t('currency')}}</label>
                      <select class="custom-select" v-model="lesson.currency">
                        <option value="eur">EUR (€)</option>
                      </select>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>{{$t('maxViewers')}}</label>
                      <input class="form-control" type="number" min="0" step="1" v-model="lesson.maxUsers" readonly>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>{{$t('minViewers')}}</label>
                      <input class="form-control" type="number" min="0" step="1" v-model="lesson.minUsers" readonly>
                  </div>
                </div>
            </div>
            <!-- TAGS -->
            <div class="row">
                <div class="col-lg-5">
                  <div class="form-group">
                      <label>{{$t('tags')}}</label>
                      <b-form-tags v-model="lesson.tags"></b-form-tags>
                  </div>
                </div>
            </div>
            <!-- CATEGORIES -->
            <div class="row ">
                <div class="col-lg-12">
                  <div class="main-title">
                      <h6>{{$t('categories')}}</h6>
                  </div>
                </div>
            </div>
              <b-form-group>
                <div class="row category-checkbox">
                  <div v-for="(chunk, index) in categories" :key="index" class="col-lg-2 col-xs-6 col-4">
                    <div v-for="category in chunk" :key="category">
                        <b-form-radio v-model="lesson.catagory" name="lesson-category" :value="category">{{category}}</b-form-radio>
                    </div>
                  </div>
                </div>
              </b-form-group>
          </div>
          <div class="osahan-area text-center mt-3">
            <button class="btn btn-outline-primary" type="button" @click="save">
              <b-spinner v-if="loading === true" type="grow" label="Loading..." small></b-spinner>
              <span v-else>{{$t('save')}}</span>
          </button>
          </div>
          <hr>
          <div class="terms text-center mb-5">
            <p class="mb-0">{{$t('createLessonDisclaimerP1')}} <a href="#">{{$t('tos')}}</a> and <a href="#">{{$t('communityGuidelines')}}</a>.</p>
            <p class="hidden-xs mb-0">{{$t('createLessonDisclaimerP2')}}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  }
})

export default {  
  head() {
    return {
      title: "Lezione" + " - Plaive",
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
    return  {
      loading: false,
      lesson: {
        title: "",
        description: "",
        date: new Date(),
        start: "",
        end: "",
        price: 0,
        currency: "eur",
        maxUsers: "",
        minUsers: "",
        catagory: "",
        tags: []
      },
      categories: []
    }
  },
  methods: {
    async getLesson () {
      var lessonRes = await this.$axios.$get(`${this.$config.LESSONS_BASE_URL}/lesson/${this.$route.params.id}`)
      this.lesson.title = lessonRes.title
      this.lesson.description = lessonRes.description
      this.lesson.category = lessonRes.category
      this.lesson.date = lessonRes.date
      this.lesson.start = lessonRes.start
      this.lesson.end = lessonRes.end
      this.lesson.price = lessonRes.price
      this.lesson.currency = lessonRes.currency
      this.lesson.maxUsers = lessonRes.maxUsers
      this.lesson.minUsers = lessonRes.minUsers
      lessonRes.tags.map((tag) => { this.lesson.tags.push(tag.tag) })
    },
    async save () {
      this.loading = true 
      try {
        const lesson = this.lesson
         if(this.$route.params.id === "new") {
          await this.$axios.$post(`${this.$config.LESSONS_BASE_URL}/lesson`, lesson)
        } else {
          await this.$axios.$patch(`${this.$config.LESSONS_BASE_URL}/lesson/${this.$route.params.id}`, lesson)
        }
        this.$route.replace("/channel/my")
      } catch {}
      this.loading = false 
    }
  },
  async mounted () {
    var allCategories = ['fax','tone','pottery','cable','gown','draw','get','coup','height','achievement','lift','property','conglomerate','acquisition','flawed','influence','wood','valid','elaborate','fuss','sweater','assignment','disco','driver','strength','suffer','obese','stroll','writer','continental'].chunk(5)
    this.categories = allCategories
    if(this.$route.params.id !== "new") {
      await this.getLesson()
    }
  }
}
</script>