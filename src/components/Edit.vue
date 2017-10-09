<template>
  <div class="container">
    <questionnaire :template="template" :value.sync="qdata"></questionnaire>
    <p>{{ qdata }}</p>
  </div>
</template>

<script>
import questionnaire from '@/components/questionnaire'
import { template } from '@/data/templates'

export default {
  name: 'edit',
  components: { questionnaire },
  data () {
    return {
      transaction: {
        id: this.$route.params.transactionNo,
        name: '',
        createdAt: new Date().toJSON(),
        createdBy: '',
        lastUpdate: new Date().toJSON(),
        companies: []
      },
      template: template || {},
      qdata: {}
    }
  },
  created () {
    this.transaction.name = 'Das ist ein Test'
    this.transaction.createdBy = 'Christian Fritz'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
