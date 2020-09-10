<p align="center">
<img height="80" src="https://laravel.com/img/logomark.min.svg">
<img height="80" src="https://vuejs.org/images/logo.png" alt="Vue logo">
<img height="80" src="https://cdn.worldvectorlogo.com/logos/element-ui-1.svg">
</p>

#### This is a basement for a large modular SPA, that utilises Laravel, Vue, ElementUI, Bootstrap. 
#### CRUD generator is integrated in project creates standalone modules on the frontend and backend.

<p align="center">
    <img width="100%" src="https://i.imgur.com/VNa5jOg.png" >
</p>

The main goals of the project are:
- to avoid hard cohesion between modules
- to form the basis for writing clean code
- to be easy to expand
- to avoid code duplication
- to reduce the start time of the project
- to reduce the time of project support and code navigation
- to be understandable for an inexperienced programmer

## Extensions

- BackEnd: [Laravel 8](https://laravel.com/)
- FrontEnd: [Vue](https://vuejs.org) + [VueRouter](https://router.vuejs.org) + [Vuex](https://vuex.vuejs.org) + [VueI18n](https://kazupon.github.io/vue-i18n/)
- Login using [JWT](https://jwt.io/) with [Vue-Auth](https://websanova.com/docs/vue-auth/home), [Axios](https://github.com/mzabriskie/axios) and [JWT-Auth](https://github.com/tymondesigns/jwt-auth).
- The api routes, are separate for each module, in **Modules/{ModuleName}/routes_api.php**
- [ElementUI](http://element.eleme.io/) UI Kit 
- [Lodash](https://lodash.com) js utilities
- [Moment](https://momentjs.com) time manipulations
- [FontAwesome 5](http://fontawesome.io/icons/) icons
- [Bootstrap 4](https://getbootstrap.com) css

## Install
- `git clone https://github.com/Yurich84/laravel-vue-spa-skeleton.git`
- `cd laravel-vue-spa-skeleton`
- `composer install`
- `cp .env.example .env` - copy .env file
- set your DB credentials in `.env`
- `php artisan key:generate`
- `php artisan jwt:secret --force`
- `php artisan migrate`
- `npm install`

## Usage
- `npm run watch` or `npm run hot` - for hot reloading
- `php artisan serve` and go [127.0.0.1:8000](http://127.0.0.1:8000)
- Create new user and login.

### Creating module
You can easily create module with CRUD functionality.
 
`php artisan make:module {ModuleName}`

This will create: 

- **migration** `database/migrations/000_00_00_000000_create_{ModuleName}_table.php`

- **model** `app/Models/{ModuleName}.php`

- **factory** `database/factories/{ModuleName}Factory.php`

- **tests** `tests/Feature/{ModuleName}Test.php`

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


> After creating module, you can edit model and migration by adding fields you need. 
> Also you can add this fields into view.
> Don't forget run php artisan migrate.

Every module loads dynamically.

## [Video](https://www.youtube.com/watch?v=0qKNlrmhgNg)

[open-source MIT license](https://opensource.org/licenses/MIT).
