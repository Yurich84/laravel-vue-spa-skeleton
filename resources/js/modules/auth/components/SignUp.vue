<template>
    <div class="section17 position-relative">
        <div :class="['container d-flex pt-5 pb-md-5', {'align-items-center': !isRegistrationSuccess}]">
            <div v-if="!isRegistrationSuccess" class="row">
                <div class="col-12 col-sm-6 col-lg-5 col-xl-4">
                    <p class="sec17_title font-weight-bold mb-4 title_poppins_bold">{{ $t('main.signUp') }}</p>
                    <p class="sec17_txt mb-4">{{ $t('sign_up_form.content_left') }}</p>
                    <sign-up-form
                        @submit="onSubmit"
                        :is-loading="isLoading"
                        :errors="authErrors">
                    </sign-up-form>
                </div>
                <div class="col-12 col-sm-6 col-lg-5 offset-lg-2 col-xl-5 offset-xl-3 pt-5 text-center">
                    <p class="font-weight-bold mt-4 sec17_txt2 mb-4">{{ $t('sign_up_form.content_right') }}</p>
                    <router-link class="btn btn-new d-none d-sm-inline-block" :to="{name: loginLink}">
                        {{$t('login.submit_button')}}
                    </router-link>
                </div>
            </div>
            <sign-up-success v-if="isRegistrationSuccess"></sign-up-success>
        </div>
    </div>
</template>

<script>
    import SignUpForm from "./SignUpForm";
    import SignUpSuccess from "./SignUpSuccess";

    export default {
        name: 'SignUp',
        components: {SignUpForm, SignUpSuccess},
        beforeCreate() {
            if (!window.App.isWpDesign) {
                document.location.reload()
            }
        },
        data() {
            return {
                loginLink : 'login',
                isLoading: false,
                authErrors: {},
                isRegistrationSuccess: false,
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
                        self.isRegistrationSuccess = true;
                    },
                    error: function (err) {
                        self.isLoading = false
                        this.handleErrors(err)

                    },
                })
            },
            handleErrors(error){
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                } else if (error.response.status === 401) {
                    this.$message({
                        message: this.$t(error.response.data.message),
                        type: 'error'
                    });
                } else {
                    this.$message({
                        message: error.message,
                        type: 'error'
                    });
                }
            },

        }
    }
</script>

<style  lang="scss">

</style>
