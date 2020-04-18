import {mapGetters, mapMutations} from 'vuex'
import * as notificationTypes from '../store/types'

export default {
    name: 'Notificator',
    render(h) {
        return h
    },
    computed: {
        ...mapGetters(['notificationMessages'])
    },
    watch: {
        notificationMessages: function (newValue) {
            if (newValue.length) {
                newValue.forEach(m => this.showMessage(m))
                this[notificationTypes.CLEAR_NOTIFICATION_MESSAGES]()
            }
        }
    },
    methods: {
        ...mapMutations([
            notificationTypes.CLEAR_NOTIFICATION_MESSAGES,
        ]),
        showMessage(message) {
            switch (message.type) {
                case notificationTypes.ERROR_MESSAGE:
                    this.$message.error(message.message)
                    break
                case notificationTypes.WARNING_MESSAGE:
                case notificationTypes.SUCCESS_MESSAGE:
                    this.$message({
                        ...message
                    })
                    break
                case notificationTypes.COMMON_MESSAGE:
                    this.$notify({
                        ...message.message
                    })

            }
        }
    }
}
