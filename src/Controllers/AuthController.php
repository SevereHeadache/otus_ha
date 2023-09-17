<?php

namespace SevereHeadache\OtusHa\Controllers;

use Carbon\Carbon;
use Klein\Response;
use Klein\Request;
use SevereHeadache\OtusHa\Controllers\Exceptions\IncorectRequestException;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Database\UserRepository;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

class AuthController
{
    public function login(Request $request, Response $response)
    {
        $attributes = $request->paramsPost();
        if (empty($attributes['id'])){
            throw new IncorectRequestException('Request must contain id', 400);
        }
        if (empty($attributes['password'])){
            throw new IncorectRequestException('Request must contain password', 400);
        }

        $repository = new UserRepository();
        try {
            $user = $repository->get($attributes['id']);
        } catch (RepositoryException $e){
            return $response->json([
                'code' => 404,
                'message' => 'Incorrect user_id or password',
            ]);
        }

        if (!password_verify($attributes['password'], $user->password)) {
            return $response->json([
                'code' => 404,
                'message' => 'Incorrect user_id or password',
            ]);
        }


        return $response->json([
            'token' => $user->id,
        ]);
    }

    public function register(Request $request, Response $response)
    {
        $attributes = $request->paramsPost();
        if (empty($attributes)){
            throw new IncorectRequestException('Request must contain user attributes', 400);
        }

        $user = new User();
        foreach($attributes as $name => $value) {
             if (property_exists($user, $name)) {
                if ($name == 'password') {
                    $user->$name = password_hash($value, PASSWORD_BCRYPT);
                } elseif ($name == 'birthdate') {
                    $user->$name = Carbon::parse($value);
                } else {
                    $user->$name = $value;
                }
            } else {
                throw new IncorectRequestException('Request must contain user attributes', 400);
            }
        }

        $repository = new UserRepository();
        $user = $repository->store($user);

        return $response->json((object) ['user_id' => $user->id]); 
    }
}