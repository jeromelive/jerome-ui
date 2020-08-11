/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-05 11:08:24
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-05 11:08:25
 */ 
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

function gen(name: string, mods?: Mods): string {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string>((ret, item) => ret + gen(name, item), '');
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
    ''
  );
}

export function createBEM(name: string) {
  return function (el?: Mods, mods?: Mods): Mods {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${gen(el, mods)}`;
  };
}

export type BEM = ReturnType<typeof createBEM>;
