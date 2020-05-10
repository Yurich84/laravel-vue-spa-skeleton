<template>
    <section id="tag-form">
        <el-form
            :model="form"
            label-width="100px"
            ref="form"
            :rules="rules"
            size="small"
            @submit.native.prevent="saveSubmit">
            <el-form-item label="Tag Name" prop="name" :error="errors.get('name')">
                <el-input
                    v-model="form.name"
                    @change="errors.clear('name')"
                    suffix-icon="el-icon-edit">
                </el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click.native="cancel" size="small">Cancel</el-button>
            <el-button type="success" @click.native="saveSubmit" :loading="formLoading" size="small" class="float-right">Save</el-button>
        </div>
    </section>
</template>

<script>
    import {Errors} from "../../../includes/Errors";
    import tagApi from '../api'

    export default {
        name: "TagForm",
        props: {
            initialForm: {
                default: () => ({})
            },
        },
        data: () => ({
            errors: new Errors(),
            formLoading: false,
            formTitle: 'New Tag',
            form: {},
            rules: {
                name: [
                    {required: true, message: 'tag name is required'},
                ],
            },
        }),
        methods: {
            saveSubmit() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.formLoading = true
                        this.errors.clear()
                        let action = this.form.id ? tagApi.update : tagApi.create

                        action(this.form).then((response) => {
                            this.$message({
                                message: response.data.message,
                                type: response.data.type
                            })
                            if(response.data.type === 'success')
                                this.$emit('saved')
                        }).catch((error) => {
                            if (error.response.data.errors)
                                this.errors.record(error.response.data.errors)
                        }).finally(() => this.formLoading = false)
                    }
                });
            },
            cancel() {
                this.clearForm()
                this.$emit('cancel')
            },
            clearForm() {
                this.errors.clear()
                if (this.$refs['form'])
                    this.$refs['form'].resetFields()
            }
        },
        mounted() {
            this.form = Object.assign({}, this.initialForm)
        },
        watch: {
            initialForm: function(formData) {
                if(_.isEmpty(formData)) this.clearForm()
                this.form = Object.assign({}, formData)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
