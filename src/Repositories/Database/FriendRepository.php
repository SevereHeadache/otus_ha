<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use Carbon\Carbon;
use LDAP\Result;
use PDO;
use SevereHeadache\OtusHa\Models\Friend;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

/**
 * Class for work with users repository.
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
        if($this->isExists($friend)){
            return $this->update($friend);
        } else {
            return $this->create($friend);
        }
    }

    public function get(string $id): Friend
    {
        $request = $this->getById($id, slave: true);
        $friend = $request->fetchObject(Friend::class);
        if (!($friend instanceof Friend)) {
            throw new RepositoryException('Failed to find friend with id: '. $id);
        }

        return $this->parseValues($friend);
    }

    public function find(array $where): ?Friend
    {
        $query = sprintf('SELECT * FROM %s', self::$tableName);
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
        $request = $this->getConnection(slave: true)->prepare($query);
        $request->execute($params);
        $friend = $request->fetchObject(Friend::class); 
        $result = $friend ? $this->parseValues($friend) : null;

        return $result;
    }

    public function delete(Friend $friend)
    {
        $request = $this->getConnection()->prepare(sprintf('DELETE FROM %s WHERE %s = :id;', static::$tableName, static::$idField));
        if (!$request->execute([':id' => $friend->id])) {
            throw new RepositoryException("Failed to delete friend with attributes: \n". json_encode($friend, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }
    }



    /**
     * @todo make queryBuider
     */
    public function getAll(array $where): array 
    {
        $result = [];

        $query = sprintf('SELECT * FROM %s', self::$tableName);
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

    protected function parseValues(Friend $friends)
    {
        $friends = $this->castObjectProperties($friends);

        return $friends;
    }

    protected function isExists(Friend $friends): bool
    {
        return $this->isExistsIntoDb($friends);
    }

    protected function update(Friend $friend)
    {
        $currentUserValues = $this->get($friend->id);
        $updateParams = $this->makeUpdateQueryParams($friend, $currentUserValues);
        $params = $updateParams['params'];
        $filelds = $updateParams['filelds'];
        if (empty($params)) {
            return $friend;
        }
        $params[':id'] = $friend->id;
        if ($this->getConnection()->prepare("UPDATE ".self::$tableName." SET  $filelds WHERE id = :id;")->execute($params)) {
            return $this->get($friend->id);
        } else {
            throw new RepositoryException("Failed to update friend with attributes: \n". json_encode($friend, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }
        return $friend;
    }

    protected function create(Friend $friend)
    {
        $insertParams = $this->makeInserQueryParams($friend);
        $filelds = $insertParams['filelds'];
        $values = $insertParams['values'];
        $params = $insertParams['params'];

        if ($this->getConnection()->prepare("INSERT INTO ".self::$tableName." ($filelds) VALUES ($values);")->execute($params)) {
            $id = $this->getConnection()->lastInsertId();
            return $this->get($id);
        } else {
            throw new RepositoryException("Failed to create friend with attributes: \n". json_encode($friend, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }

        return $friend;
    }
}