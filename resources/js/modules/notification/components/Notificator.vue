<template>
    <notifications group="app"/>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import * as fromNotificationTypes from '../store/types'

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
                    this[fromNotificationTypes.CLEAR_NOTIFICATION_MESSAGES]()
                }
            }
        },
        methods: {
            ...mapMutations([
                fromNotificationTypes.CLEAR_NOTIFICATION_MESSAGES,
            ]),
            showMessage(message) {
                switch (message.type) {
                    case fromNotificationTypes.ERROR_MESSAGE:
                        this.$notify.error(message.message)
                        break
                    case fromNotificationTypes.WARNING_MESSAGE:
                    case fromNotificationTypes.SUCCESS_MESSAGE:
                        this.$notify({
                            ...message
                        })
                        break
                    case fromNotificationTypes.COMMON_MESSAGE:
                        this.$notify({
                            ...message.message
                        })

                }
            }
        }
    }
</script>

<style scoped>

</style>
