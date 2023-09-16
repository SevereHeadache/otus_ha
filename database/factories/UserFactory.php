<?php

namespace Database\Factories;

use App\Models\User;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Rfc4122\UuidV4;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $gender = $this->faker->randomElement(['male', 'female']);
        return [
            'id' => UuidV4::uuid4()->toString(),
            'first_name' => $this->faker->firstName($gender),
            'second_name' => $this->faker->lastName($gender),
            'password' => Hash::make('password'),
            'birthdate' => $bd = $this->faker->dateTimeBetween('-30 years', '-10 years'),
            'age' => (new DateTime())->format('Y')  - $bd->format('Y'),
            'biography' => $this->faker->text(),
            'city' => $this->faker->city(),
        ];
    }
}
