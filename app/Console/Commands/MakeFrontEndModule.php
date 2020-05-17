<?php

namespace App\Console\Commands;

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Console\Output\ConsoleOutput;

class MakeFrontEndModule extends MakeModuleCommand
{
    /**
     * MakeFrontEndModule constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->output = new ConsoleOutput();
    }

    /**
     * @var string
     */
    private $module_path;

    /**
     * @param $module
     * @throws FileNotFoundException
     */
    protected function create($module) {
        $this->files = new Filesystem();
        $this->module = $module;
        $this->module_path = base_path('resources/js/modules/'.lcfirst($this->module));

        $this->createVueList();
        $this->createVueView();
        $this->createVueForm();

        $this->createStore();
        $this->createStoreTypes();
        $this->createStoreActions();

        $this->createRoutes();
        $this->createApi();

    }

    /**
     * Create a Vue component file for the module.
     *
     * @return void
     * @throws FileNotFoundException
     */
    private function createVueList()
    {
        $path = $this->module_path."/components/{$this->module}List.vue";

        if ($this->alreadyExists($path)) {
            $this->error('VueList Component already exists!');
        } else {
            $stub = $this->files->get(base_path('stubs/frontEnd/vue.list.stub'));

            $this->createFileWithStub($stub, $path);

            $this->info('VueList Component created successfully.');
        }
    }

    /**
     * Create a Vue component file for the module.
     *
     * @return void
     * @throws FileNotFoundException
     */
    private function createVueView()
    {
        $path = $this->module_path."/components/{$this->module}View.vue";

        if ($this->alreadyExists($path)) {
            $this->error('VueView Component already exists!');
        } else {
            $stub = $this->files->get(base_path('stubs/frontEnd/vue.view.stub'));

            $this->createFileWithStub($stub, $path);

            $this->info('VueView Component created successfully.');
        }
    }

    /**
     * Create a Vue component file for the module.
     *
     * @return void
     * @throws FileNotFoundException
     */
    private function createVueForm()
    {
        $path = $this->module_path."/components/{$this->module}Form.vue";

        if ($this->alreadyExists($path)) {
            $this->error('VueForm Component already exists!');
        } else {
            $stub = $this->files->get(base_path('stubs/frontEnd/vue.form.stub'));

            $this->createFileWithStub($stub, $path);

            $this->info('VueForm Component created successfully.');
        }
    }

    /**
     * Create a Vue component file for the module.
     *
     * @return void
     * @throws FileNotFoundException
     */
    private function createStore()
    {
        $path = $this->module_path."/store/store.js";

        if ($this->alreadyExists($path)) {
            $this->error('Store already exists!');
        } else {
            $stub = $this->files->get(base_path('stubs/frontEnd/store.stub'));

            $this->createFileWithStub($stub, $path);

            $this->info('Store created successfully.');
        }
    }

    /**
     * Create a Vue component file for the module.
     *
     * @return void
     * @throws FileNotFoundException
     */
    private function createStoreTypes()
    {
        $path = $this->module_path."/store/types.js";

        if ($this->alreadyExists($path)) {
            $this->error('Types already exists!');
        } else {
            $stub = $this->files->get(base_path('stubs/frontEnd/store.types.stub'));

            $this->createFileWithStub($stub, $path);

            $this->info('Types created successfully.');
        }
    }

    /**
     * Create a Vue component file for the module.
     *
     * @return void
     * @throws FileNotFoundException
     */
    private function createStoreActions()
    {
        $path = $this->module_path."/store/actions.js";

        if ($this->alreadyExists($path)) {
            $this->error('Actions already exists!');
        } else {
            $stub = $this->files->get(base_path('stubs/frontEnd/store.actions.stub'));

            $this->createFileWithStub($stub, $path);

            $this->info('Actions created successfully.');
        }
    }

    /**
     * Create a Vue component file for the module.
     *
     * @return void
     * @throws FileNotFoundException
     */
    private function createRoutes()
    {
        $path = $this->module_path."/routes.js";

        if ($this->alreadyExists($path)) {
            $this->error('Vue Routes already exists!');
        } else {
            $stub = $this->files->get(base_path('stubs/frontEnd/routes.stub'));

            $this->createFileWithStub($stub, $path);

            $this->info('Vue Routes created successfully.');
        }
    }

    /**
     * Create a Vue component file for the module.
     *
     * @return void
     * @throws FileNotFoundException
     */
    private function createApi()
    {
        $path = $this->module_path."/api/index.js";

        if ($this->alreadyExists($path)) {
            $this->error('Api file already exists!');
        } else {
            $stub = $this->files->get(base_path('stubs/frontEnd/api.stub'));

            $this->createFileWithStub($stub, $path);

            $this->info('Api file created successfully.');
        }
    }

}
