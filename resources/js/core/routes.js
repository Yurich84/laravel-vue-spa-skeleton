import Index        from "./components/Index";
import NotFound     from "./components/NotFound";
import Welcome      from "./components/Welcome";
import Home         from "./components/Home";
import auth         from '../modules/auth/routes_auth';

// Load modules routes dynamically.
const requireContext = require.context('../modules', true, /routes\.js$/)

const modules = requireContext.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
    )

let moduleRoutes = [];

for(let i in modules) {
    moduleRoutes = moduleRoutes.concat(modules[i][1].routes)
}

export const routes = [
    {
        path: '/admin',
        component: Home,
        meta: {auth: true},
        children: [
            ...moduleRoutes,
        ]
    },
    {
        path: '/',
        component: Welcome,
        children: [
            {
                path: '/',
                component: Index,
                name: 'index',
            },
            ...auth,
            {
                path: '*',
                component: NotFound,
                name: 'not_found'
            }
        ]
    },
];

