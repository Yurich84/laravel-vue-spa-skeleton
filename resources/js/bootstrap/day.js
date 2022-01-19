import Vue from 'vue'
import * as dayjs from 'dayjs'
import 'dayjs/locale/en'

const dayPlugin = {
    install(Vue) {
        Vue.prototype.dayjs = dayjs
    }
}

Vue.use(dayPlugin)

window.dayjs = dayjs

export const changeDayjsLocale = function (locale) {
    dayjs.locale(locale)
}

