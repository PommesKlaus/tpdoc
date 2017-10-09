<template>
  <b-container>
    <h1 class="display-1">Settings</h1>
    <h2>Transaction Templates</h2>

    <b-card bg-variant="light" header="Add new Transaction Template">
      <b-form @submit.prevent="saveNewTransactionTemplate()">
        <b-row>
          <b-col cols="8">
            <b-form-group label="Name:" label-for="templateName" description="Please provide a unique name for the template">
              <b-form-input id="templateName" type="text" v-model="newTemplate.title" required placeholder=""></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="4">
            <b-form-group label="Version:" label-for="templateVersion" description="">
              <b-form-input id="templateVersion" v-model="newTemplate.version" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Description:" label-for="templateDescription" description="Please provide some information on the puprose/scope of the specific template.">
              <b-form-textarea 
                id="templateDescription"
                class="textarea"
                :rows="6" 
                v-model="newTemplate.description"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row align="right">
          <b-col cols="12">
            <b-button type="submit" variant="primary">Save</b-button>
            <b-button type="reset" variant="secondary">Reset</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>

    <h4>Available Transaction Templates</h4>

    <b-row>
      <b-col cols="6"></b-col>

      <b-col cols="2">Search:</b-col>
      <b-col cols="4"><b-form-input v-model="searchFilter" placeholder="Type to Search" /></b-col>
    </b-row>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Version</th>
          <th>Last Update</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="template in filteredTemplates" 
            @click="rowLink('SettingsTransactionTemplatesDetail', {id: template._id})" 
            :key="template._id['$oid']"
            class="rowLink"
        >
          <td>{{ template.title }}</td>
          <td>{{ template.version }}</td>
          <td>{{ template.lastUpdate }}</td>
          <td class="text-right"><i class="material-icons" @click="deleteTemplate(template._id)">delete_forever</i></td>
        </tr>
      </tbody>      
    </table>

    <b-row v-if="filteredTemplates.length === 0" class="text-center">
      <b-col>No Templates found.</b-col>
    </b-row>

  </b-container>
</template>

<script>
import { transactionTemplates } from '@/db/collections'
import { client, authClient } from '@/db/init'
import rowLink from '@/helpers/rowLink'

export default {
  name: 'settingsTransactionTemplates',
  components: {},
  data () {
    return {
      searchFilter: '',
      templates: [],
      newTemplate: {
        version: '1.0',
        lastUpdate: new Date().toJSON(),
        title: '',
        description: '',
        parts: []
      }
    }
  },
  created () {
    authClient.then(() => {
      transactionTemplates.find({}, { _id: 1, title: 1, version: 1, lastUpdate: 1 })
      .then(transactionTemplates => { this.templates = transactionTemplates })
      .catch(err => { console.error(err) })
    })
  },
  computed: {
    filteredTemplates () {
      return this.templates.filter(template => {
        return template.title.includes(this.searchFilter)
      })
    }
  },
  methods: {
    saveNewTransactionTemplate () {
      if (this.newTemplate.title === '') return
      transactionTemplates.insertOne({ ...this.newTemplate, owner_id: client.authedId() })
      .then((docs) => {
        this.$router.push({name: 'SettingsTransactionTemplatesDetail', params: { id: docs.insertedIds[0] }})
      })
      .catch(err => console.error(err))
    },
    deleteTemplate (id) {
      this.templates = this.templates.filter((template) => {
        return template._id !== id
      })
      transactionTemplates.deleteOne({ _id: id })
      .catch(err => console.error(err))
    },
    rowLink
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
