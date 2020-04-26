// Load routes modules dynamically.
const requireContext = require.context('../../modules', true, /routes\.js$/)

const moduleRoutes = requireContext.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
    )
    .reduce((modules, [path, module]) => {
        return module.routes
    }, {})

import NotFound     from "../../components/NotFound";
import Welcome      from "../../components/Welcome";
import Home         from "../../components/Home";
import auth         from './auth';

export const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
    },
    ...auth,
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            ...moduleRoutes,
        ]
    },
    {
        path: '*',
        component: NotFound,
        name: 'not_found'
    }
];
