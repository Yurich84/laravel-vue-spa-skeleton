function page (path) {
    return () => import(/* webpackChunkName: '' */ `./components/${path}`).then(m => m.default || m)
}

export const routes = [
    {
        path: '/:page?',
        name: 'brands_index',
        component: page('BrandList'),
    },
    {
        path: '/brands/:id/edit',
        name: 'brands_edit',
        component: page('EditBrand'),
    }
]
