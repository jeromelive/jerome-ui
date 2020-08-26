/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-11 11:13:23
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-25 16:00:20
 */
import Vue from 'vue'
// import VueI18n from 'vue-i18n'
import VueI18n from './i18n'
// import Locale from '@/components/locale'
// import enUS from '@/components/locale/lang/en-US'
// import zhCN from '@/components/locale/lang/zh-CN'
import enLocale from './en_us'
import zhLocale from './zh_cn'

Vue.use(VueI18n)
const messages = {
  en: {
    // ...enUS,
    ...enLocale
  },
  zh: {
    // ...zhCN,
    ...zhLocale
  }
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh',  // 设置默认语言
  messages: messages // 设置资源文件对象
})

// 更新vant组件库本身的语言变化，支持国际化
function vantLocales (lang) {
  // if (lang === 'en') {
  //   Locale.use(lang, enUS)
  // } else if (lang === 'zh') {
  //   Locale.use(lang, zhCN)
  // }
}

export {i18n, vantLocales}