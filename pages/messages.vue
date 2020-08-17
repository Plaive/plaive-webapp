<template>
  <div>
    <div class="my-3 p-3 bg-white rounded box-shadow">
      <h6 class="border-bottom border-gray pb-2 mb-0">Recent</h6>
      <div v-for="(notification, index) in recentNotifications" :key="index" class="media text-muted pt-3">
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong class="d-block text-gray-dark">{{notification.title}}</strong>
          {{notification.text}}
        </p>
      </div>
    </div>
    <div class="my-3 p-3 bg-white rounded box-shadow">
      <h6 class="border-bottom border-gray pb-2 mb-0">Recent</h6>
      <div v-for="(notification, index) in earlierNotifications" :key="index" class="media text-muted pt-3">
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong class="d-block text-gray-dark">{{notification.title}}</strong>
          {{notification.text}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recentNotifications: [],
      earlierNotifications: []
    }
  },
  mounted () {
    for(var i = 0; i < 5; i++) {
      this.recentNotifications.push({ title: "Not " + i, text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."})
    }

    for(var i = 0; i < 10; i++) {
      this.earlierNotifications.push({ title: "Not " + i, text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."})
    }
  }
}
</script>

<style scoped>
.box-shadow {
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
}
</style>