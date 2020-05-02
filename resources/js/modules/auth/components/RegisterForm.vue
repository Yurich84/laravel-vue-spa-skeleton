<template>
    <el-form :model="form"
             :rules="rules"
             v-on:submit.prevent="onSubmit"
             label-width="130px"
             ref="registerForm">
        <el-form-item prop="name"
                      label="Name"
                      class="form-group"
                      :error="$t(formErrors.get('name'))">
            <el-input name="name"
                      type="test"
                      v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="email"
                      label="Email"
                      class="form-group"
                      :error="$t(formErrors.get('email'))">
            <el-input name="email"
                      type="email"
                      v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="password"
                      label="Password"
                      class="form-group"
                      :error="$t(formErrors.get('password'))">
            <el-input name="password"
                      v-model="form.password"
                      show-password
            ></el-input>
        </el-form-item>
        <el-form-item prop="password_confirmation"
                      label="Repeat password"
                      class="form-group">
            <el-input name="password_confirmation"
                      v-model="form.password_confirmation"
                      show-password></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button class="w-100" @click.prevent="onSubmit" :loading="isLoading">
                {{ $t('auth.register.submit_button') }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {Errors} from "../../../includes/Errors";

    export default {
        name: 'SignUpForm',
        props: {
            errors: Object,
            isLoading: Boolean,
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
                        {required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('auth.register.email')}), trigger: 'blur'},
                        { type: 'email', message: this.$t('global.form.rules.email'), trigger: ['blur', 'change'] }
                    ],
                    name: [
                        {required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('auth.register.name')}), trigger: 'blur'},
                        { trigger: 'blur', min: 3, max: 255, message: this.$t('global.form.rules.max', {
                            'fieldName': this.$t('auth.register.name'),
                            'attribute': 255,
                        })}
                    ],
                    password: [
                        {required:true, message: this.$t('global.form.rules.required', { 'fieldName': this.$t('auth.register.password')}), trigger: 'blur'},
                        { trigger: 'blur', min: 8, max: 12, message: this.$t('global.form.rules.password_length')}
                    ],
                    password_confirmation : [
                        { required: true, message: this.$t('global.form.rules.required', {'fieldName': this.$t('auth.register.password_confirmation')})},
                        { validator: this.checkPassIdentical, trigger: 'blur' }
                    ]
                },
                formErrors: new Errors()
            }
        },
        methods: {
            onSubmit(e) {
                this.validateForm('registerForm').then((valid)=>{
                    this.$emit('submit', this.form);
                });
            },
            async validateForm(formName) {
                if (typeof this.formErrors !== 'undefined') {
                    this.formErrors.clear(null)
                }
                return this.$refs[formName].validate()
            },
            checkPassIdentical(rule, value, callback) {
                if (!value) {
                    return callback(new Error(this.$t('global.form.rules.required', {'fieldName': this.$t('auth.register.password')})));
                }

                if (value !== this.form.password) {
                    callback(new Error(this.$t('global.form.rules.password_repeat.different')));
                } else {
                    callback();
                }
            },
        },
        watch: {
            errors: function (val) {
                this.formErrors.record(val);
            }
        }
    }
</script>

<style lang="scss">

</style>
