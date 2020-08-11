/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 11:09:28
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-05 14:22:15
 */ 
export function isNumeric(val: string): boolean {
  return /^\d+(\.\d+)?$/.test(val);
}

export function isNaN(val: number): val is typeof NaN {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }

  // eslint-disable-next-line no-self-compare
  return val !== val;
}
