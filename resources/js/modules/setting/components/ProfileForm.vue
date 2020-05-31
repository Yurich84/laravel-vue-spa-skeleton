<template>
    <el-form :model="form" :rules="rules" v-on:submit.prevent="onSubmit" ref="profileForm" label-position="left" label-width="120px">
        <el-form-item prop="name"
                      :label="$t('setting.profile.name')"
                      class="form-group"
                      :error="$t(errors.get('name'))">
            <el-input name="name"
                      type="name"
                      v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="email"
                      :label="$t('setting.profile.email')"
                      class="form-group"
                      :error="$t(errors.get('email'))">
            <el-input name="email"
                      type="email"
                      v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button class="w-100" type="success" @click.prevent="onSubmit" :loading="loading">{{ $t('global.save') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {Errors} from "../../../includes/Errors";
    import settingApi from "../api";

    export default {
        name: 'profileForm',
        data() {
            return {
                loading: false,
                form: {
                    name: this.$auth.user().name,
                    email: this.$auth.user().email,
                },
                rules: {
                    name: [
                        {required:true, message: this.$t('form.rules.required', { 'fieldName': this.$t('setting.profile.name')}), trigger: 'blur'}
                    ],
                    email: [
                        {required:true, message: this.$t('form.rules.required', { 'fieldName': this.$t('setting.profile.email')}), trigger: 'blur'},
                        { type: 'email', message: this.$t('form.rules.email'), trigger: ['blur', 'change'] }
                    ],
                },
                errors: new Errors()

            }
        },
        methods: {
            onSubmit(e) {
                this.validateForm('profileForm').then((valid)=>{
                    if (valid) {
                        this.loading = true
                        this.errors.clear()

                        settingApi.update(this.form).then(response => {
                            this.$message({
                                message: response.data.message,
                                type: response.data.type
                            })
                            if(response.data.type === 'success')
                                this.$emit('saved')
                        }).catch((error) => {
                            if (error.response.data.errors)
                                this.errors.record(error.response.data.errors)
                        }).finally(() => this.loading = false)
                    }
                });
            },
            async validateForm(formName) {
                if (typeof this.errors !== 'undefined') {
                    this.errors.clear(null)
                }
                return this.$refs[formName].validate()
            },
        },
    }
</script>

<style lang="scss">

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
