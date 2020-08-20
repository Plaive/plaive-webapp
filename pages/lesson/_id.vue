<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
          <div class="osahan-form">
            <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                      <label>Title</label>
                      <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                      <label>About</label>
                      <textarea rows="5" class="form-control"></textarea>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>Date</label>
                      <b-form-datepicker locale="en"></b-form-datepicker>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>Start</label>
                      <b-form-timepicker locale="en"></b-form-timepicker>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>End</label>
                      <b-form-timepicker locale="en"></b-form-timepicker>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>Price</label>
                      <input class="form-control" type="number" min="0" step="any">
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>Currency</label>
                      <select class="custom-select">
                        <option selected>EUR (€)</option>
                        <option>USD ($)</option>
                      </select>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>Max Viewers</label>
                      <input class="form-control" type="number" min="0" step="1">
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                      <label>Min Viewers</label>
                      <input class="form-control" type="number" min="0" step="1">
                  </div>
                </div>
            </div>
            <!-- TAGS -->
            <div class="row">
                <div class="col-lg-5">
                  <div class="form-group">
                      <label>Tags (optional)</label>
                      <b-form-tags></b-form-tags>
                  </div>
                </div>
            </div>
            <!-- CATEGORIES -->
            <div class="row ">
                <div class="col-lg-12">
                  <div class="main-title">
                      <h6>Category (you can select upto 4 categories)</h6>
                  </div>
                </div>
            </div>
            <div class="row category-checkbox">
                <!-- checkbox 1col -->
                <div v-for="(chunk, index) in categories" :key="index" class="col-lg-2 col-xs-6 col-4">
                  <div v-for="category in chunk" :key="category" class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" :id="`chk_${category}`">
                      <label class="custom-control-label" :for="`chk_${category}`">{{category}}</label>
                  </div>
                </div>
            </div>
          </div>
          <div class="osahan-area text-center mt-3">
            <button class="btn btn-outline-primary">Save</button>
          </div>
          <hr>
          <div class="terms text-center mb-5">
            <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority <a href="#">Terms of Service</a> and <a href="#">Community Guidelines</a>.</p>
            <p class="hidden-xs mb-0">Ipsum is therefore always free from repetition, injected humour, or non</p>
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
  data () {
    return  {
      categories: []
    }
  },
  mounted () {
    var allCategories = ['fax','tone','pottery','cable','gown','draw','get','coup','height','achievement','lift','property','conglomerate','acquisition','flawed','influence','wood','valid','elaborate','fuss','sweater','assignment','disco','driver','strength','suffer','obese','stroll','writer','continental'].chunk(5)
    this.categories = allCategories
    if(this.$route.params.id !== "new") {
      //load lesson data
    }
  }
}
</script>