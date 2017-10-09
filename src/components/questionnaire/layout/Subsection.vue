<template>
  <div>

    <b-card border-variant="secondary"
            :header="subsection.title"
            header-border-variant="secondary">
      
      <b-row align-v="center">
        <b-col>
          <div v-if="subsection.description !== ''" v-html="marked(subsection.description)"></div>
        </b-col>

        <b-col cols="1" v-if="templateMode">
          <b-button variant="link" class="edit-button" @click="showModal(subsectionKey + 'modaltitle')">
            <i class="material-icons">mode_edit</i>
          </b-button>
          <b-modal :id="subsectionKey + 'modaltitle'" :ref="subsectionKey + 'modaltitle'" title="Edit" size="lg" ok-only>
            <b-row>
              <b-col cols="2"><label for="title">Title:</label></b-col>
              <b-col cols="10"><b-form-input id="title" type="text" v-model="templ.title"></b-form-input></b-col>
            </b-row>          
            <b-row>
              <b-col cols="2"><label for="description">Description:</label></b-col>
              <b-col cols="10"><b-form-textarea id="description" type="text" v-model="templ.description" rows="16"></b-form-textarea></b-col>
            </b-row>
          </b-modal>
        </b-col>
      </b-row>

      <question v-for="(question, idx) in subsection.questions"
        :question="question"
        :questionKey="subsectionKey + '_' + (idx + 1)"
        :key="subsectionKey + '_' + (idx + 1)"
        :id="question.id"
        :value.sync="val"
        v-if="isVisible(question) || templateMode"
        :templateMode="templateMode"
      ></question>
    </b-card>

  </div>
</template>

<script>
import marked from 'marked'
import question from './Question'

export default {
  name: 'subsection',
  components: { question },
  props: {
    subsectionKey: { type: String },
    subsection: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
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
    templ: {
      get () {
        return this.subsection
      },
      set (newSubsection) {
        console.log('UPDATE OF SUBSECTION')
        this.$emit('update:subsection', newSubsection)
      }
    }
  },
  methods: {
    isVisible (question) {
      if (typeof (question.visibleIf) === 'undefined' || question.visibleIf === '' || this.value[question.visibleIf] === 'true') {
        return true
      }
      return false
    },
    showModal (key) {
      this.$refs[key].show()
    },
    marked
  }
}
</script>

<style scoped>
.card {
  margin: 40px 0px;
}
</style>
