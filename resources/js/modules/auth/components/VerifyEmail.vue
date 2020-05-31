<template>
    <div>
        <template v-if="success">
            <div class="alert alert-success" role="alert">
                {{ success }}
            </div>

            <router-link :to="{ name: 'login' }" class="btn btn-primary">
                {{ $t('login') }}
            </router-link>
        </template>
        <template v-else>
            <div class="alert alert-danger" role="alert">
                {{ error || $t('failed_to_verify_email') }}
            </div>

            <router-link :to="{ name: 'verification.resend' }" class="small float-right">
                {{ $t('resend_verification_link') }}
            </router-link>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'VerifyEmail',
        data: () => ({
            error: '',
            success: ''
        }),
        async beforeRouteEnter (to, from, next) {
            try {
                const { data } = await axios.post(`/email/verify/${to.params.id}?${qs(to.query)}`)

                next(vm => { vm.success = data.status })
            } catch (e) {
                next(vm => { vm.error = e.response.data.status })
            }
        },
        methods: {
        },
    }
</script>

<style  lang="scss">

</style>
