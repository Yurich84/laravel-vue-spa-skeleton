<template>
    <div>
        <template v-if="success">
            <div class="alert alert-success" role="alert">
                {{ success }}
            </div>

            <router-link :to="{ name: 'Login' }" class="btn btn-primary">
                {{ $t('auth.login.title') }}
            </router-link>
        </template>
        <template v-else>
            <div class="alert alert-danger" role="alert">
                {{ error || $t('auth.verification.failed') }}
            </div>

            <router-link :to="{ name: 'Verification resend' }" class="small float-right">
                {{ $t('auth.verification.resend_link') }}
            </router-link>
        </template>
    </div>
</template>

<script>

    import authApi from "../api";

    export default {
        name: 'VerifyEmail',
        data: () => ({
            error: '',
            success: ''
        }),
        mounted() {
            this.verifyEmail()
        },
        methods: {
            verifyEmail() {
                const qs = (params) => Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

                authApi.verify(this.$route.params.user, qs(this.$route.query)).then(res => {
                    this.success = res.data.status
                }).catch(error => {
                    this.error = error.response.data.status
                })
            }
        },
    }
</script>

<style  lang="scss">

</style>
