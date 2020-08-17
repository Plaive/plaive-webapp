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
    <div class="my-3 p-3 bg-white rounded box-shadow" style="height:500px;overflow-y:scroll">
      <h6 class="border-bottom border-gray pb-2 mb-0">Recent</h6>
      <div v-for="(notification, index) in earlierNotifications" :key="index" class="media text-muted pt-3">
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong class="d-block text-gray-dark">{{notification.title}}</strong>
          {{notification.text}}
        </p>
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    InfiniteLoading,
  },
  data () {
    return {
      page: 1,
      recentNotifications: [],
      earlierNotifications: []
    }
  },
  methods: {
    infiniteHandler($state) {
      this.page += 1
      for(var i = 0; i < 10; i++) {
        this.earlierNotifications.push({ title: "Not " + this.page + '_' + i, text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."})
      }
      $state.loaded()
      //no more results $state.complete()
    }
  },
  mounted () {
    for(var i = 0; i < 5; i++) {
      this.recentNotifications.push({ title: "Not " + i, text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."})
    }

    for(var i = 0; i < 10; i++) {
      this.earlierNotifications.push({ title: "Not " + this.page + '_' + i, text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."})
    }
  }
}
</script>

<style scoped>
.box-shadow {
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
}
</style>