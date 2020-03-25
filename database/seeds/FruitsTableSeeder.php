<?php

use App\Fruit;
use Illuminate\Database\Seeder;

class FruitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Fruit::insert([
            ['name' => 'Apple'],
            ['name' => 'Pineapple'],
            ['name' => 'Orange'],
            ['name' => 'Durian'],
            ['name' => 'Watermelon']
        ]);
    }
}
