<template>
  <div>
    <VideoList type="myLessons" :title="$t('myLessons')" />
  </div>
</template>

<script>
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
}
</script>