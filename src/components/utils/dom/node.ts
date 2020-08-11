/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 11:20:55
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-05 14:21:51
 */ 
export function removeNode(el: Node) {
  const parent = el.parentNode;

  if (parent) {
    parent.removeChild(el);
  }
}
