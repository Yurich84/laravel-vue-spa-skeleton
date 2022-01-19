<template>
    <el-col
        :span="24"
        class="header"
    >
        <el-col
            :span="10"
            class="logo"
            :class="coreIsCollapsed?'logo-collapse-width':'logo-width'"
        >
            {{ coreIsCollapsed ? '' : config.appName }}
        </el-col>
        <el-col :span="10">
            <div
                class="tools"
                @click.prevent="collapse"
            >
                <i class="fa fa-align-justify" />
            </div>
        </el-col>
        <el-col
            :span="4"
            class="userinfo"
        >
            <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner"><img :src="sysUserAvatar"> {{ sysUserName }}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                        divided
                        dusk="logout"
                        @click.native="logout"
                    >
                        {{ $t('auth.logout.title') }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-col>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {TOGGLE_COLLAPSE} from '../store/types'

export default {
    data: () => ({
        sysUserName: '',
        sysUserAvatar: '',
    }),
    methods: {
        ...mapMutations([TOGGLE_COLLAPSE]),
        logout: function () {
            this.$confirm(this.$t('auth.logout_confirm.text').toString(), this.$t('auth.logout_confirm.title').toString(), {
                confirmButtonText: this.$t('auth.logout_confirm.button_ok').toString(),
                cancelButtonText: this.$t('auth.logout_confirm.button_cancel').toString(),
            }).then(() => {
                this.$auth.logout()
            })
        },
        collapse() {
            this[TOGGLE_COLLAPSE]()
        },
    },
    mounted() {
        const user = this.$auth.user()
        if (user) {
            this.sysUserName = user.name || ''
            this.sysUserAvatar = user.avatar || ''
        }
    },
    computed: {
        ...mapGetters(['coreIsCollapsed'])
    }
}
</script>
