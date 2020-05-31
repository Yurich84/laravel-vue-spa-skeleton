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
                const self = this;
                this.loading = true;
                this.$auth.register({
                    data: signUpFormData,
                    redirect: {name: ROUTE_LOGIN},
                    success: function (response) {
                        self.loading = false;
                        if(response.data.status) {
                            this.$message.success(response.data.status)
                        } else {
                            this.$message.success(this.$t('auth.register.success'))
                        }
                    },
                    error: function (error) {
                        if (error.response.status === 422)
                            this.authErrors = error.response.data.errors
                        self.loading = false
                    },
                })
            },

        }
    }
</script>

<style  lang="scss">

</style>
