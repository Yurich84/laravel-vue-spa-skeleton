import * as fromTypes from './types'

export const store = {
    state: {
        messages: []
    },
    getters: {
        notificationMessages: state => state.messages
    },
    mutations: {
        [fromTypes.RAISE_ERROR](store, message) {
            store.messages.push({
                type: 'error',
                message: message
            })
        },
        [fromTypes.CLEAR_NOTIFICATION_MESSAGES](store) {
            store.messages = []
        },
        [fromTypes.NOTIFY](store, message) {
            store.messages.push(message)
        }
    }
}
