import moment from 'moment'

export const momentPlugin = {
    install(Vue) {
        Vue.prototype.moment = moment
    }
}

export const changeMomentLocale = function (locale) {
    moment.updateLocale(locale, {
        week : {
            dow : 1, // Monday is the first day of the week
            doy: 7
        }
    })
}
