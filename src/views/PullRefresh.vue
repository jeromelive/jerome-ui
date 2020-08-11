<template>
  <van-pull-refresh class="pull-wrapper" v-model="isLoading" @refresh="onRefresh">
    <p>刷新次数: {{ count }}</p>
  </van-pull-refresh>
</template>

<script>
import Vue from 'vue'
import PullRefresh from '@/components/pull-refresh'
Vue.use(PullRefresh)

export default {
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        console.log('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.pull-wrapper {
  height: 100%;
  overflow: auto;
}
</style>