<?php

namespace SevereHeadache\OtusHa\Models;

class Friend extends Model
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

    public function getIdField(): string
    {
        return 'id';
    }
}