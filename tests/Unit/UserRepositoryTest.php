<?php


namespace Tests\Unit;

use Carbon\Carbon;
use DateTime;
use Ramsey\Uuid\Uuid;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Database\UserRepository;
use Tests\Support\Helper\Traits\DatabaseTransactions;
use Tests\Support\UnitTester;

class UserRepositoryTest extends \Codeception\Test\Unit
{
    use DatabaseTransactions;

    protected UnitTester $tester;

    /**
     * @dataProvider createUserProvider
     */
    public function testStore($user)
    {
        $sut = new UserRepository();
        $created = $sut->store($user);

        $this->assertNotEmpty($created);
        if ($user->id) {
            $this->assertEqualsCanonicalizing($user, $created);
        }

        $user->firstName = 'test';
        $updated = $sut->store($user);

        $this->assertEqualsCanonicalizing($user, $updated);

    }

    public function createUserProvider()
    {
        $faker = \Faker\Factory::create();
        // $gender = $faker->gender();
        $gender = $faker->randomElement(['male', 'female']);
        $bd = $faker->dateTimeBetween('-30 years', '-10 years');
        return [
            'Create user without defined id' => [
                (function () use ($gender, $bd, $faker) {
                    $user = new User();
                    $user->firstName = $faker->firstName($gender);
                    $user->secondName = $faker->lastName($gender);
                    $user->password = password_hash('password',  PASSWORD_BCRYPT);
                    $user->age = (new DateTime())->format('Y')  - $bd->format('Y');
                    $user->birthdate = new Carbon($bd);
                    $user->biography = $faker->text();
                    $user->city = $faker->city();

                    return $user;
                })()
            ],
            'Create user with defined id' => [
                (function () use ($gender, $bd, $faker) {
                    $user = new User();
                    $user->id = Uuid::uuid4()->toString();
                    $user->firstName = $faker->firstName($gender);
                    $user->secondName = $faker->lastName($gender);
                    $user->password = password_hash('password',  PASSWORD_BCRYPT);
                    $user->age = (new DateTime())->format('Y')  - $bd->format('Y');
                    $user->birthdate = new Carbon($bd);
                    $user->biography = $faker->text();
                    $user->city = $faker->city();

                    return $user;
                })()
            ]
        ];
    }
}
