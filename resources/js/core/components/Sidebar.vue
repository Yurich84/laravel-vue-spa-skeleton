<template>
    <aside>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 @select="handleSelect"
                 router
                 :collapse="coreIsCollapsed">
            <template v-for="(item,index) in $router.options.routes[0].children">
                <el-menu-item :route="item" v-if="!item.children && !item.hidden" :index="item.path">
                    <i :class="item.iconCls || 'el-icon-s-claim'"></i>
                    <span slot="title">{{ $t(item.name) }}</span>
                </el-menu-item>
                <el-submenu :index="index+''" v-if="item.children">
                    <template slot="title">
                        <i :class="item.iconCls || 'el-icon-s-claim'"></i>
                        <span slot="title">{{ $t(item.name) }}</span>
                    </template>
                    <el-menu-item v-for="child in item.children"
                                  v-if="!item.hidden"
                                  :route="child"
                                  :index="child.path"
                                  :key="child.path">
                        <span slot="title">{{ $t(child.name) }}</span>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </aside>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Sidebar",
        components: {},
        data() {
            return {
                collapsed: false,
            }
        },
        methods: {
            menuItemIsAvailable(item) {
                let allowed = !item.meta.hidden;
                if (allowed  && item.meta && item.meta.auth) {
                    allowed = this.$auth.check(item.meta.auth);
                }
                return allowed;
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
        mounted() {
            if (window.innerWidth < 768) {
                this.collapsed = true;
            }
        },
        computed: {
            ...mapGetters(['coreIsCollapsed'])
        }
    }
</script>

<style lang="scss" scoped>

</style>
