<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Zoran',
            'email' => 'zoran@yahoo.com',
            'email_verified_at' => '2021-09-09 08:38:55',
            'remember_token' => 'TxF177ylTL',
            'created_at' => '2021-09-09 08:38:55',
            'updated_at' => '2021-09-09 08:38:55',
            'password' => bcrypt('zoranzoran'),
        ]);
    }
}
