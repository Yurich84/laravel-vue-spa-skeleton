<template>
    <div class="app">
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
    import notificationMixin from '../modules/notification/components/notificationMixin'
    export default {
        name: 'App',
        mixins: [notificationMixin]
    }
</script>
