<template>
  <div>
    <div size="120" class="user">
      <button class="btn btn-outline-primary" @click="$refs.FileInput.click()">{{$t('upload')}}</button>
      <input ref="FileInput" type="file" style="display: none;" @change="onFileSelect" />
    </div>
    <b-modal id="imgeModal" ref="imgeModal" centered>
        <div class="modal-body">
            <VueCropper v-show="selectedFile" ref="cropper" :src="selectedFile" alt="Source Image" :aspect-ratio="aspectRatio"></VueCropper>
        </div>
        <template v-slot:modal-footer>
            <button class="btn btn-link-secondary" @click="$bvModal.hide('imgeModal')">{{$t('cancel')}}</button>
            <button class="btn btn-outline-primary" @click="saveImage(), $bvModal.hide('imgeModal')">{{$t('save')}}</button>
        </template>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
export default {
  components: { VueCropper },
  props: ["blobName", "aspectRatio"],
  data() {
    return {
      mime_type: "",
      fileExtension: "",
      selectedFile: "",
      files: "",
    }
  },
  methods: {
    async saveImage() {
      const userId = this.$route.params.user_id
      const blobSas = await this.$axios.$get(`${this.$config.channelsBaseUrl}/channel/blob/sas?n=${this.blobName}&e=${this.fileExtension}&mime_type=${this.mime_type}`)
      this.$refs.cropper.getCroppedCanvas().toBlob(async (blob) => {
          await axios.put(blobSas, blob, { headers: { 'x-amz-acl': 'public-read', 'Content-Type': this.mime_type } });
      }, this.mime_type)
    },
    onFileSelect(e) {
      const file = e.target.files[0]
      this.mime_type = file.type
      this.fileExtension = file.name.split('.').pop()
      if (typeof FileReader === "function") {
        this.$bvModal.show("imgeModal")
        const reader = new FileReader()
        reader.onload = (event) => {
          this.selectedFile = event.target.result
          this.$refs.cropper.replace(this.selectedFile)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
  },
}
</script>