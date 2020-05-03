import Vue from 'vue'
import Vuex from 'vuex'
import {store as core} from "./store";

Vue.use(Vuex)

// Load store modules dynamically.
const requireContext = require.context('../../modules', true, /store\.js$/)

let modules = requireContext.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
    )
    .reduce((modules, [path, module]) => {
        let name = path.split('/')[0]
        return { ...modules, [name]: module.store }
    }, {})

modules = {...modules, core}

export default new Vuex.Store({
    modules
})
