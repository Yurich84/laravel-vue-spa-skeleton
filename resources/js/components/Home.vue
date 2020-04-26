<template>
    <el-row class="home-container" v-if="$auth.ready()">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
                {{ collapsed ? '' : config.appName }}
            </el-col>
            <el-col :span="10">
                <div class="tools" @click.prevent="collapse">
                    <i class="fa fa-align-justify"></i>
                </div>
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner"><img :src="sysUserAvatar"/> {{sysUserName}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided @click.native="logout">{{ $t('main.logout') }}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <aside>
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen"
                         @close="handleClose"
                         @select="handleSelect"
                         router
                         :collapse="collapsed">
                    <template v-for="(item,index) in $router.options.routes[0].children" v-if="menuItemIsAvailable(item)">
                        <el-submenu :index="index+''" v-if="!item.meta.leaf">
                            <template slot="title">
                                <i :class="item.meta.uiIcon"></i>
                                <span slot="title">{{ $t(item.meta.nameTransKey) }}</span>
                            </template>
                            <el-menu-item :route="child" v-for="child in item.children"
                                          :index="child.path"
                                          :key="child.path"
                                          v-if="menuItemIsAvailable(child)">
                                <span slot="title">{{ $t(child.meta.nameTransKey) }}</span>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item :route="item" v-if="item.meta.leaf" :index="item.path">
                            <i :class="item.meta.uiIcon"></i>
                            <span slot="title">{{ $t(item.meta.nameTransKey) }}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </aside>
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <strong class="title">{{ $t($route.meta.nameTransKey) }}</strong>
                        <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                                {{ $t(item.meta.nameTransKey) }}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :span="24" class="content-wrapper">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </el-col>
                </div>
            </section>
        </el-col>
    </el-row>
    <div v-else>
        Loading ...
    </div>
</template>

<script>
    export default {
        data() {
            return {
                collapsed: false,
                sysUserName: '',
                sysUserAvatar: '',
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
            logout: function () {
                this.$confirm(this.$t('auth.logout_confirm.text'), this.$t('auth.logout_confirm.title'), {
                    confirmButtonText: this.$t('auth.logout_confirm.button_ok'),
                    cancelButtonText: this.$t('auth.logout_confirm.button_cancel'),
                }).then(() => {
                    this.$auth.logout()
                })
            },
            collapse: function () {
                this.collapsed = !this.collapsed
            },
        },
        mounted() {
            const user = this.$auth.user();
            // console.log(this.$router.options.routes[0].children)
            if (user) {
                this.sysUserName = user.name || '';
                this.sysUserAvatar = user.avatar || '';
            }

            if (window.innerWidth < 768) {
                this.collapsed = true;
            }
        },
    }

</script>

<style scoped lang="scss">
    /*@import '~scss_vars';*/

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 230px;
        min-height: 400px;
    }

    .home-container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;

        .header {
            height: 60px;
            line-height: 60px;
            background: #20a0ff;
            color: #fff;

            .userinfo {
                text-align: right;
                padding-right: 35px;
                float: right;

                .userinfo-inner {
                    cursor: pointer;
                    color: #fff;

                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin: 10px 0px 10px 10px;
                        float: right;
                    }
                }
            }

            .logo {
                //width:230px;
                height: 60px;
                font-size: 22px;
                padding-left: 20px;
                padding-right: 20px;
                border-color: rgba(238, 241, 146, 0.3);
                border-right-width: 1px;
                border-right-style: solid;

                img {
                    width: 40px;
                    float: left;
                    margin: 10px 10px 10px 18px;
                }

                .txt {
                    color: #fff;
                }
            }

            .logo-width {
                width: 230px;
            }

            .logo-collapse-width {
                width: 65px
            }

            .tools {
                padding: 0px 23px;
                width: 14px;
                height: 60px;
                line-height: 60px;
                cursor: pointer;
            }
        }

        .main {
            display: flex;
            // background: #324057;
            position: absolute;
            top: 60px;
            bottom: 0px;
            overflow: hidden;

            aside {
                /*flex: 0 0 230px;*/
                /*width: 230px;*/
                // position: absolute;
                // top: 0px;
                // bottom: 0px;
                .el-menu {
                    height: 100%;
                }

                .collapsed {
                    width: 60px;

                    .item {
                        position: relative;
                    }

                    .submenu {
                        position: absolute;
                        top: 0px;
                        left: 60px;
                        z-index: 99999;
                        height: auto;
                        display: none;
                    }

                }
            }

            .menu-collapsed {
                flex: 0 0 60px;
                width: 60px;
            }

            .menu-expanded {
                flex: 0 0 230px;
                width: 230px;
            }

            .content-container {
                // background: #f1f2f7;
                flex: 1;
                // position: absolute;
                // right: 0px;
                // top: 0px;
                // bottom: 0px;
                // left: 230px;
                overflow-y: scroll;
                padding: 10px;

                .breadcrumb-container {
                    //margin-bottom: 15px;
                    .title {
                        width: 400px;
                        float: left;
                        color: #475669;
                    }

                    .breadcrumb-inner {
                        float: right;
                    }
                }

                .content-wrapper {
                    background-color: #fff;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>
