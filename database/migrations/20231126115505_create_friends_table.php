<?php

use Phpmig\Migration\Migration;

class CreateFriendsTable extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "CREATE TABLE friends (
            id serial PRIMARY KEY,
            user_id uuid references users(id),
            friend_id uuid references users(id)
        )";
        $container = $this->getContainer();
        $container['db']->query($sql);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP TABLE friends";
        $container = $this->getContainer();
        $container['db']->query($sql);
    }
}
