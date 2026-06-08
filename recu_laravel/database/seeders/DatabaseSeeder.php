<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Olga',
            'email' => 'a@a.a',
            'password' => 'a',
        ]);

        User::factory()->create([
            'name' => 'Pau',
            'email' => 'b@b.b',
            'password' => 'a',
        ]);
        User::factory()->create([
            'name' => 'test',
            'email' => 'test@test.test',
            'password' => 'a',
        ]);

        $this->call([
            ProductosSeeder::class,
        ]);
    }
}
