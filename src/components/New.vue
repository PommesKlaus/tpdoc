<template>
  <b-container>
    <h1 class="display-1">New</h1>
    <h2>Transaction</h2>

    <b-card bg-variant="light" header="Add new from template">
      <b-form @submit.prevent="saveNewTransaction()">
        <b-row>
          <b-col>
            <b-form-group label="Transaction Name:" label-for="transactionName" description="Please provide a short name/description of the transaction for later identification.">
              <b-form-input id="transactionName" type="text" v-model="newTransaction.name" required placeholder=""></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Questionnaire template" label-for="transactionTemplate" description="We provide different questionnaires for different transaction types. If none is applicable, please stick to the 'Standard Questionnaire'">
              <b-form-select id="transactionTemplate" v-model="newTransaction.template" required :options="transactionTemplates"></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Begin" label-for="transactionBegin" description="When did the transaction start?">
              <b-form-input id="transactionBegin" type="date" v-model="newTransaction.begin" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="End" label-for="transactionEnd" description="When did the transaction end (Leave empty if n/a)?">
              <b-form-input id="transactionEnd" type="date" v-model="newTransaction.end"></b-form-input>
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

  </b-container>
</template>

<script>
import { transactions, transactionTemplates } from '@/db/collections'
import { client, authClient } from '@/db/init'

export default {
  name: 'new',
  components: {},
  data () {
    return {
      newTransaction: {
        name: '',
        begin: new Date().toISOString().substring(0, 10),
        end: null,
        entities: [],
        template: {},
        data: {}
      },
      transactionTemplates: [{ text: 'Loading...', value: null }]
    }
  },
  created () {
    authClient.then(() => {
      transactionTemplates.find({})
      .then(transactionTemplates => { this.transactionTemplates = transactionTemplates })
      .catch(err => { console.error(err) })
    })
  },
  methods: {
    saveNewTransaction () {
      if (this.newTransaction.name === '') return
      transactions.insertOne({ ...this.newTransaction, owner_id: client.authedId() })
      .then((docs) => {
        this.entities = [...this.entities, { ...this.newCompany, _id: docs.insertedIds[0] }]
        this.newCompany.name = ''
      })
      .catch(err => console.error(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 40px 0px;
}
</style>
