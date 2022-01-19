<template>
    <el-form
        ref="registerForm"
        :model="form"
        :rules="rules"
        label-width="130px"
        @keyup.enter.native="onSubmit"
    >
        <el-form-item
            prop="name"
            :label="$t('auth.register.name_label')"
            class="form-group"
            :error="$t(formErrors.get('name'))"
        >
            <el-input
                v-model="form.name"
                name="name"
                type="test"
            />
        </el-form-item>
        <el-form-item
            prop="email"
            :label="$t('auth.register.email_label')"
            class="form-group"
            :error="$t(formErrors.get('email'))"
        >
            <el-input
                v-model="form.email"
                name="email"
                type="email"
            />
        </el-form-item>
        <el-form-item
            prop="password"
            :label="$t('auth.register.password_label')"
            class="form-group"
            :error="$t(formErrors.get('password'))"
        >
            <el-input
                v-model="form.password"
                name="password"
                show-password
            />
        </el-form-item>
        <el-form-item
            prop="password_confirmation"
            :label="$t('auth.register.password_confirmation_label')"
            class="form-group"
        >
            <el-input
                v-model="form.password_confirmation"
                name="password_confirmation"
                show-password
            />
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button
                class="w-100"
                :loading="loading"
                @click.prevent="onSubmit"
            >
                {{ $t('auth.register.submit_button') }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import {Errors} from '../../../includes/Errors'

export default {
    name: 'RegisterForm',
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
                password_confirmation: ''
            },
            rules: {
                email: [
                    {required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('auth.register.email_label')}), trigger: 'blur'},
                    { type: 'email', message: this.$t('global.form.rules.email'), trigger: 'blur' }
                ],
                name: [
                    {required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('auth.register.name_label')}), trigger: 'blur'},
                    { trigger: 'blur', min: 3, max: 255, message: this.$t('global.form.rules.max', {
                        'fieldName': this.$t('auth.register.name'),
                        'attribute': 255,
                    })}
                ],
                password: [
                    {required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('auth.register.password_label')}), trigger: 'blur'},
                    { trigger: 'blur', min: 8, max: 12, message: this.$t('global.form.rules.max', {
                        'fieldName': this.$t('auth.register.password_label'),
                        'attribute': 8,
                    })}
                ],
                password_confirmation : [
                    { required: true, message: this.$t('global.form.rules.required', {'fieldName': this.$t('auth.register.password_confirmation_label')})},
                    { validator: this.checkPassIdentical, trigger: 'blur' }
                ]
            },
            formErrors: new Errors()
        }
    },
    watch: {
        errors: function (val) {
            this.formErrors.record(this.errors)
        }
    },
    methods: {
        onSubmit(e) {
            this.validateForm('registerForm').then((valid)=>{
                this.$emit('submit', this.form)
            })
        },
        async validateForm(formName) {
            if (typeof this.formErrors !== 'undefined') {
                this.formErrors.clear(null)
            }
            return this.$refs[formName].validate()
        },
        checkPassIdentical(rule, value, callback) {
            if (!value) {
                return callback(new Error(this.$t('global.form.rules.required', {'fieldName': this.$t('auth.register.password_label')})))
            }

            if (value !== this.form.password) {
                callback(new Error(this.$t('global.form.rules.password_repeat.different')))
            } else {
                callback()
            }
        },
    }
}
</script>

<style lang="scss">

</style>
