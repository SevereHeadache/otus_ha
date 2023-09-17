<?php

namespace SevereHeadache\OtusHa\Helpers;

use Throwable;

class Logger
{
    public static function logError(Throwable $th)
    {
        file_put_contents(PROJECT_PATH.'/storage/logs/app.log', (string) $th, FILE_APPEND);
    }
}