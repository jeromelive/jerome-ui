/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 15:03:18
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-26 10:55:32
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/components/style/base.less'
import {i18n} from './lang'

console.log('当前的语言是：', i18n.locale)
// vantLocales(i18n.locale)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
