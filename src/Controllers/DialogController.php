<?php

namespace SevereHeadache\OtusHa\Controllers;

use GuzzleHttp\Client;
use Klein\Response;
use Klein\Request;
use SevereHeadache\OtusHa\Controllers\Exceptions\AuthenticationException;
use SevereHeadache\OtusHa\Controllers\Exceptions\IncorectRequestException;
use SevereHeadache\OtusHa\Repositories\Database\TokenRepository;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

class DialogController
{
    public function send(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

        if (!($toUserId = $request->paramsNamed()['user_id'])) {
            throw new IncorectRequestException('Not specified user id', 400);
        }
        $attributes = $request->paramsPost();
        if ($attributes->isEmpty()) {
            $attributes = json_decode($request->body(), true) ?: [];
        }
        if (empty($attributes['text'])){
            throw new IncorectRequestException('Request must contain text', 400);
        }

        $client = new Client(['base_uri' => env('DIALOGS_URI')]);
        $result = $client->request('POST', 'send', [
            'form_params' => [
                'from' => $userId,
                'to' => $toUserId,
                'text' => $attributes['text'],
            ],
        ]);
        $data = json_decode($result->getBody()->getContents(), true);

        return $response->json($data);
    }

    public function list(Request $request, Response $response)
    {
        $userId = $this->authenticate($request);

        if (!($toUserId = $request->paramsNamed()['user_id'])) {
            throw new IncorectRequestException('Not specified user id', 400);
        }

        $client = new Client(['base_uri' => env('DIALOGS_URI')]);
        $result = $client->request('GET', "list/$userId/$toUserId");
        $data = json_decode($result->getBody()->getContents(), true);

        return $response->json($data);
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