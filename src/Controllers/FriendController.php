<?php

namespace SevereHeadache\OtusHa\Controllers;

use Carbon\Carbon;
use Klein\Response;
use Klein\Request;
use SevereHeadache\OtusHa\Controllers\Exceptions\AuthenticationException;
use SevereHeadache\OtusHa\Controllers\Exceptions\IncorectRequestException;
use SevereHeadache\OtusHa\Models\Friend;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Database\FriendRepository;
use SevereHeadache\OtusHa\Repositories\Database\TokenRepository;
use SevereHeadache\OtusHa\Repositories\Database\UserRepository;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

class FriendController
{
    public function set(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

        if (!($id = $request->paramsNamed()['user_id'])) {
            throw new IncorectRequestException('Not specified user id', 400);
        }

        $user = $this->findUser($userId);
        $friendUser = $this->findUser($id);

        $friend = new Friend();
        $friend->userId = $user->id;
        $friend->friendId = $friendUser->id;

        $friendRepository = new FriendRepository();
        try{
            $friendRepository->store($friend);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }
        

        return null;
    } 

    public function delete(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

        if (!($id = $request->paramsNamed()['user_id'])) {
            throw new IncorectRequestException('Not specified user id', 400);
        }

        $user = $this->findUser($userId);
        $friendUser = $this->findUser($id);

        

        $friendRepository = new FriendRepository();
        try{
            $friend = $friendRepository->find([
                ['user_id', '=', $user->id],
                ['friend_id', '=', $friendUser->id],
            ]);
            $friendRepository->delete($friend);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }
        


        return null;
    } 

    protected function findUser($id)
    {
        $userRepository = new UserRepository();
        try{
           return $userRepository->get($id);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }
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