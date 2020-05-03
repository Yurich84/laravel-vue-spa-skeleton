<template>
    <div class="app">
        <transition name="fade" mode="out-in">
            <router-view :key="$route.fullPath"></router-view>
        </transition>
    </div>
</template>

<script>
    import notificationMixin from '../modules/notification/components/notificationMixin'
    export default {
        name: 'App',
        mixins: [notificationMixin]
    }
</script>
