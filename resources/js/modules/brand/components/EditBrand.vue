<template>
    <div id="edit_brand" class="container">
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="form.name" type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="form.description" class="form-control" id="description" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="groupSelect">Состояние</label>
                <select v-model="form.group" class="form-control" id="groupSelect">
                    <option v-for="(group, i) in config.brandGroupList" :value="i">{{ group }}</option>
                </select>
            </div>
            <div class="form-check">
                <input v-model="form.select" type="checkbox" class="form-check-input" id="selectBox">
                <label class="form-check-label" for="selectBox">Избранный</label>
            </div>
            <br/>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>

    import brandApi from "../api"

    export default {
        name: "EditBrand",
        components: {},
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                    group: null,
                    select: false
                },
                errors: []
            }
        },
        methods: {
            async fetchBrand() {
                const response = await brandApi.find(this.$route.params.id)
                this.form = response.data.data
            },
            checkForm () {
                if (this.form.name && this.form.description) {
                    return true;
                }

                this.errors = [];

                if (!this.form.name) {
                    this.errors.push('Требуется указать название.');
                }
                if (!this.form.description) {
                    this.errors.push('Требуется описание.');
                }
            },

            submitForm(e) {
                if(this.checkForm()) {
                    brandApi.all(this.form, this.$route.params.id).then(() => {
                        this.$message.success('Бренд обновлен')
                        this.$router.go(-1)
                    }).catch(error => {
                        if(!!error.errors) {
                            this.$message.error(error.data.errors[0])
                        }
                    })
                }
            }
        },
        mounted() {
            this.fetchBrand()
        },
        watch: {
            'errors.length'() {
                _.forEach(this.errors, error => {
                    this.$notify({
                        group: 'app',
                        type: 'error',
                        text: error
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
