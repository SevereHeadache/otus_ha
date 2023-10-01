<?php

use Phpmig\Migration\Migration;

class AppendFirstNameAndSecondNameIndexToUsersTable extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $container = $this->getContainer(); 
        $createExtension = 'CREATE EXTENSION IF NOT EXISTS pg_trgm;';
        $container['db']->query($createExtension);

        $sql = "CREATE INDEX first_name_second_name ON users USING GIN(first_name gin_trgm_ops, second_name gin_trgm_ops);";
        $container['db']->query($sql);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP INDEX first_name_second_name;";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }
}
