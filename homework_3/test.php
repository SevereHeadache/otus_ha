<?php

use SevereHeadache\OtusHa\Repositories\Database\DB;

require __DIR__.'/../bootstrap.php';

$count = 0;
try {
    while (true) {
        if (DB::getConnection()->prepare('INSERT INTO test (col) VALUES (true);')->execute()) {
            ++$count;
        }
    }
} catch (PDOException) {
    echo ++$count.' inserted', PHP_EOL;
}


