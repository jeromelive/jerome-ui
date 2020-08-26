<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 15:03:18
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-26 10:18:59
-->
<template>
  <div class="home">
    <van-test>
      <h1>test</h1>
    </van-test>
    <van-loading color="#1989fa" type="spinner" vertical>test</van-loading>
    <van-loading color="#1989fa" vertical>{{$t('app.hello')}}</van-loading>
    <van-loading color="#1989fa" vertical>{{$t('name')}}</van-loading>
    <p @click="change('zh')">中文</p>
    <p @click="change('en')">英文</p>
    <p @click="changeMessages">Messages</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Test from '@/components/test'
import Loading from '@/components/loading'

Vue.use(Test)
Vue.use(Loading)
export default {
  name: 'Home',
  data() {
    return {
      flag: ''
    }
  },
  mounted() {
    console.log(this)
  },
  updated() {
    console.log(this.$i18n)
  },
  methods: {
    change(str) {
      localStorage.setItem('lang', str)
      this.$i18n.locale = str
      this.$i18n.messages.zh.name = '招'
      this.$i18n.messages.en.name = 'jerome'
    },
    changeMessages() {
      this.$i18n.messages = {
        zh: {
          name: '招'
        },
        en: {
          name: 'jerome'
        }
      }
    }
  },
  watch: {
    flag() {
      console.log(1111)
    },
    $i18n(val) {
      console.log(val)
    }
  }
}
</script>
