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
        <el-form-item prop="name"
                      label="Name"
                      class="form-group"
                      :error="$t(formErrors.get('name'))">
            <el-input name="name"
                      type="name"
                      v-model="form.name"></el-input>
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
                },
                rules: {
                    name: [
                        {required:true, message: this.$t('form.rules.required', { 'fieldName': this.$t('sign_up_form.name')}), trigger: 'blur'}
                    ],
                    email: [
                        {required:true, message: this.$t('form.rules.required', { 'fieldName': this.$t('sign_up_form.email')}), trigger: 'blur'},
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                    ],
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
