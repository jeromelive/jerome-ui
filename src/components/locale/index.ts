/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 11:11:01
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-11 15:55:51
 */ 
import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

declare module 'vue' {
  interface VueConstructor {
    util: {
      defineReactive(obj: object, key: string, value: any): void;
    };
  }
}

const proto = Vue.prototype;
const { defineReactive } = Vue.util;

defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': defaultMessages,
});

export default {
  messages() {
    return proto.$vantMessages[proto.$vantLang];
  },

  use(lang: string, messages?: object) {
    proto.$vantLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$vantMessages, messages);
  },
};
