<?php

namespace SevereHeadache\OtusHa\Controllers\Exceptions;

class AuthenticationException extends JsonException
{
    public function __construct(string $message = '', int $code = 0)
    {
        parent::__construct('You are not authenticate'. ($message ? ': '.$message : ''), $code ?: 401);
        
    }
}