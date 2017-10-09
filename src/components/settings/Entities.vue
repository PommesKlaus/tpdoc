<template>
  <b-container>
    <h1 class="display-1">Settings</h1>
    <h2>Entities</h2>

    <b-card bg-variant="light" header="Add new Entity">
      <b-form @submit.prevent="saveNewEntity()">
        <b-row>
          <b-col cols="8">
            <b-form-group label="Name:" label-for="entityName" description="Please provide the exact name of the entity, including it's legal form">
              <b-form-input id="entityName" type="text" v-model="newCompany.name" required placeholder=""></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="4">
            <b-form-group label="Country:" label-for="entityCountry" description="">
              <b-form-select id="entityCountry" v-model="newCompany.country" required :options="countries"></b-form-select>
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

    <h4>Available Entities</h4>

    <b-row>
      <b-col cols="2">Filter by Country:</b-col>
      <b-col cols="4"></b-col>

      <b-col cols="2">Search:</b-col>
      <b-col cols="4"><b-form-input v-model="searchFilter" placeholder="Type to Search" /></b-col>
    </b-row>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entity in filteredEntities">
          <td>{{ entity.name }}</td>
          <td>{{ getFullCountry(entity.country) }}</td>
          <td class="text-right"><i class="material-icons" @click="deleteEntity(entity._id)">delete_forever</i></td>
        </tr>
      </tbody>      
    </table>

    <b-row v-if="filteredEntities.length === 0" class="text-center">
      <b-col>No Entities found.</b-col>
    </b-row>

  </b-container>
</template>

<script>
import { entities } from '@/db/collections'
import { client, authClient } from '@/db/init'
import countries from '@/data/countries'

export default {
  name: 'settingsEntities',
  components: {},
  data () {
    return {
      searchFilter: '',
      entities: [],
      countries,
      newCompany: {
        name: '',
        country: 'FR'
      }
    }
  },
  created () {
    authClient.then(() => {
      entities.find({}, { _id: 1, name: 1 })
      .then(entities => { this.entities = entities })
      .catch(err => { console.error(err) })
    })
  },
  computed: {
    filteredEntities () {
      return this.entities.filter(company => {
        return company.name.includes(this.searchFilter) || this.getFullCountry(company.country).includes(this.searchFilter)
      })
    }
  },
  methods: {
    saveNewEntity () {
      if (this.newCompany.name === '' || this.newCompany.country === '') return
      entities.insertOne({ ...this.newCompany, owner_id: client.authedId() })
      .then((docs) => {
        this.entities = [...this.entities, { ...this.newCompany, _id: docs.insertedIds[0] }]
        this.newCompany.name = ''
      })
      .catch(err => console.error(err))
    },
    deleteEntity (id) {
      this.entities = this.entities.filter((company) => {
        return company._id !== id
      })
      entities.deleteOne({ _id: id })
      .catch(err => console.error(err))
    },
    getFullCountry (iso) {
      return countries.filter((country) => {
        return country.value === iso
      })[0].text
    }
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
