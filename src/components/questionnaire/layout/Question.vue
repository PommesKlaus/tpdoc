<template>
  <div>

    <b-row align-v="center">
      <b-col>
        <h5 v-if="question.title !== '' || question.hint !== ''">
          {{ question.title }}
          
          <span title="Hint" v-b-popover.hover.auto="question.hint" v-if="question.hint !== ''">
            <i class="material-icons">info_outline</i>
          </span>
        </h5>

        <div v-if="question.description !== ''" v-html="marked(question.description)"></div>
      </b-col>

      <b-col cols="1" v-if="templateMode">
        <b-button variant="link" class="edit-button" @click="showModal(questionKey + 'modaltitle')">
          <i class="material-icons">mode_edit</i>
        </b-button>
        <b-modal :id="questionKey + 'modaltitle'" :ref="questionKey + 'modaltitle'" title="Edit" size="lg" ok-only>
          <b-row>
            <b-col cols="2"><label for="title">Title:</label></b-col>
            <b-col cols="10"><b-form-input id="title" type="text" v-model="question.title"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col cols="2"><label for="id">Id:</label></b-col>
            <b-col cols="10"><b-form-input id="id" type="text" v-model="question.id"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col cols="2"><label for="visibleIf">Visible if (true/yes):</label></b-col>
            <b-col cols="10">
              <b-form-input id="visibleIf" type="text" v-model="question.visibleIf" placeholder="Enter Question ID"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"><label for="hint">Hint:</label></b-col>
            <b-col cols="10"><b-form-textarea id="hint" type="text" v-model="question.hint" rows="3"></b-form-textarea></b-col>
          </b-row>  
          <b-row>
            <b-col cols="2"><label for="description">Description:</label></b-col>
            <b-col cols="10"><b-form-textarea id="description" type="text" v-model="question.description" rows="8"></b-form-textarea></b-col>
          </b-row>
        </b-modal>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <component 
            :is="question.input.type" 
            :inputProps="question.input" 
            :value.sync="val"
            :questionKey="questionKey"
            :templateMode="templateMode"
        ></component>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import marked from 'marked'
import comment from '../inputs/Comment'
import boolean from '../inputs/Boolean'

export default {
  name: 'subsection',
  components: { comment, boolean },
  props: {
    questionKey: { type: String },
    question: {
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
  data () {
    return {
    }
  },
  computed: {
    val: {
      get () {
        if (typeof this.value[this.question.id] !== 'undefined') {
          return this.value[this.question.id]
        } else {
          return ''
        }
      },
      set (newVal) {
        const updateQData = Object.assign({}, this.value)
        updateQData[this.question.id] = newVal
        this.$emit('update:value', updateQData)
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

<style>
.card-text {
  font-style: italic;
  font-size: 85%;
}

h5 {
  margin: 25px 0px 10px 0px;
  font-style: italic;
}
</style>
