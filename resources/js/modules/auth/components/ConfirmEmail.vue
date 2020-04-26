<template>
    <div v-if="isWpDesign" v-loading="isLoading" class="section17 position-relative">
        <div class="container d-flex pt-5 pb-md-5">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-5 col-xl-4">
                    <p class="sec17_title font-weight-bold mb-4 title_poppins_bold">
                        {{ $t('main.signUp') }}
                    </p>
                    <p v-if="!isLoading" class="sec17_txt mb-4">
                        {{ $t(isConfirmationSuccess ? 'confirm_email.content_success': 'confirm_email.content_error') }}
                    </p>
                </div>
                <div class="col-12 col-sm-6 col-lg-5 offset-lg-2 col-xl-5 offset-xl-3 text-center">
                    <p class="font-weight-bold mt-4 sec17_txt2 mb-4">{{ $t('sign_up_form.content_right') }}</p>
                    <router-link class="btn btn-new d-none d-sm-inline-block"
                                 :to="{name: isConfirmationSuccess ? loginLink : signUpLink}">
                        {{ $t(isConfirmationSuccess ? 'login.submit_button' : 'sign_up_form.submit_button') }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConfirmEmail',
        beforeCreate() {
            if (!window.App.isWpDesign) {
                document.location.reload()
            }
        },
        data() {
            return {
                isWpDesign: window.App.isWpDesign,
                wpUrl: window.App.wpUrl,
                loginLink: 'login',
                signUpLink:  'sign_up',
                isLoading: true,
                isConfirmationSuccess: false,
            }
        },
        methods: {
            confirmEmail() {
                this.axios.post('/auth/confirm', {
                    token: this.$route.params.token,
                }).then((res) => {
                    if (res.data.success) {
                        this.isConfirmationSuccess = true;
                        this.isLoading = false;
                    } else {
                        this.isLoading = false;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
        },
        mounted() {
            this.confirmEmail();
        }
    }
</script>

<style  lang="scss">

</style>
