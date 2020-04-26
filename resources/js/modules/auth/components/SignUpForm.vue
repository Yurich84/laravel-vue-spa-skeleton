<template>
    <el-form :model="form" :rules="rules" v-on:submit.prevent="onSubmit" ref="signUpForm" label-position="top" class="sec17_form sign-up-form">
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
        <el-form-item prop="checkPass"
                      label="Repeat password"
                      class="form-group">
            <el-input name="checkPass"
                      v-model="form.checkPass"
                      show-password></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <button class="btn btn-new mt-4 mr-4 mr-sm-0" @click.prevent="onSubmit" :loading="isLoading">{{ $t('main.signUp') }}</button>
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
                    checkPass: ''
                },
                rules: {
                    email: [
                        {required:true, message: this.$t('form.rules.required', { 'fieldName': this.$t('sign_up_form.email')}), trigger: 'blur'},
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                    ],
                    password: [
                        {required:true, message: this.$t('form.rules.required', { 'fieldName': this.$t('sign_up_form.password')}), trigger: 'blur'},
                        { trigger: 'blur', min: 8, max: 12, message: this.$t('form.rules.password_length')}
                    ],
                    checkPass : [
                        { required: true, message: this.$t('form.rules.password_repeat.empty') },
                        { validator: this.checkPassIdentical, trigger: 'blur' }
                    ]
                },
                formErrors: new Errors()

            }
        },
        methods: {
            onSubmit(e) {
                this.validateForm('signUpForm').then((valid)=>{
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
                    return callback(new Error(this.$t('form.rules.password_repeat.empty')));
                }

                if (value !== this.form.password) {
                    callback(new Error(this.$t('form.rules.password_repeat.different')));
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
