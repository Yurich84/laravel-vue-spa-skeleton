<template>
            <div class="row">
                <div class="col-12 col-sm-6">
                    <div class="row">
                        <div class="col-12">
                            <p class="sec17_title font-weight-bold mb-4 title_poppins_bold">{{ $t('main.login') }}</p>
                            <p class="sec17_txt mb-4" v-html="$t('login.content_left')"></p>
                        </div>
                        <div class="col-12 col-md-10 col-lg-8">
                            <login-form @submit="onSubmit"></login-form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-5 offset-lg-1 col-xl-6 offset-xl-0 pt-sm-5 text-center">
                    <p class="font-weight-bold mt-4 sec17_txt2 mb-4" v-html="$t('login.content_right')"></p>
                    <router-link class="btn btn-new d-none d-sm-inline-block" :to="{name: signUpLink}">{{$t('main.signUp')}}</router-link>
                </div>
            </div>
</template>

<script>
    import LoginForm from './LoginForm'
    export default {
        name: 'Login',
        components: {LoginForm},
        data() {
            return {
                isLogin: false,
                signUpLink : 'sign_up',
            }
        },
        methods: {
            onSubmit(loginData) {
                const self = this
                this.isLogin = true
                this.$auth.login({
                    data: loginData,
                    redirect: '/',
                    success: function (res) {
                        self.isLogin = false
                    },
                    error: function (err) {
                        console.log(err.message)
                        self.isLogin = false
                    },
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
