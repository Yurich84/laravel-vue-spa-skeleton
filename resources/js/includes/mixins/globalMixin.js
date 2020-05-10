const globalDateTimeDBFormat = 'YYYY-MM-DD HH:mm:ss';
const globalDateFormat = 'DD/MM/YYYY';
const globalDateTimeFormat = 'DD/MM/YYYY HH:mm';
export default {
    data: () => ({
        globalDateFormat: globalDateFormat,
        globalDateTimeFormat: globalDateTimeFormat,
        globalDateTimeDBFormat: globalDateTimeDBFormat,
        globalPageSize: 10,
    }),
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    methods: {
        /**
         * @return {string}
         */
        GlobalFormatDate(datetime) {
            return moment(datetime, globalDateTimeDBFormat).format(globalDateFormat)
        },
        /**
         * @return {string}
         */
        GlobalFormatTime(datetime) {
            return moment(datetime, globalDateTimeDBFormat).format(globalDateTimeFormat)
        }
    }
}
