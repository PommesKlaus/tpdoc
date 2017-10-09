<template>
  <div>
    <b-row align-v="center">
      <b-col>
        <h4 class="display-4">{{ part.title }}</h4>
        <div v-if="part.description !== ''" v-html="marked(part.description)"></div>
      </b-col>

      <b-col cols="1" v-if="templateMode">
        <b-button variant="link" class="edit-button" @click="showModal(partKey + 'modaltitle')">
          <i class="material-icons">mode_edit</i>
        </b-button>
        <b-modal :id="partKey + 'modaltitle'" :ref="partKey + 'modaltitle'" title="Edit" size="lg" ok-only>
          <b-row>
            <b-col cols="2"><label for="title">Title:</label></b-col>
            <b-col cols="10"><b-form-input id="title" type="text" v-model="part.title"></b-form-input></b-col>
          </b-row>          
          <b-row>
            <b-col cols="2"><label for="description">Description:</label></b-col>
            <b-col cols="10"><b-form-textarea id="description" type="text" v-model="part.description" rows="16"></b-form-textarea></b-col>
          </b-row>
        </b-modal>
      </b-col>
    </b-row>
    

    <subsection v-for="(subsection, idx) in part.subsections" 
      :subsection="subsection"
      :subsectionKey="partKey + '_' + (idx + 1)"
      :key="partKey + '_' + (idx + 1)"
      :value.sync="val"
      :templateMode="templateMode"
    ></subsection>

    <hr />

  </div>
</template>

<script>
import marked from 'marked'
import subsection from './Subsection'

export default {
  name: 'part',
  components: { subsection },
  props: {
    partKey: { type: String },
    part: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: false,
      default: function () { return {} }
    },
    templateMode: {
      type: Boolean,
      default: false,
      required: false
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
    marked,
    showModal (key) {
      this.$refs[key].show()
    }
  }
}
</script>

<style scoped>
h4 {
  margin: 55px 0px 35px 0px;
}
</style>
