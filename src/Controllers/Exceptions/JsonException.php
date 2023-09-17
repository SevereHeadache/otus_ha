<?php

namespace SevereHeadache\OtusHa\Controllers\Exceptions;

class JsonException extends \Exception
{
    public function toArray()
    {
        return [
            'code' => $this->code,
            'message' => $this->message,
        ];
    }
}