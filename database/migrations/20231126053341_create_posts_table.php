<?php

use Phpmig\Migration\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "CREATE TABLE posts (
                id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
                text text, 
                author_user_id uuid
            )";
        $container = $this->getContainer();
        $container['db']->query($sql);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP TABLE posts";
        $container = $this->getContainer();
        $container['db']->query($sql);
    }
}
