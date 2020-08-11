/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 11:08:15
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-05 15:42:19
 */ 
import { createBEM, BEM } from './bem';
import { createComponent } from './component';
import { createI18N, Translate } from './i18n';

type CreateNamespaceReturn = [
  ReturnType<typeof createComponent>,
  BEM,
  Translate
];

export function createNamespace(name: string): CreateNamespaceReturn {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}
