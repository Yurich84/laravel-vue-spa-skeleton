const mix = require('laravel-mix');
const config = require('./webpack.config')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
    .vue({ version: 2 });

mix.autoload({
    lodash: ['_'],
})

if (mix.inProduction()) {
    mix.version()
} else {
    mix.sourceMaps(true, 'source-map')
}

mix.options({
    fileLoaderDirs: {
        images: 'images/compiled',
        fonts: 'fonts'
    }
})

if (process.env.sync) {
    mix.browserSync({
        proxy: '127.0.0.1:8000'
    })
}

mix.webpackConfig(config)
