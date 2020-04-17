<template>
    <div class="app">
        <Notificator></Notificator>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
    import Notificator from '../modules/notification/components/Notificator'

    export default {
        name: 'App',
        components: {
            Notificator
        },
        methods:{

        },
    }
</script>
