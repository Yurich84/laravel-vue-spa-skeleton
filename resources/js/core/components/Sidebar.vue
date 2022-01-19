<template>
    <aside>
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
            :collapse="coreIsCollapsed"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
        >
            <template v-for="(item, index) in admin_routes">
                <el-menu-item
                    v-if="!item.children && !item.hidden"
                    :key="index"
                    :route="item"
                    :index="item.path"
                >
                    <i :class="item.iconCls || 'el-icon-s-claim'" />
                    <span slot="title">{{ $t(item.name) }}</span>
                </el-menu-item>
                <el-submenu
                    v-if="item.children && !item.hidden"
                    :key="index"
                    :index="index+''"
                >
                    <template slot="title">
                        <i :class="item.iconCls || 'el-icon-s-claim'" />
                        <span slot="title">{{ item.name }}</span>
                    </template>
                    <template v-for="child in item.children">
                        <el-menu-item
                            v-if="!child.hidden"
                            :key="child.path"
                            :route="child"
                            :index="child.path"
                        >
                            <span slot="title">{{ child.name }}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </aside>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Sidebar',
    components: {},
    data: () => ({

    }),
    methods: {
        menuItemIsAvailable(item) {
            let allowed = !item.meta.hidden
            if (allowed  && item.meta && item.meta.auth) {
                allowed = this.$auth.check(item.meta.auth)
            }
            return allowed
        },
        handleOpen() {
            //console.log('handleOpen');
        },
        handleClose() {
            //console.log('handleClose');
        },
        handleSelect: function (a, b) {
        },
    },
    computed: {
        ...mapGetters(['coreIsCollapsed']),
        admin_routes() {
            return this.$router.options.routes[0].children
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
