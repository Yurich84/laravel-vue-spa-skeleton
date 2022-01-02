const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Webpack config
 |--------------------------------------------------------------------------
 |
 | To set PHPStorm see https://gist.github.com/nachodd/4e120492a5ddd56360e8cff9595753ae
 |
 */

module.exports = {
    output: {
        chunkFilename: 'js/chunks/[name].js',
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '@': path.resolve('./resources/js'),
        }
    },
}
