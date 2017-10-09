<template>
  <div class="container">

    <b-row align-v="center">      
      <b-col>
        <div class="jumbotron">
          <h1 class="display-3">{{ template.title }}</h1>
          <p class="lead">{{ versionInfo }}</p>
        </div>
      </b-col>

      <b-col cols="1" v-if="templateMode">
        <b-button variant="link" v-b-modal.modalMainJumbotron><i class="material-icons">mode_edit</i></b-button>
        <b-modal id="modalMainJumbotron" title="Edit" size="lg" ok-only>
          <b-row>
            <b-col cols="2"><label for="title">Title:</label></b-col>
            <b-col cols="10"><b-form-input id="title" type="text" v-model="template.title"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col cols="2"><label for="version">Version:</label></b-col>
            <b-col cols="10"><b-form-input id="version" type="text" v-model="template.version"></b-form-input></b-col>
          </b-row>
        </b-modal>
      </b-col>
    </b-row>
    
    <b-row align-v="center">
      <b-col>
        <div v-html="marked(template.description)"></div>
      </b-col>

      <b-col cols="1" v-if="templateMode">
        <b-button variant="link" v-b-modal.modalMainDescription><i class="material-icons">mode_edit</i></b-button>
        <b-modal id="modalMainDescription" title="Edit" size="lg" ok-only>
          <b-row>
            <b-col cols="2"><label for="description">Description:</label></b-col>
            <b-col cols="10"><b-form-textarea id="description" type="text" v-model="template.description" rows="16"></b-form-textarea></b-col>
          </b-row>
        </b-modal>
      </b-col>
    </b-row>

    <part v-for="(part, idx) in template.parts" 
      :part="part" 
      :partKey="'part_' + (idx + 1)"
      :key="'part_' + (idx + 1)"
      :value.sync="val"
      :templateMode="templateMode"
    ></part>
  </div>
</template>

<script>
import marked from 'marked'
import toDate from '@/helpers/toDate'
import part from './layout/Part'

export default {
  name: 'questionnaire',
  components: { part },
  props: {
    template: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      default: function () { return },
      required: false
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
    },
    versionInfo () {
      if (!this.template.lastUpdate) return ''
      return `Version ${this.template.version}, Template last updated ${toDate(this.template.lastUpdate)}`
    }
  },
  methods: {
    marked
  }
}
</script>

<style>
.edit-button {
  position: relative;
}
.modal-body .row {
  margin: 15px 0px;
}
</style>
