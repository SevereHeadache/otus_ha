<?php

namespace SevereHeadache\OtusHa\Controllers;

use Klein\Response;
use Klein\Request;

class LoginController
{
    public function login(Request $request, Response $response)
    {
        return $response->json((object) ['message' => 'ok']);
    }
}