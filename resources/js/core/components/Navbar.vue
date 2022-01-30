<template>
    <el-header class="header">
        <el-col
            :span="10"
            class="logo"
            :class="coreIsCollapsed?'logo-collapse-width':'logo-width'"
        >
            {{ coreIsCollapsed ? '' : $config.appName }}
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
            <span>{{ sysUserName }}</span>
            <el-dropdown>
                <span class="el-dropdown-link userinfo-inner">
                    <img :src="sysUserAvatar">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item
                            divided
                            @click.native="logout"
                        >
                            {{ $t('auth.logout.title') }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </el-header>
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

<style lang="scss">
.header {
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
    --el-header-padding: 0px !important;

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
</style>
