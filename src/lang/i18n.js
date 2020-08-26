/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-13 14:08:30
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-26 10:26:13
 */
export let Vue

const mixins = {
  beforeCreate () {
    const options = this.$options

    if(options.i18n) {
      if(options.i18n instanceof VueI18n) {
        this._i18n = options.i18n
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n = this.$root.$i18n
    } else if(options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n = options.parent.$i18n
    }
  },
  beforeDestroy() {
    if(this._i18n) {
      this._i18n._vm.$destroy()
    }
  }
}

const VueI18n = function(options) {
  const locale = options.locale || 'en-US'
  const messages = options.messages || {}
  this._initVM({locale, messages})
  Object.defineProperty(this, 'locale', {
    enumerable: true,
    configurable: true,
    get() {
      return this._vm.locale
    },
    set(locale) {
      this._vm.$set(this._vm, 'locale', locale)
    }
  })
  Object.defineProperty(this, 'messages', {
    enumerable: true,
    configurable: true,
    get() {
      return this._vm.messages
    },
    set(messages) {
      this._vm.$set(this._vm, 'messages', messages)
    }
  })
}

VueI18n.install = function (_Vue) {
  VueI18n.install.installed = true
  Vue = _Vue
  Vue.mixin(mixins)
  extend(Vue)
  
  const strats = Vue.config.optionMergeStrategies
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  }
}

VueI18n.prototype._initVM = function (data) {
  const silent = Vue.config.silent
  Vue.config.silent = true
  this._vm = new Vue({ data })
  Vue.config.silent = silent
}

VueI18n.prototype._t = function(path, _locale, messages) {
  try {
    let paths = path.split('.')
    let temp = messages[_locale]
    let i = 0
    while (i < paths.length) {
      temp  = temp[paths[i]]
      i++
    }
    return temp || path
  } catch (err) {
    console.warn(err)
    return path
  }
}

function extend(Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    Object.defineProperty(Vue.prototype, '$i18n', {
      get () { 
        return this._i18n 
      }
    })
  }

  Vue.prototype.$t = function (key) {
    const i18n = this.$i18n
    return i18n._t(key, i18n.locale, i18n.messages)
  }
}

export default VueI18n