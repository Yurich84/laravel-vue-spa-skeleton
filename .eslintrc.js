module.exports = {
    extends: [
        'plugin:vue/recommended',
    ],
    rules: {
        'indent': [
            'warn',
            4
        ],
        'vue/html-indent': [
            'warn',
            4
        ],
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'never'
        ],
        'vue/sort-keys': 'off',
        'vue/static-class-names-order': 'off',
        'vue/order-in-components': 'off',
        'vue/no-v-html': 'off',
        'vue/require-valid-default-prop': 'off'
    },
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': 2020,
        'sourceType': 'module',
        'allowImportExportEverywhere': true
    },
}
