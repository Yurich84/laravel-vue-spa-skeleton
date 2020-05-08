<template>
    <div>
        <div class="row filter">
            <div class="col-6 form-group">
                <label for="groupSelect">Состояние</label>
                <select v-model="filter.group" class="form-control" id="groupSelect">
                    <option value="" selected>Выберите состояние</option>
                    <option v-for="(group, i) in config.brandGroupList" :value="i">{{ group }}</option>
                </select>
            </div>
            <div class="col-6 form-check">
                <input v-model="filter.select" type="checkbox" class="form-check-input" id="selectBox">
                <label class="form-check-label" for="selectBox">Избранный</label>
            </div>
        </div>

        <table class="table" id="brand-table">
            <thead>
                <tr>
                    <th v-for="field in fields" :key="field" @click="sortBy(field)">
                        {{ field | capitalize }}
                        <span v-if="brandSort.field === field">
                           <span v-if="brandSort.direction === 'desc'">&uarr;</span>
                            <span v-else>&darr;</span>
                        </span>
                    </th>
                </tr>
            </thead>
            <tr v-if="loading">
                <td colspan="8">
                    <div class="w-100 text-center">
                        <img src="/imgs/loader.gif">
                    </div>
                </td>
            </tr>
            <tr v-if="!loading" v-for="brand in availableBrands"
                :key="brand.id"
                @click="$router.push({ name: 'Edit Brand', params: { id: brand.id } })">
                <th v-for="field in fields" :key="field">
                    <span v-if="field === 'group'">{{ config.brandGroupList[brand[field]] }}</span>
                    <span v-else-if="field === 'select'">{{ brand[field] === 1 ? 'да' : 'Нет'}}</span>
                    <span v-else>{{ brand[field] }}</span>
                </th>
            </tr>
        </table>
    </div>
</template>

<script>

    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import {
        BRAND_CLEAR,
        BRAND_FETCH,
        BRAND_FILTER,
        BRAND_OBTAIN,
        BRAND_SORT
    } from "../store/types";

    export default {
        data() {
            return {
                fields: ['id', 'name', 'group', 'select'],
                loading: false,
                page: Number(this.$route.params.page) || 1,
                filter: {
                    group: null,
                    select: null
                }
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        computed: {
            ...mapGetters(['availableBrands', 'brandsMeta', 'brandSort', 'brandFilter']),
        },
        methods: {
            ...mapActions([BRAND_FETCH]),
            ...mapMutations([BRAND_OBTAIN, BRAND_CLEAR, BRAND_SORT, BRAND_FILTER]),
            loadTable() {
                this[BRAND_OBTAIN] = null
                this[BRAND_CLEAR]()
                this[BRAND_FETCH]({
                    page: this.page,
                    sort_field: this.brandSort.field,
                    sort_direction: this.brandSort.direction,
                    filter_group: this.brandFilter.group,
                    filter_select: this.brandFilter.select ? 1 : '',
                }).finally(() => this.isLoading = false)
            },
            sortBy(field) {
                let sort = Object.assign({}, this.brandSort)
                if(this.brandSort.field === field) {
                    sort.direction = this.brandSort.direction === 'asc' ? 'desc' : 'asc'
                } else {
                    sort.direction = 'asc'
                }
                sort.field = field
                this[BRAND_SORT](sort)
                this.loadTable()
            },
        },
        created() {
            this.loadTable()
        },
        watch: {
            'filter.group'() {
                this[BRAND_FILTER](Object.assign({}, this.filter))
                this.loadTable()
            },
            'filter.select'() {
                this[BRAND_FILTER](Object.assign({}, this.filter))
                this.loadTable()
            }
        }
    }
</script>
<style lang="scss">
    #brand-table {
        thead > tr > th {
            cursor: pointer;
            min-width: 100px;
        }
    }
</style>
