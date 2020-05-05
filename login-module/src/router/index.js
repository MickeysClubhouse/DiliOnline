import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from '@/components/HelloPage'
import CustomerMain from '@/components/CustomerMain'
import ShopMain from '@/components/ShopMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloPage',
      component: HelloPage
    },
    {
      path: '/CustomerMain',
      name: 'CustomerMain',
      component: CustomerMain
    },
    {
      path: '/ShopMain',
      name: 'ShopMain',
      component: ShopMain
    }
  ]
})
