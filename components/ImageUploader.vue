<template>
  <div>
    <div>
      <button type="button" class="btn btn-link border-none" @click="$refs[`FileInput-${blobName}`].click()"><font-awesome-icon :icon="['fas', 'edit']" /></button>
      <input :ref="`FileInput-${blobName}`" type="file" style="display: none;" @change="onFileSelect" />
    </div>
    <b-modal :id="`imageModal-${blobName}`" :ref="`imageModal-${blobName}`" centered>
        <div class="modal-body">
            <VueCropper v-show="selectedFile" :ref="`cropper-${blobName}`" :src="selectedFile" alt="Source Image" :aspect-ratio="aspectRatio"></VueCropper>
        </div>
        <template v-slot:modal-footer>
            <button class="btn btn-link-secondary" @click="$bvModal.hide(`imageModal-${blobName}`)">{{$t('cancel')}}</button>
            <button class="btn btn-outline-primary" @click="saveImage(), $bvModal.hide(`imageModal-${blobName}`)">{{$t('save')}}</button>
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
  props: ["sasUrl", "blobName", "aspectRatio"],
  data() {
    return {
      mime_type: "",
      fileExtension: "",
      selectedFile: "",
      files: "",
      cropperElm: undefined
    }
  },
  methods: {
    async saveImage() {
      const userId = this.$route.params.user_id
      const blobSas = await this.$axios.$get(`${this.sasUrl}?n=${this.blobName}&e=${this.fileExtension}&mime_type=${this.mime_type}`)
      this.cropperElm.getCroppedCanvas().toBlob(async (blob) => {
          await axios.put(blobSas, blob, { headers: { 'x-amz-acl': 'public-read', 'Content-Type': this.mime_type } });
          this.$emit('uploaded')
      }, this.mime_type)
    },
    onFileSelect(e) {
      const file = e.target.files[0]
      this.mime_type = file.type
      this.fileExtension = file.name.split('.').pop()
      if (typeof FileReader === "function") {
        this.$bvModal.show(`imageModal-${this.blobName}`)
        const reader = new FileReader()
        reader.onload = (event) => {
          this.selectedFile = event.target.result
          this.$refs[`cropper-${this.blobName}`].replace(this.selectedFile)
          this.cropperElm = this.$refs[`cropper-${this.blobName}`]
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
  },
}
</script>