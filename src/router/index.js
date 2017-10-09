import Vue from 'vue'
import Router from 'vue-router'
import New from '@/components/New'
import Edit from '@/components/Edit'
import Entities from '@/components/settings/Entities'
import TransactionTemplates from '@/components/settings/TransactionTemplates'
import TransactionTemplatesDetail from '@/components/settings/TransactionTemplatesDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/edit/:transactionNo',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/settings/entities',
      name: 'SettingsEntities',
      component: Entities
    },
    {
      path: '/settings/templates/transactions',
      name: 'SettingsTransactionTemplates',
      component: TransactionTemplates
    },
    {
      path: '/settings/templates/transactions/:id',
      name: 'SettingsTransactionTemplatesDetail',
      component: TransactionTemplatesDetail,
      props: true
    }
  ]
})
