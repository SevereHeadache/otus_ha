<?php

namespace Database\Factories;

use App\Models\User;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        $gender = $this->faker->randomElemet(['male', 'female']);
        return [
            'firstName' => $this->faker->firstName($gender),
            'secondName' => $this->faker->lastName($gender),
            'birthdate' => $bd = $this->faker->dateTimeBetween('-30 years', '-10 years'),
            'age' => (new DateTime())->format('Y')  - $bd->format('Y'),
            'biography' => $this->faker->text(),
            'city' => $this->faker->city(),
        ];
    }
}
