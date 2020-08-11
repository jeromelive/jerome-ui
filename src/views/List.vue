<template>
  <div class="list-wrapper">
    <van-list
      v-model="list.loading"
      :finished="list.finished"
      finished-text="完成"
      @load="onLoad()"
    >
      <h1 v-for="item in list.items" :key="item">{{item}}</h1>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import List from '@/components/list'
Vue.use(List)

export default {
  i18n: {
    'zh-CN': {
      errorInfo: '错误提示',
      errorText: '请求失败，点击重新加载',
      pullRefresh: '下拉刷新',
      finishedText: '没有更多了',
    },
    'en-US': {
      errorInfo: 'Error Info',
      errorText: 'Request failed. Click to reload',
      pullRefresh: 'PullRefresh',
      finishedText: 'Finished',
    },
  },

  data() {
    return {
      list: {
        items: [],
        refreshing: false,
        loading: false,
        error: false,
        finished: false,
      },
    };
  },

  methods: {
    onLoad(index) {
      const list = this.list;
      list.loading = true;

      setTimeout(() => {
        if (list.refreshing) {
          list.items = [];
          list.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? '0' + text : text);
        }

        list.loading = false;
        list.refreshing = false;

        // show error info in second demo
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }

        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    },

    onRefresh() {
      this.list.finished = false;
      this.onLoad();
    },
  },
};
</script>

<style lang="less" scoped>
.list-wrapper {
  height: 100%;
  overflow: auto;
}
</style>