<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 15:03:18
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-11 11:38:10
-->
<template>
  <div class="home">
    <van-test>
      <h1>test</h1>
    </van-test>
    <van-loading color="#1989fa" type="spinner" vertical>test</van-loading>
    <van-loading color="#1989fa" vertical>test</van-loading>
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
  created() {
    console.log(this.$t('app.hello'))
    console.log(this.t)
  }
}
</script>
