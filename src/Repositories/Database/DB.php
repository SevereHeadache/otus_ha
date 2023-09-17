<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use PDO;

class DB
{
    public static function getConnection(): PDO
    {
        static $connection;

        if (!isset($connection)){
            $db_config = require PROJECT_PATH.'/config/database.php';
            $connection = new PDO(sprintf(
                'pgsql:dbname=%s;host=%s;password=%s;',
                $db_config['dbname'],
                $db_config['host'],
                $db_config['password']
            ), $db_config['usermane'], $db_config['password']);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        return $connection;
    }
}