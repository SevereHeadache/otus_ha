<?php

require __DIR__.'/../bootstrap.php';

$faker = \Faker\Factory::create();
$gender = $faker->randomElement(['male', 'female']);
$bd = $faker->dateTimeBetween('-30 years', '-10 years');
$user = new SevereHeadache\OtusHa\Models\User();
$user->id = '677373dc-1566-4717-825a-d0bf0af5efe4';
$user->firstName =  'postman';
$user->secondName = 'postman';
$user->password = password_hash('postman',  PASSWORD_BCRYPT);
$user->age = (new DateTime())->format('Y')  - $bd->format('Y');
$user->birthdate = new Carbon\Carbon($bd);
$user->biography = $faker->text();
$user->city = $faker->city();


$userRepository = new SevereHeadache\OtusHa\Repositories\Database\UserRepository();
$user = $userRepository->store($user);

$token = new SevereHeadache\OtusHa\Models\Token();
$token->expiriedAt = Carbon\Carbon::now()->addYears(10);
$token->token = $user->id;
$token->userId = $user->id;

$tokenRepository = new SevereHeadache\OtusHa\Repositories\Database\TokenRepository();
$token = $tokenRepository->store($token);

$a = 'sdfgsdfg';