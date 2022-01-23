import * as dayjs from 'dayjs'
import 'dayjs/locale/en'

export const changeDayjsLocale = function (locale) {
    dayjs.locale(locale)
}

export default dayjs
