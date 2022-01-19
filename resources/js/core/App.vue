<template>
    <div class="app">
        <transition
            v-if="$auth.ready()"
            name="fade"
            mode="out-in"
        >
            <router-view :key="$route.fullPath" />
        </transition>
        <div
            v-if="!$auth.ready()"
            class="loading-screen"
        >
            <div class="loading-text">
                <p>Loading ...</p>
            </div>
        </div>
    </div>
</template>

<script>
import notificationMixin from '../modules/notification/components/notificationMixin'
export default {
    name: 'App',
    mixins: [notificationMixin]
}
</script>

<style lang="scss">
.app {
    > div.loading-screen {
        height: 100vh;

        > .loading-text {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

            > p {
                text-shadow: 1px 1px 3px #000000;
                font-size: calc(3vh + 2vw);
                color: #ffffff;
            }
        }
    }
}
</style>
