<?php

use Phpmig\Migration\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "CREATE TABLE users (
            id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
            password varchar(100), 
            first_name varchar(60),
            second_name varchar(60),
            age int,
            birthdate timestamp,
            biography varchar(250),
            city varchar(60)
        )";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP TABLE users";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }
}
