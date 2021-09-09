<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        factory(App\Models\Article::class, 30)->create();

        $articles_number = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eight', 'Nine', 'Tenth'];
        for($i = 0; $i < count($articles_number); $i++) {
            DB::table('articles')->insert([
                'user_id' => User::get()->first()->id,
                'title' => $articles_number[$i] . ' Article',
                'body' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nisi aliquet tortor laoreet dictum. Proin sed luctus leo, sit amet sollicitudin massa. Praesent vulputate, ipsum vitae vulputate condimentum, ligula sapien vestibulum ipsum, non egestas lacus augue dictum nisl. Nullam dignissim quis dolor sed iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis libero sed risus varius interdum. Vivamus sed molestie mi. Suspendisse vitae augue luctus, malesuada justo a, ultricies purus. Donec vitae nulla et elit imperdiet dapibus.',
                'created_at' => '2021-09-09',
                'updated_at' => '2021-09-09',
            ]);
        }
    }
}
