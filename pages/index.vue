<template>
  <div>
    <VideoList type="featured" :title="$t('featuredVideoTitle')" />
    <hr class="mt-0">
    <PopularChannels />
  </div>
</template>

<script>
export default {
  head() {
    return {
    title: 'Plaive',
    }
  },
  transition: {
    name: "page",
    mode: 'out-in'
  },
}
</script>