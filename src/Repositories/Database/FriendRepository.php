<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use SevereHeadache\OtusHa\Models\Friend;

/**
 * Class for work with friend repository.
 * 
 * @todo make interface repository
 */
class FriendRepository extends AbstractRepository
{
    protected static $tableName = 'friends';
    protected static $idField = 'id';
    protected static $class = Friend::class;

    public function store(Friend $friend): Friend
    {
        return $this->storeModel($friend);
    }

    public function get(string $id): Friend
    {
        return parent::get($id);
    }

    public function find(array $where): ?Friend
    {
        return parent::find($where);
    }

    public function delete(Friend $friend)
    {
        return parent::deleteModel($friend);
    }

    protected function isExists(Friend $friend): bool
    {
        return $this->isExistsIntoDb($friend);
    }

    protected function update(Friend $friend): Friend
    {
        return $this->updateModel($friend);
    }
}