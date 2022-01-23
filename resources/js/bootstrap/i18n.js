import {createI18n} from 'vue-i18n'
import messages from './../includes/lang'
import axios from 'axios'
import {changeDayjsLocale} from './day'

const DEFAULT_LANGUAGE = 'en'

changeDayjsLocale(DEFAULT_LANGUAGE)

const i18n = createI18n({
    locale: DEFAULT_LANGUAGE,
    messages,
    silentTranslationWarn: true
})

setI18nLanguage(DEFAULT_LANGUAGE)

export function setI18nLanguage (lang) {
    changeDayjsLocale(DEFAULT_LANGUAGE)
    i18n.locale = lang
    axios.defaults.headers.common['Accept-Language'] = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}

export default i18n
