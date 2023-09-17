<?php


namespace Tests\Api;

use Carbon\Carbon;
use DateTime;
use Ramsey\Uuid\Uuid;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Database\TokenRepository;
use SevereHeadache\OtusHa\Repositories\Database\UserRepository;
use Tests\Support\ApiTester;
use Tests\Support\Helper\Traits\DatabaseTransactions;

class AuthTestCest
{
    use DatabaseTransactions;

    public function _before(ApiTester $I)
    {
    }

    protected function createUser()
    {
        $faker = \Faker\Factory::create();
        $gender = $faker->randomElement(['male', 'female']);
        $bd = $faker->dateTimeBetween('-30 years', '-10 years');
        $user = new User();
        $user->id = Uuid::uuid4()->toString();
        $user->firstName = $faker->firstName($gender);
        $user->secondName = $faker->lastName($gender);
        $user->password = password_hash('password',  PASSWORD_BCRYPT);
        $user->age = (new DateTime())->format('Y')  - $bd->format('Y');
        $user->birthdate = new Carbon($bd);
        $user->biography = $faker->text();
        $user->city = $faker->city();

        $userRepository = new UserRepository();
        $user = $userRepository->store($user);

        return $user;
    }

    public function try_to_register(ApiTester $I)
    {
        $faker = \Faker\Factory::create();
        $gender = $faker->randomElement(['male', 'female']);
        $bd = $faker->dateTimeBetween('-30 years', '-10 years');
        $I->sendPost('/register', [
            'firstName' =>  $faker->firstName($gender),
            'secondName' =>  $faker->lastName($gender),
            'password' =>  'password',
            'age' =>  (new DateTime())->format('Y')  - $bd->format('Y'),
            'birthdate' =>  (new Carbon($bd))->format('Y-m-d H:i:sP'),
            'biography' =>  $faker->text(),
            'city' =>  $faker->city(),
          ]);
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContains('user_id');
    }

    public function try_to_login_success(ApiTester $I)
    {
        $user = $this->createUser();

        $I->sendPost('/login', [
            'id' => $user->id,
            'password' =>  'password',
          ]);
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContains('token');
    }

    public function try_to_login_success_with_exists_token(ApiTester $I)
    {
        $user = $this->createUser();
        $tokenRepository = new TokenRepository();
        $tokenRepository->createForUser($user);
        $I->sendPost('/login', [
            'id' => $user->id,
            'password' =>  'password',
          ]);
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContains('token');
    }

    public function try_to_login_success_with_exists_expired_token(ApiTester $I)
    {
        $user = $this->createUser();
        $tokenRepository = new TokenRepository();
        $token = $tokenRepository->createForUser($user);
        $token->expiriedAt = Carbon::now()->addDays(-30);
        $tokenRepository->store($token);

        $I->sendPost('/login', [
            'id' => $user->id,
            'password' =>  'password',
          ]);
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContains('token');
    }

    public function try_to_login_without_user_id(ApiTester $I)
    {
        $I->sendPost('/login', [
            'password' =>  'password',
          ]);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(['message' => 'Incorrect request: Request must contain id']);
    }

    public function try_to_login_without_password(ApiTester $I)
    {
        $I->sendPost('/login', [
            'id' =>  Uuid::uuid4()->toString(),
          ]);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(['message' => 'Incorrect request: Request must contain password']);
    }

    public function try_to_login_with_undefined_user(ApiTester $I)
    {
        $I->sendPost('/login', [
            'id' =>  Uuid::uuid4()->toString(),
            'password' => 'password',
          ]);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(['message' => 'Incorrect user_id or password']);
    }

    public function try_to_login_with_incorrect_password(ApiTester $I)
    {
        $user = $this->createUser();
        $I->sendPost('/login', [
            'id' =>  $user->id,
            'password' => '1234456656',
          ]);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(['message' => 'Incorrect user_id or password']);
    }
}
