<?php

namespace SevereHeadache\OtusHa\Models;

class Token extends Model
{
    public $token;
    public $userId;
    public $expiriedAt;

    public function getIdField(): string
    {
        return 'token';
    }
}