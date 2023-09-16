<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::factory(10)->create();

        
        foreach($users as $user){
            if(random_int(0,10) > 5){
                foreach(range(1, random_int(1, 4)) as $i) {
                    $post = Post::factory()->make();
                    $post->author_user_id = $user->id;
                    $a = $user->firstName;
                    $post->save();
                }
            }
        }
    }
}
