import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Load store modules dynamically.
const requireContext = require.context('../modules', true, /store\.js$/)

const modules = requireContext.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
    )
    .reduce((modules, [path, module]) => {
        let name = path.split('/')[0]
        return { ...modules, [name]: module.store }
    }, {})

export default new Vuex.Store({
    modules
})
