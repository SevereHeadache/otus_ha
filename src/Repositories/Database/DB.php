<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use PDO;

class DB
{
    public static function getConnection(bool $slave = false): PDO
    {
        static $connection;
        static $slaveConnection;

        $slave = $slave && env('DB_REPLICATION_ENABLED', false);
        $connectionVar = $slave ? 'slaveConnection' : 'connection';

        if (!isset($$connectionVar)) {
            $db_config = require PROJECT_PATH.'/config/database.php';
            $$connectionVar = new PDO(sprintf(
                'pgsql:dbname=%s;host=%s;password=%s;',
                $db_config['dbname'],
                $db_config[$slave ? 'hostslave' : 'host'],
                $db_config['password']
            ), $db_config['usermane'], $db_config['password']);
            $$connectionVar->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        return $$connectionVar;
    }
}