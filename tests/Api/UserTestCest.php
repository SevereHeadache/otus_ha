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

class UserTestCest
{
    use DatabaseTransactions;

    public function _before(ApiTester $I)
    {
        $I->haveHttpHeader('Content-Type', 'application/json');
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

    public function try_to_get_user(ApiTester $I)
    {
        $user = $this->createUser();
        $tokenRepository = new TokenRepository();
        $token = $tokenRepository->createForUser($user);

        $I->haveHttpHeader('AUTH_TOKEN', $token->token);
        $I->sendGet('/user/get/'.$user->id);
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseMatchesJsonType([
            'id' => 'string',
            'firstName' => 'string',
            'secondName' => 'string',
            'password' => 'string',
            'age' => 'integer',
            'birthdate' => 'string',
            'biography' => 'string',
            'city' => 'string',
        ]);
    }

    public function try_to_get_user_without_auth_header(ApiTester $I)
    {
        $user = $this->createUser();

        $I->sendGet('/user/get/'.$user->id);
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(['message' => 'You are not authenticate: Not specified AUTH_TOKEN header']);
    }

    public function try_to_get_user_with_incorect_auth_header(ApiTester $I)
    {
        $user = $this->createUser();

        $I->haveHttpHeader('AUTH_TOKEN', Uuid::uuid4()->toString());
        $I->sendGet('/user/get/'.$user->id);
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(['message' => 'You are not authenticate']);
    }

    public function try_to_get_undefined_user(ApiTester $I)
    {
        $user = $this->createUser();
        $tokenRepository = new TokenRepository();
        $token = $tokenRepository->createForUser($user);

        $I->haveHttpHeader('AUTH_TOKEN', $token->token);
        $I->sendGet('/user/get/'.($uuid = Uuid::uuid4()->toString()));
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(['message' => 'Incorrect request: Failed to find user with id: '.$uuid]);
    }

    public function try_to_search_user(ApiTester $I)
    {
        $user = $this->createUser();
        $tokenRepository = new TokenRepository();
        $token = $tokenRepository->createForUser($user);
        $I->haveHttpHeader('AUTH_TOKEN', $token->token);
        $I->sendGet(sprintf('/user/search?first_name=%s&last_name=%s', substr($user->firstName, 0, 3), substr($user->secondName, 0,3)));
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson([
            'id' => $user->id,
            'firstName' => $user->firstName,
            'secondName' => $user->secondName,
            'age' => $user->age,
            'birthdate' => $user->birthdate,
            'biography' => $user->biography,
            'city' => $user->city,
        ]);
    }

    public function try_to_search_user_withou_query_params(ApiTester $I)
    {
        $user = $this->createUser();
        $tokenRepository = new TokenRepository();
        $token = $tokenRepository->createForUser($user);
        $I->haveHttpHeader('AUTH_TOKEN', $token->token);
        $I->sendGet('/user/search');
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(['message' => 'Incorrect request: Request must contains "first_name" or "second_name" query params']);
    }
}
