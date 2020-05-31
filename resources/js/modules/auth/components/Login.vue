<template>
    <div>
        <h1>{{ $t('auth.login.title') }}</h1>
        <login-form @submit="onSubmit" :errors="authErrors" :loading="loading"></login-form>
    </div>
</template>

<script>
    import LoginForm from './LoginForm'
    export default {
        name: 'Login',
        components: {LoginForm},
        data() {
            return {
                authErrors: {},
                loading: false,
            }
        },
        methods: {
            onSubmit(loginData) {
                const self = this;
                this.$auth.login({
                    data: loginData,
                    redirect: {name: 'Dashboard'},
                    success: response => {
                        self.loading = false;
                    },
                    error: error => {
                        if (error.response.status === 422)
                            this.authErrors = error.response.data.errors
                        self.loading = false;
                    },
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
