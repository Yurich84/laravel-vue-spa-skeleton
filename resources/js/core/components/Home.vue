<template>
    <navbar />
    <el-container class="home-container">
        <sidebar />
        <el-container>
            <el-main>
                <breadcrumbs />
                <el-card shadow="always">
                    <h1 class="title text-center">
                        {{ $t($route.name.toString()) }}
                    </h1>
                    <router-view
                        :key="$route.fullPath"
                        v-slot="{ Component }"
                    >
                        <transition
                            name="fade"
                            mode="out-in"
                        >
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </el-card>
            </el-main>
            <el-footer>&nbsp;</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Breadcrumbs from './Breadcrumbs'

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

.el-breadcrumb {
    padding-bottom: 20px;
}
</style>
