<?php

namespace Tests\Support\Helper\Traits;

use Exception;
use SevereHeadache\OtusHa\Repositories\Database\DB;

trait DatabaseTransactions
{
    protected $connection;

    protected function setUp(): void
    {
        $this->connection = DB::getConnection();
        if (!$this->connection->beginTransaction()) {
            throw new Exception('Failed to begin transaction');
        }

        parent::setUp();
    }

    protected function tearDown(): void
    {
        $this->connection->rollback();

        parent::tearDown();
    }
}