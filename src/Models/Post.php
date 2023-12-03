<?php

namespace SevereHeadache\OtusHa\Models;

class Post extends Model
{
    public string $id;
    public string $text;
    public string $authorUserId;

    public function getIdField(): string
    {
        return 'id';
    }
}