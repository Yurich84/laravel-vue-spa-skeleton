import Vue from 'vue'
import moment from 'moment'


const momentPlugin = {
    install(Vue) {
        Vue.prototype.moment = moment
    }
}

Vue.use(momentPlugin)

export const changeMomentLocale = function (locale) {
    moment.updateLocale(locale, {
        week : {
            dow : 1, // Monday is the first day of the week
            doy: 7
        }
    })
}
