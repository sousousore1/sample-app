<template>
  <div class="container">
    <div class="row">
      <div class="col-12 form-group">
        <h2>Origin</h2>
        <textarea
          class="w-100 form-control"
          placeholder="英文を入力"
          rows="10"
          @change="translate"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p class="text-center">
          <span class="">
            <font-awesome-icon :icon="['fas', 'angle-double-down']" />
          </span>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 form-group">
        <h2>Google Cloud Translation API</h2>
        <textarea
          :value="googleText"
          class="w-100 form-control"
          placeholder="翻訳"
          rows="10"
        />
      </div>
      <div class="col-12 col-md-6 form-group">
        <h2>Microsoft Translator Text API</h2>
        <textarea
          :value="bingText"
          class="w-100 form-control"
          placeholder="翻訳"
          rows="10"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    googleText() {
      const google = this.$store.state.translation.google
      return google ? google.text : null
    },
    bingText() {
      const bing = this.$store.state.translation.bing
      return bing ? bing.text : null
    }
  },
  methods: {
    ...mapActions({
      translate: 'translation/translate'
    })
  }
}
</script>
