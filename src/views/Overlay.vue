<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-06 13:59:37
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-06 14:08:12
-->
<template>
  <div class="overlay">
    <button @click="show = true">button</button>
    <h1 v-for="(item, index) in arr" :key="index">{{index}}</h1>
    <van-overlay :show="show" @click="show = true">
      <div>111</div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from 'vue'
import Overlay from '@/components/overlay'
Vue.use(Overlay)

export default {
  data(){
    return {
      show: false,
      arr: new Array(50)
    }
  }
}
</script>

<style lang="less" scoped>
.overlay {}
</style>