/**
 * AutoImporting components
 * @param path
 * @returns {function(): *}
 */
const page = path => () => import(/* webpackChunkName: '' */ `./components/${path}`).then(m => m.default || m)

export const routes = [
    {
        path: '/tags',
        name: 'Tags',
        component: page('TagList'),
    },
    {
        path: '/tags/:id',
        name: 'Show Tag',
        component: page('TagView'),
        hidden: true
    }
]
