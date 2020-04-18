import VueI18n from 'vue-i18n'
import {messages} from './../includes/lang'
import axios from 'axios'
import {changeMomentLocale} from "./moment-setup";

const DEFAULT_LANGUAGE = 'ru'

changeMomentLocale(DEFAULT_LANGUAGE)

export function plugin(Vue) {
    Vue.use(VueI18n)
}

export function makeI18nInstance() {
    const i18n = new VueI18n({
        locale: DEFAULT_LANGUAGE, // set locale
        fallbackLocale: DEFAULT_LANGUAGE,
        messages // set locale messages
    })

    setI18nLanguage(DEFAULT_LANGUAGE, i18n)

    return i18n
}

function setI18nLanguage (lang, i18nInstance) {
    i18nInstance.locale = lang
    axios.defaults.headers.common['Accept-Language'] = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}
