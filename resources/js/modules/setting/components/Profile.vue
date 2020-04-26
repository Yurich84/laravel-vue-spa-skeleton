<template>
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
</template>

<script>

export default {

}
</script>
