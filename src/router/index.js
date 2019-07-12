// noinspection JSAnnotator
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import CommodityMaintain from '../components/ProductMaintain'
import Order from '../components/Order'

Vue.use(VueRouter);
// noinspection JSAnnotator
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta:{title:'Home',requiresAuth: true},
      children:[
      {
        path: '/CommodityMaintain',
        name: '商品維護',
        component: CommodityMaintain,
        meta: {title: '商品維護',requiresAuth: true}
      },
      {
        path: '/Order',
        name: '訂單維護',
        component: Order,
        meta: {title: '訂單維護' ,requiresAuth: true}
      }],
    },
    {
      path: '/',
      name: '登入',
      component: Login,
      meta: { requiresAuth: false }
    },
  ]
})
