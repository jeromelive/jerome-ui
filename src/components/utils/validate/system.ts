/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 11:41:35
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-05 11:41:35
 */ 
import { isServer } from '..';

export function isAndroid(): boolean {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

export function isIOS(): boolean {
  /* istanbul ignore next */
  return isServer
    ? false
    : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
