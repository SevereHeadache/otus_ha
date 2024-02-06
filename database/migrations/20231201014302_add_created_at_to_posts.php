<?php

use Phpmig\Migration\Migration;

class AddCreatedAtToPosts extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "ALTER TABLE posts ADD COLUMN created_at timestamp NOT NULL DEFAULT NOW()";
        $container = $this->getContainer();
        $container['db']->query($sql);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "ALTER TABLE posts DROP COLUMN created_at";
        $container = $this->getContainer();
        $container['db']->query($sql);
    }
}
