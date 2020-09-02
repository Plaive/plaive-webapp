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
      lessons: [
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