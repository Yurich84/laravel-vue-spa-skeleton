<template>
    <section id="tag">
        <!-- filters -->
        <el-col :span="24" class="m-t-10">
            <el-form :inline="true" :model="filters" @submit.native.prevent="fetchData" size="mini">
                <el-form-item>
                    <el-button type="primary" @click="handleAdd" icon="el-icon-plus">Add</el-button>
                </el-form-item>

                <el-form-item class="mr-0 float-right">
                    <el-input v-model="filters.search" @input="applySearch" placeholder="Search...">
                        <i slot="suffix" class="el-input__icon el-icon-error" v-if="filters.search.length" @click="clearSearch"></i>
                    </el-input>
                </el-form-item>

            </el-form>
        </el-col>

        <!-- table -->
        <el-table
            :data="tags"
            highlight-current-row
            v-loading="loading"
            @sort-change="handleSortChange"
            @filter-change="handleFilterChange"
            style="width: 100%;">
            <el-table-column prop="id" label="Id" width="80"></el-table-column>
            <el-table-column prop="name" label="Name" min-width="230">
                <template slot-scope="scope">
                    <router-link class="el-link el-link--default ellipsis-form" :to="{name: 'Show Tag', params: {id: scope.row.id}}">
                        <span class="el-link--inner item_name">{{ scope.row.name }}</span>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="updated_at" label="Updated" width="230" sortable=false :sort-orders="sortOrders">
                <template slot-scope="updated_at">
                    {{ GlobalFormatDate(updated_at.row.updated_at) }}
                </template>
            </el-table-column>
            <el-table-column label="Actions" width="130" align="right">
                <template slot-scope="scope">
                    <el-tooltip
                        :open-delay="300"
                        placement="top"
                        content="Edit">
                        <span>
                            <el-button
                                @click="handleEdit(scope.row)"
                                size="mini"
                                icon="el-icon-edit">
                            </el-button>
                        </span>
                    </el-tooltip>
                    <el-tooltip
                        :open-delay="300"
                        placement="top"
                        content="Delete">
                        <span>
                            <el-button
                                @click="handleDelete(scope.row)"
                                type="danger"
                                size="mini"
                                icon="el-icon-delete">
                            </el-button>
                        </span>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>

        <!-- pagination -->
        <el-pagination
            layout="sizes, prev, pager, next"
            :current-page.sync="page"
            :page-size.sync="globalPageSize"
            :total="total"
            class="float-right mt-3 mb-3">
        </el-pagination>

        <!-- form dialog -->
        <el-dialog
            :title="formTitle"
            :visible.sync="formVisible"
            close-on-click-modal
            class="tags-dialog">
            <TagForm :initialForm="formData" @saved="saved" @cancel="formVisible = false" />
        </el-dialog>
    </section>
</template>

<script>

    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import {TAG_CLEAR, TAG_FETCH, TAG_FILTER, TAG_OBTAIN, TAG_SORT} from "../store/types";
    import {Errors} from "../../../includes/Errors";
    import tagApi from '../api'
    import TagForm from "./TagForm";

    export default {
        name: "TagList",
        components: {TagForm},
        data: () => ({
            sortBy: 'id,asc',
            sortOrders: ['ascending', 'descending'],
            loading: true,
            filters: {
                search: ''
            },
            errors: new Errors(),
            total: 0,
            page: 1,
            formVisible: false,
            formTitle: 'New Tag',
            formData: null
        }),
        computed: {
            ...mapGetters(['tags', 'tagsMeta', 'tagSort', 'tagFilter']),
        },
        methods: {
            ...mapActions([TAG_FETCH]),
            ...mapMutations([TAG_OBTAIN, TAG_CLEAR, TAG_SORT, TAG_FILTER]),
            handleSortChange(val) {
                if (val.prop != null) {
                    let sort = val.order.startsWith('a') ? 'asc' : 'desc';
                    this.sortBy = val.prop + ',' + sort;
                    this.fetchData();
                }
            },
            handleFilterChange() {
                this.fetchData();
            },
            fetchData() {
                let params = {
                    page: this.page,
                    search: this.filters.search,
                    sortBy: this.sortBy,
                    pageSize: this.globalPageSize
                };
                this[TAG_FETCH](params).finally(() => this.loading = false)
            },
            handleAdd() {
                this.formTitle = 'New Tag';
                this.formData = {};
                this.formVisible = true;
            },
            handleEdit(row) {
                this.formTitle = 'Edit Tag';
                this.formData = Object.assign({}, row);
                this.formVisible = true;
            },
            handleDelete(row) {
                this.$confirm('This will permanently delete the tag. Continue?', 'Warning', {
                    type: 'warning'
                }).then(() => {
                    this.loading = true;
                    tagApi.delete(row.id).then((response) => {
                        this.$message({
                            message: response.data.message,
                            type: response.data.type
                        })
                        this.fetchData()
                    }).finally(() => this.loading = false)
                })
            },
            applySearch: _.debounce(() => {
                this.fetchData();
            }, 300),
            clearSearch() {
                this.filters.search = '';
                this.fetchData();
            },
            saved() {
                this.formVisible = false
                this.fetchData()
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            'filter.select'() {
                this[TAG_FILTER](Object.assign({}, this.filter))
                this.fetchData()
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
