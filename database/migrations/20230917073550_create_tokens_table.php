<?php

use Phpmig\Migration\Migration;

class CreateTokensTable extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "CREATE TABLE tokens (
            token uuid DEFAULT gen_random_uuid() PRIMARY KEY,
            user_id uuid,
            expiried_at timestamp
        )";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP TABLE tokens";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }
}
