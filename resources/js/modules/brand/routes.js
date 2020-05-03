/**
 * AutoImporting components
 * @param path
 * @returns {function(): *}
 */
const page = path => () => import(/* webpackChunkName: '' */ `./components/${path}`).then(m => m.default || m)

export const routes = [
    {
        path: '/brands/:page?',
        name: 'Brands',
        component: page('BrandList'),
    },
    {
        path: '/brands/:id/edit',
        name: 'Edit Brand',
        component: page('EditBrand'),
        hidden: true
    }
]
