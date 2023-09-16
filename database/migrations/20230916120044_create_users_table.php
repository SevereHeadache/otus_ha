<?php

use Phpmig\Migration\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "CREATE TABLE `users` (
            `id` varchar(36),
            `firstName` varchar(60),
            `secondName` varchar(60),
            `age` int(3),
            `birthdate` timestamp,
            `biography` varchar(250),
            `city` varchar(60)
        )";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP TABLE `users`";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }
}
