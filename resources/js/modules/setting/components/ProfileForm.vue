<template>
    <el-form
        ref="profileForm"
        :model="form"
        :rules="rules"
        label-position="left"
        label-width="120px"
        @submit.prevent="onSubmit"
    >
        <el-form-item
            prop="name"
            :label="$t('setting.profile.name')"
            class="form-group"
            :error="$t(errors.get('name'))"
        >
            <el-input
                v-model="form.name"
                name="name"
                type="name"
            />
        </el-form-item>
        <el-form-item
            prop="email"
            :label="$t('setting.profile.email')"
            class="form-group"
            :error="$t(errors.get('email'))"
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
                :loading="loading"
                @click.prevent="onSubmit"
            >
                {{ $t('global.save') }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import {Errors} from '../../../includes/Errors'
import settingApi from '../api'

export default {
    name: 'ProfileForm',
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
            })
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

    .sign-up-form {

        .el-form-item {
            margin-bottom: 12px;

            .el-form-item__label {
                padding: 0 !important;
            }
        }
    }

</style>
