<template>
  <b-container>
    <h1 class="display-1">Settings</h1>
    <h2>Transaction Templates - Detail</h2>

    <b-row>
      <b-col class="text-right">
        <b-button variant="secondary" @click="backToTemplateList()">Cancel</b-button>
        <b-button variant="success" @click="saveTransactionTemplate()">Save</b-button>
      </b-col>
    </b-row>

    <b-card no-body>
      <b-tabs ref="tabs" card>
        <b-tab title="Edit" active>
          <questionnaire :template="template" :templateMode="true"></questionnaire>
        </b-tab>
        
        <b-tab title="RAW">
          <b-row>
            <b-col class="text-right">
              <b-form-checkbox v-model="prettyPrint" value="true" unchecked-value="false">
                Pretty Print JSON
              </b-form-checkbox>
            </b-col>
          </b-row>
          <b-form-textarea 
            id="templateJSON"
            class="textarea"
            :rows="20" 
            v-model="templateJSON"
          ></b-form-textarea>
        </b-tab>

      </b-tabs>
    </b-card>

  </b-container>
</template>

<script>
import questionnaire from '@/components/questionnaire'
import { transactionTemplates } from '@/db/collections'
import { authClient } from '@/db/init'

export default {
  name: 'settingsTransactionTemplatesDetail',
  components: { questionnaire },
  props: ['id'],
  data () {
    return {
      template: {
        title: '',
        description: '',
        version: '',
        date: null,
        parts: []
      },
      prettyPrint: 'true'
    }
  },
  created () {
    let id = null
    typeof (this.id) === 'object' ? id = this.id : id = { '$oid': this.id }
    authClient.then(() => {
      transactionTemplates.find({_id: id}, { _id: 1, title: 1, version: 1, lastUpdate: 1 })
      .then(template => { this.template = template[0] })
      .catch(err => { console.error(err) })
    })
  },
  computed: {
    templateJSON: {
      get () {
        if (this.prettyPrint === 'true') return JSON.stringify(this.template, null, 4)
        return JSON.stringify(this.template)
      },
      set (newJSON) {
        this.template = JSON.parse(newJSON)
      }
    }
  },
  methods: {
    saveTransactionTemplate () {
      if (this.template.title === '') return
      this.template.lastUpdate = new Date().toJSON()
      transactionTemplates.updateOne({_id: {'$oid': this.id}}, this.template)
      .then((doc) => {
        console.log(doc)
        // Add Router-moveTo new ID
      })
      .catch(err => console.error(err))
    },
    backToTemplateList () {
      this.$router.push({name: 'SettingsTransactionTemplates'})
    }
    // deleteTemplate (id) {
    //   this.templates = this.templates.filter((template) => {
    //     return template._id !== id
    //   })
    //   transactionTemplates.deleteOne({ _id: id })
    //   .catch(err => console.error(err))
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card, table {
  margin: 40px 0px;
}

.material-icons {
  cursor: pointer;
}
</style>
