<template>
    <section id="tag_show">
        <div class="text-center">{{ tag.name }}</div>
    </section>
</template>

<script>

    import tagApi from "../api"

    export default {
        name: "TagView",
        components: {},
        data() {
            return {
                tag: {},
            }
        },
        methods: {
            async fetchTag() {
                const response = await tagApi.find(this.$route.params.id)
                this.tag = response.data.data
            },
        },
        mounted() {
            this.fetchTag()
        },
    }
</script>

<style lang="scss" scoped>

</style>
