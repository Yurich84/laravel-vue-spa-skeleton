<template>
    <el-row class="home-container" v-if="$auth.ready()">
        <navbar></navbar>
        <el-col :span="24" class="main">
            <sidebar></sidebar>
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <breadcrumbs></breadcrumbs>
                    </el-col>
                    <el-col :span="24" class="content-wrapper">
                        <el-card shadow="always">
                            <h1 class="title text-center">{{ $t($route.name) }}</h1>
                            <transition name="fade" mode="out-in">
                                <router-view :key="$route.fullPath"></router-view>
                            </transition>
                        </el-card>
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
    import Navbar from "./Navbar";
    import Sidebar from "./Sidebar";
    import Breadcrumbs from "./Breadcrumbs";
    export default {
        components: {Breadcrumbs, Sidebar, Navbar},
    }

</script>

<style lang="scss">
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
                        margin-bottom: 7px;
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
