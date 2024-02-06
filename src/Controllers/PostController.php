<?php

namespace SevereHeadache\OtusHa\Controllers;

use Carbon\Carbon;
use Klein\Response;
use Klein\Request;
use Ramsey\Uuid\Rfc4122\UuidV4;
use SevereHeadache\OtusHa\Components\RedisClient;
use SevereHeadache\OtusHa\Controllers\Exceptions\AuthenticationException;
use SevereHeadache\OtusHa\Controllers\Exceptions\IncorectRequestException;
use SevereHeadache\OtusHa\Models\Friend;
use SevereHeadache\OtusHa\Models\Post;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Database\FriendRepository;
use SevereHeadache\OtusHa\Repositories\Database\PostRepository;
use SevereHeadache\OtusHa\Repositories\Database\TokenRepository;
use SevereHeadache\OtusHa\Repositories\Database\UserRepository;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

class PostController
{
    public function create(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

          $attributes = $request->paramsPost();
        if ($attributes->isEmpty()) {
            $attributes = json_decode($request->body(), true) ?: [];
        }
        if (empty($attributes['text'])){
            throw new IncorectRequestException('Request must contain text', 400);
        }

        $post = new Post();
        $post->id = UuidV4::uuid4();
        $post->text = $attributes['text'];
        $post->authorUserId = $userId;

        $repository = new PostRepository();
        try{
            $repository->store($post);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }
        

        return $response->json((object) ['id' => $post->id]); ;
    } 

    public function update(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

        $attributes = $request->paramsPost();
        if ($attributes->isEmpty()) {
            $attributes = json_decode($request->body(), true) ?: [];
        }
        if (empty($attributes['text'])){
            throw new IncorectRequestException('Request must contain text', 400);
        }
        if (empty($attributes['id'])){
            throw new IncorectRequestException('Request must contain id', 400);
        }

        $repository = new PostRepository();
        try{
            $post = $repository->get($attributes['id']);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }
        
        $post->text = $attributes['text'];
        try{
            $repository->store($post);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }

        return null;
    } 

    public function delete(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

        if (!($id = $request->paramsNamed()['id'])) {
            throw new IncorectRequestException('Not specified post id', 400);
        }

        $repository = new PostRepository();
        try{
            $post = $repository->get($id);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }

        try{
            $repository->delete($post);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }

        return null;
    }
    
    public function get(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

        if (!($id = $request->paramsNamed()['id'])) {
            throw new IncorectRequestException('Not specified post id', 400);
        }

        $repository = new PostRepository();
        try{
            $post = $repository->get($id);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }

        return $response->json([
            'id' => $post->id,
            'text' => $post->text,
            'author_user_id' => $post->authorUserId,
        ]);
    }

    public function feed(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);
        $noCache = $request->param('noCache', false);

        $redis = new RedisClient();
        $key = "user-feed-$userId";
        $feed = $redis->get($key);
        if ($noCache || !$feed) {
            $repository = new PostRepository();
            $feed = $repository->getFeed($userId);
            $redis->set($key, json_encode($feed), ['EX' => 1800]);
        } else {
            $feed = json_decode($feed, true);
        }

        return $response->json($feed);
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