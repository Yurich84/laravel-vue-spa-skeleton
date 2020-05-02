<template>
    <el-form @submit="onSubmit" :model="form" :rules="rules" ref="loginForm" label-width="120px">
        <el-form-item prop="email" label="Email" class="form-group">
            <el-input
                type="text"
                v-model="form.email"
                :error="$t(formErrors.get('email'))"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="Password" class="form-group">
            <el-input type="password"
                      v-model="form.password"
                      show-password
                      :error="$t(formErrors.get('password'))"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button @click.native="onSubmit" :loading="logining" class="w-100">
                {{ $t('auth.login.submit_button') }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {Errors} from "../../../includes/Errors";

    export default {
        name: 'LoginForm',
        props: {
            logining: false
        },
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                rules: {
                    email:      [{required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('login.email_label')}), trigger: 'blur'}],
                    password:   [{required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('login.password_label')}), trigger: 'blur'}],
                },
                formErrors: new Errors()
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
