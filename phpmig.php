<?php

require __DIR__.'/bootstrap.php';

$container = new ArrayObject();
$db_config = require __DIR__.'/config/database.php';

$container['db'] = (function () use ($db_config) {
    $dbh = SevereHeadache\OtusHa\Repositories\Database\DB::getConnection();
    return $dbh;
})();

$container['phpmig.adapter'] = (function () use ($container) {
    return new \Phpmig\Adapter\PDO\Sql($container['db'], 'migrations');
})();

$container['phpmig.migrations_path'] = __DIR__ . DIRECTORY_SEPARATOR . 'database'. DIRECTORY_SEPARATOR . 'migrations';

return $container;