<template>
  <div>
    %static home content%
  </div>
</template>

<script>
import moment from "moment"
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
  data () {
    return {
      
    }
  }
}
</script>