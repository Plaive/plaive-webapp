<template>
  <div>
    <VideoList :title="$t('myLessons')" :videos="lessons" />
  </div>
</template>

<script>
import moment from "moment"
export default {
  head() {
    return {
    title: 'My Lessons' + ' - Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
  data () {
    return {
      lessons: []
    }
  },
  methods: {
    async getLessons () {
      var lessonsRes = await this.$axios.$get(`${this.$config.LESSONS_BASE_URL}/lessons/user?size=50`)
      lessonsRes.data.map((lesson) => {
          this.lessons.push({
            img: lesson.banner == "" ? "//via.placeholder.com/270x169" : lesson.banner,
            link: `/video/${lesson.id}`,
            title: lesson.title,
            category: lesson.category,
            date: lessons.date,
            start: lessons.start,
            end: lessons.end,
            free: lessons.price == 0 ? true : false
          })
      })
    }
  }
}
</script>