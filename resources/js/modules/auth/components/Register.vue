<template>
    <div>
        <h1>{{ $t('auth.register.title') }}</h1>
        <register-form
            @submit="onSubmit"
            :is-loading="isLoading"
            :errors="authErrors">
        </register-form>
    </div>
</template>

<script>
    import RegisterForm from "./RegisterForm";

    export default {
        name: 'Register',
        components: {RegisterForm},
        data() {
            return {
                loginLink : 'login',
                isLoading: false,
                authErrors: {},
            }
        },
        methods: {
            onSubmit(signUpFormData) {
                const self = this;
                this.isLoading = true;
                this.$auth.register({
                    data: signUpFormData,
                    redirect: '',
                    success: function (res) {
                        self.isLoading = false;
                        this.$message.success(this.$t('auth.register.success'))
                    },
                    error: function (err) {
                        self.isLoading = false
                    },
                })
            },

        }
    }
</script>

<style  lang="scss">

</style>
