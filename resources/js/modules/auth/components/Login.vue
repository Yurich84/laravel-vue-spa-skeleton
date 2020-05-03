<template>
    <div>
        <h1>{{ $t('auth.login.title') }}</h1>
        <login-form @submit="onSubmit"></login-form>
    </div>
</template>

<script>
    import LoginForm from './LoginForm'
    export default {
        name: 'Login',
        components: {LoginForm},
        data() {
            return {

            }
        },
        methods: {
            onSubmit(loginData) {
                this.$auth.login({
                    data: loginData,
                    redirect: {name: 'Dashboard'},
                    success: (response) => {
                        // console.log('ok', this.$auth);
                    },
                    error: (reject) => {
                        // this.error = 'Login fehlerhaft'
                    },
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
