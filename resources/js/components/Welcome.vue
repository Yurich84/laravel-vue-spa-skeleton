<template>
    <div>
        <div class="top-right links">
            <template v-if="$auth.check()">
                <router-link :to="{ name: 'home' }">
                    {{ $t('home') }}
                </router-link>
            </template>
            <template v-else>
                <router-link :to="{ name: 'login' }">
                    {{ $t('login') }}
                </router-link>
                <router-link :to="{ name: 'register' }">
                    {{ $t('register') }}
                </router-link>
            </template>
        </div>

        <div class="text-center">
            <div class="title mb-4">
                {{ title }}
            </div>

            <div class="links">
                <a href="https://github.com/Yurich84/laravel-vue-spa-skeleton">github.com/Yurich84/laravel-vue-spa-skeleton</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        data: () => ({
            title: window.config.appName
        }),

    }
</script>

<style scoped>
    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .title {
        font-size: 85px;
    }
</style>
