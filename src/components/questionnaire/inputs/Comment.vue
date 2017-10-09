<template>
  <b-row align-v="center">
    <b-col>
      <b-form-textarea 
          :rows="4" 
          :placeholder="inputProps.placeholder" 
          :required="inputProps.required" 
          :disabled="templateMode"
          v-model.lazy="val"
      ></b-form-textarea>
    </b-col>

    <b-col cols="1" v-if="templateMode">
      <b-button variant="link" class="edit-button" @click="showModal(questionKey + 'modalInput')">
        <i class="material-icons">mode_edit</i>
      </b-button>
      <b-modal :id="questionKey + 'modalInput'" :ref="questionKey + 'modalInput'" title="Edit" size="lg" ok-only>
        <b-row>
          <b-col cols="2">
            <label for="title">Placeholder:</label>
          </b-col>
          <b-col cols="10">
            <b-form-input id="title" type="text" v-model="inputProps.placeholder"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="2">
            <label for="hint">Description:</label>
          </b-col>
          <b-col cols="10">
            <b-form-textarea id="hint" type="text" v-model="inputProps.text" rows="8"></b-form-textarea>
          </b-col>
        </b-row>

      </b-modal>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'comment',
  props: {
    questionKey: { type: String },
    inputProps: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    templateMode: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('update:value', newVal)
      }
    }
  },
  methods: {
    showModal (key) {
      this.$refs[key].show()
    }
  }
}
</script>

<style scoped>
.edit-button<div {

}
</style>
