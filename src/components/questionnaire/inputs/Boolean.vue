<template>
  <b-row align-v="center">
    <b-col>
      <b-form-radio-group 
          v-model="val" 
          :options="options" 
          :required="inputProps.required" 
          :name="randomName"
          :disabled="templateMode"
      ></b-form-radio-group>
    </b-col>

    <b-col cols="1" v-if="templateMode">
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'boolean',
  props: {
    inputProps: {
      type: Object,
      required: false
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
      options: [
        { text: 'Yes', value: 'true' },
        { text: 'No', value: 'false' }
      ]
    }
  },
  computed: {
    val: {
      get () {
        if (this.value === '' || typeof (this.value) === 'undefined') {
          this.val = 'false'
          return 'false'
        }
        return this.value
      },
      set (newVal) {
        this.$emit('update:value', newVal)
      }
    },
    randomName () {
      return Math.floor(Math.random() * 100000).toString()
    }
  }
}
</script>

<style>

</style>
