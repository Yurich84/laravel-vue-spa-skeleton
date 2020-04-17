<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use \App\Models\Brand;

class CreateBrandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brands', function (Blueprint $table) {
            $table->bigIncrements(Brand::COLUMN_ID);
            $table->string(Brand::COLUMN_NAME);
            $table->text(Brand::COLUMN_DESCRIPTION);
            $table->smallInteger(Brand::COLUMN_GROUP);
            $table->boolean(Brand::COLUMN_SELECT)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brands');
    }
}
