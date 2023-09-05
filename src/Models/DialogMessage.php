<?php

namespace SevereHeadache\OtusHa\Models;

class DialogMessage
{
    public User $from;
    public User $to;
    public string $text;
}