<template>
    <el-form
        ref="loginForm"
        :model="form"
        :rules="rules"
        label-width="120px"
        @keyup.enter.native="onSubmit"
    >
        <el-form-item
            prop="email"
            :label="$t('auth.login.email_label')"
            :error="$t(formErrors.get('email'))"
            class="form-group"
        >
            <el-input
                v-model="form.email"
                name="email"
                type="text"
            />
        </el-form-item>
        <el-form-item
            prop="password"
            :label="$t('auth.login.password_label')"
            :error="$t(formErrors.get('password'))"
            class="form-group"
        >
            <el-input
                v-model="form.password"
                name="password"
                type="password"
                show-password
            />
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button
                :loading="loading"
                class="w-100"
                @click.native="onSubmit"
            >
                {{ $t('auth.login.submit_button') }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import {Errors} from '../../../includes/Errors'

export default {
    name: 'LoginForm',
    props: {
        errors: {
            type: Object,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: {
                email: '',
                password: '',
                device_name: this.config.deviceName
            },
            rules: {
                email:      [{required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('auth.login.email_label')}), trigger: 'blur'}],
                password:   [{required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('auth.login.password_label')}), trigger: 'blur'}],
            },
            formErrors: new Errors()
        }
    },
    watch: {
        errors: function () {
            this.formErrors.record(this.errors)
        }
    },
    methods: {
        onSubmit(e) {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.$emit('submit', {
                        ...this.form
                    })
                }
            })
        },
    },
}
</script>

<style scoped lang="scss">
    .el-form-item__label {
        padding: 0 !important;
    }

    .sign-up-form {

        .el-form-item {
            margin-bottom: 12px;

            .el-form-item__label {
                padding: 0 !important;
            }
        }
    }

</style>
