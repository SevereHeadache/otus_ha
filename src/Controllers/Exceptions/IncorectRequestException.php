<?php

namespace SevereHeadache\OtusHa\Controllers\Exceptions;

class IncorectRequestException extends JsonException
{
    public function __construct(string $message = '', int $code = 0)
    {
        parent::__construct('Incorrect request: '. $message, $code);
        
    }
}