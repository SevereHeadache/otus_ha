<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use PDO;
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

    /**
     * @todo make queryBuider
     */
    public function getAll(array $where): array 
    {
        $result = [];

        $query = sprintf('SELECT * FROM %s', static::$tableName);
        $params = [];
        foreach($where as $i => $whereItem) {
            if ($i == 0) {
                $query .= ' WHERE ';
            } else {
                $query .= ' AND ';
            }
            list($column, $operator, $value) = $whereItem;
            $paramName = ':'.$column;
            $query .= sprintf('%s %s %s', $column, $operator, $paramName);
            $params[$paramName] = $value;
        }
        $query .= ' ORDER BY id ASC';
        $request = $this->getConnection(slave: true)->prepare($query);
        $request->execute($params);
        $friends = $request->fetchAll(PDO::FETCH_CLASS, Friend::class); 
        $result = array_map([$this, 'parseValues'], $friends);

        return $result;
    }
}