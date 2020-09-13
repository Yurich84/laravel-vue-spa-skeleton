<template>
    <div>
        <h1>{{ $t('auth.register.title') }}</h1>
        <register-form @submit="onSubmit" :loading="loading" :errors="authErrors"></register-form>
    </div>
</template>

<script>
    import RegisterForm from "./RegisterForm";
    import {ROUTE_LOGIN} from "../routes_auth";

    export default {
        name: 'Register',
        components: {RegisterForm},
        data() {
            return {
                loading: false,
                authErrors: {},
            }
        },
        methods: {
            onSubmit(signUpFormData) {
                this.$auth
                    .register({
                        data: signUpFormData,
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.$message.success(response.data.status)
                        } else {
                            this.$message.success(this.$t('auth.register.success'))
                        }
                    }, error => {
                        if (error.response.status === 422)
                            this.authErrors = error.response.data.errors
                    })
                    .finally(() => this.loading = false);;
            },
        }
    }
</script>

<style  lang="scss">

</style>
