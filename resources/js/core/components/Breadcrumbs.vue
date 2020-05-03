<template>
    <el-breadcrumb separator="/" class="breadcrumb-inner">
        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
            {{ $t(item.name) || 'Home' }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "Breadcrumbs",
        components: {},
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>
