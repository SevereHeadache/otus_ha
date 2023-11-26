<?php

namespace SevereHeadache\OtusHa\Models;

class Friend
{
    public ?int $id;
    public ?string $userId;
    public ?string $friendId;

    public function __construct()
    {
        $this->id = null;
        $this->userId = null;
        $this->friendId = null;
    }
}