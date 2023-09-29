<?php

namespace SevereHeadache\OtusHa\Controllers;

use Carbon\Carbon;
use Klein\Response;
use Klein\Request;
use SevereHeadache\OtusHa\Controllers\Exceptions\AuthenticationException;
use SevereHeadache\OtusHa\Controllers\Exceptions\IncorectRequestException;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Database\TokenRepository;
use SevereHeadache\OtusHa\Repositories\Database\UserRepository;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

class UserController
{
    /**
     * @todo make auth middleware
     */
    public function get(Request $request, Response $response)
    {
        if(!($token = $request->headers()['Auth-Token'])){
            throw new AuthenticationException('Not specified AUTH_TOKEN header');
        }

        $tokenRepository = new TokenRepository();
        try{
            $token = $tokenRepository->get($token);
        } catch(RepositoryException $e) {
            throw new AuthenticationException();
        }
        
        if (!($id = $request->paramsNamed()['id'])) {
            throw new IncorectRequestException('Not specified user id', 400);
        }

        $userRepository = new UserRepository();
        try{
            $user = $userRepository->get($id);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }


        return $response->json($user);

    }
}