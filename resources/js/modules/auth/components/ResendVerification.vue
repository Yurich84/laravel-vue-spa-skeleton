<template>
    <div>
        <h1>{{ $t('auth.verification.resend_title') }}</h1>
        <el-form
            ref="resendForm"
            :model="form"
            :rules="rules"
            label-position="left"
            label-width="120px"
            @submit.prevent="resend"
        >
            <el-form-item
                prop="email"
                :label="$t('setting.profile.email')"
                class="form-group"
            >
                <el-input
                    v-model="form.email"
                    name="email"
                    type="email"
                />
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button
                    class="w-100"
                    type="success"
                    @click.prevent="resend"
                >
                    {{ $t('auth.verification.resend_button') }}
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

import authApi from '../api'

export default {
    name: 'ResendVerification',
    data() {
        return {
            form: {},
            rules: {
                email: [
                    {
                        required: true,
                        message: this.$t('form.rules.required', {'fieldName': this.$t('setting.profile.email')}),
                        trigger: 'blur'
                    },
                    {type: 'email', message: this.$t('form.rules.email'), trigger: ['blur', 'change']}
                ],
            },
        }
    },
    methods: {
        resend() {
            authApi.resend(this.form).then(response => {
                this.$message({
                    message: response.data.message,
                    type: response.data.type
                })
            })
        }
    },
}
</script>

<style  lang="scss">

</style>
