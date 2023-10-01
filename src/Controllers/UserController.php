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


    public function get(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

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

    public function search(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

        $getParams = $request->paramsGet();
        $firstName = $getParams->get('first_name') ?? '';
        $secondName = $getParams->get('last_name') ?? '';
        $where = [];
        if ($firstName) {
            $where[] = ['first_name', 'LIKE', $firstName.'%'];
        }
        if ($secondName) {
            $where[] = ['second_name', 'LIKE', $secondName.'%'];
        }
        if(empty($where)) {
            throw new IncorectRequestException('Request must contains "first_name" or "second_name" query params', 400);
        }

        $userRepository = new UserRepository();
        try{
            $users = $userRepository->getAll($where);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }


        return $response->json($users);

    } 

    /**
     * @todo make auth middleware
     */
    protected function authenticate(Request $request)
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

        $userId = $token->userId;
        
        return $userId;
    }
}