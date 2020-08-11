/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 11:08:51
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-05 11:09:08
 */ 
const camelizeRE = /-(\w)/g;

export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export function padZero(num: number | string, targetLength = 2): string {
  let str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}
