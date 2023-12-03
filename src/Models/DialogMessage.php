<?php

namespace SevereHeadache\OtusHa\Models;

class DialogMessage extends Model
{
    public string $id;
    public User $from;
    public User $to;
    public string $text;

    public function getIdField(): string
    {
        return 'id';
    }
}