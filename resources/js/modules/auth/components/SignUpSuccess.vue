<template>
    <div class="message">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: 'SignUpSuccess',
        data() {
            return {
                message: 'Спасибо за регистрацию, письмо с подтверждением отправлено на почту'
            }
        }
    }
</script>

<style lang="scss">
    .message {
        text-align: center;
        width: 100%;
    }
</style>
