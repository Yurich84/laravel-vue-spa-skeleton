<p align="center">
<img height="80" src="https://laravel.com/img/logomark.min.svg">
<img height="80" src="https://vuejs.org/images/logo.png" alt="Vue logo">
<img height="80" src="https://cdn.worldvectorlogo.com/logos/element-ui-1.svg">
</p>

#### Basement for a large modular SPA, using Laravel, Vue, ElementUI, Bootstrap. 
#### With a CRUD generator in the form of an standalone module on the frontend and backend.

This is a template for a medium to large project that:
- will help to avoid hard cohesion between modules
- will be understandable for an inexperienced programmer
- helps to avoid code duplication
- will be easy to expand
- reduce the start time of the project
- reduce the time of project support and code navigation
- lays the foundation for writing clean code

## Extensions

- BackEnd: [Laravel 7](https://laravel.com/)
- FrontEnd: [Vue](https://vuejs.org) + [VueRouter](https://router.vuejs.org) + [Vuex](https://vuex.vuejs.org) + [VueI18n](https://kazupon.github.io/vue-i18n/)
- Login using [JWT](https://jwt.io/) with [Vue-Auth](https://github.com/websanova/vue-auth), [Axios](https://github.com/mzabriskie/axios) and [JWT-Auth](https://github.com/tymondesigns/jwt-auth).
- The api routes, are separate for each module, in **Modules/{ModuleName}/routes_api.php**
- [ElementUI](http://element.eleme.io/) UI Kit 
- [Lodash](https://lodash.com) js utilities
- [Moment](https://momentjs.com) time manipulations
- [FontAwesome 5](http://fontawesome.io/icons/) icons
- [Bootstrap 4](https://getbootstrap.com) css

## Install
- `git clone https://github.com/Yurich84/laravel-vue-spa-skeleton.git`
- `cd laravel-vue-spa-sceleton`
- `composer install`
- set your DB credentials in `.env`
- `php artisan migrate`
- `npm install`

##Usage
- `npm run watch` or `npm run hot` # for hot reloading
- `php artisan serve` and go [127.0.0.1:8000](http://127.0.0.1:8000)
- Login with `admin@app.com`, password `password` or create new user.

### Creating module
`php artisan make:module {ModuleName}`

This will create: 

- **migration** `database/migrations/000_00_00_000000_create_{ModuleName}_table.php`

- **model** `app/Models/{ModuleName}.php`

- **backend module** `app/Modules/{ModuleName}/`
```
{ModuleName}/
│
├── routes_api.php
│
├── Controllers/
│   └── {ModuleName}Controller.php
│
├── Requests/
│   └── {ModuleName}Request.php
│
└── Resources/
    └── {ModuleName}Resource.php
```

- **frontend module** `resources/js/modules/{moduleName}/`
```
{moduleName}/
│
├── routes.js
│
├── api/
│   └── index.js
│
├── components/
│   ├── {ModuleName}List.vue
│   ├── {ModuleName}View.vue
│   └── {ModuleName}Form.vue
│
└── store/
    ├── store.js
    ├── types.js
    └── actions.js
```

Every module loads dynamically.

[open-source MIT license](https://opensource.org/licenses/MIT).
