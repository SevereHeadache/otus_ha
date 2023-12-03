<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use Carbon\Carbon;
use PDO;
use PDOStatement;
use SevereHeadache\OtusHa\Models\Model;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

/**
 * Abstractclass for work with database.
 */
abstract class AbstractRepository
{
    protected static $tableName = '';
    protected static $idField = '';
    protected static $class = '';

    protected function getById(string $id, bool $slave = false): PDOStatement
    {
        $request = $this->getConnection($slave)->prepare(sprintf('SELECT * FROM %s WHERE %s = :id LIMIT 1;', static::$tableName, static::$idField));
        $request->execute([':id' => $id]);

        return $request;
    }

    protected function castObjectProperties(object $item)
    {
        foreach(get_object_vars($item) as $name => $value) {
            $attrName = $this->toCamelCase($name);
            unset($item->$name);
            $item->$attrName = $value;
        }

        return $item;
    }

    protected function isExistsIntoDb(object $item): bool
    {
        $id = static::$idField;
        if (empty($item->$id)) {
            return false;
        }

        $request = $this->getConnection()->prepare(sprintf('SELECT COUNT(*) FROM %s WHERE %s = :id;', static::$tableName, static::$idField));
        $request->execute([':id' => $item->$id]);
        $count = $request->fetchColumn();

        return $count !== 0;
    }


    protected function makeUpdateQueryParams(object $item, object $currentStoredItem): array
    {
        $params = [];
        $filelds = [];
        foreach(get_object_vars($item) as $name => $value) {
            if ($currentStoredItem->$name !== $value) {
                $snakeName = $this->toSnakeCase($name);
                $paramName = ':'.$snakeName;
                $params[$paramName] = $value;
                $filelds[] = sprintf('%s = %s', $snakeName, $paramName);
            }
        }

        $filelds = implode(',', $filelds);

        return compact('filelds', 'params');
    }

    protected function makeInserQueryParams(object $item): array
    {
        $params = [];

        foreach(get_object_vars($item) as $name => $value) {
            if ($value !== null) {
                $paramName = $this->toSnakeCase($name);
                $params[':'.$paramName] = $value;
            }
        }

        if (empty($params)){
            throw new RepositoryException('Is nullable object');
        }

        $filelds = implode(',', array_map(fn ($paramName) => str_replace(':', '', $paramName), array_keys($params)));
        $values = implode(',', array_keys($params));

        return compact('filelds', 'values', 'params');

    }

    protected function getConnection(bool $slave = false): PDO
    {
        return DB::getConnection($slave);
    }

    protected function toSnakeCase(string $name): string
    {
        return preg_replace_callback(
            '/(^|[a-z])([A-Z])/', 
            fn ($matches) => strtolower(strlen($matches[1]) ? $matches[1].'_'.$matches[2] : $matches[2]),
            $name 
          ); 
    }

    protected function toCamelCase(string $name): string
    {
        return preg_replace_callback(
            '/_([a-z])/',
            fn ($matches) => strtoupper($matches[1]),
            $name
        ); 
    }

    protected function parseValues($model)
    {
        $model = $this->castObjectProperties($model);

        return $model;
    }

    public function get(string $id): Model
    {
        $request = $this->getById($id, slave: true);
        $model = $request->fetchObject(static::$class);
        if (!($model instanceof Model)) {
            throw new RepositoryException('Failed to find friend with id: '. $id);
        }

        return $this->parseValues($model);
    }

    protected function createModel(Model $model): Model
    {
        $insertParams = $this->makeInserQueryParams($model);
        $filelds = $insertParams['filelds'];
        $values = $insertParams['values'];
        $params = $insertParams['params'];

        if ($this->getConnection()->prepare("INSERT INTO ".static::$tableName." ($filelds) VALUES ($values);")->execute($params)) {
            $id = $model->{$model->getIdField()} ?: $this->getConnection()->lastInsertId();
            return $this->get($id);
        } else {
            throw new RepositoryException("Failed to create ".static::$class." with attributes: \n". json_encode($model, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }

        return $model;
    }

    public function find(array $where): ?Model
    {
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
        $request = $this->getConnection(slave: true)->prepare($query);
        $request->execute($params);
        $model = $request->fetchObject(static::$class); 
        $result = $model ? $this->parseValues($model) : null;

        return $result;
    }

    protected function deleteModel(Model $model)
    {
        $request = $this->getConnection()->prepare(sprintf('DELETE FROM %s WHERE %s = :id;', static::$tableName, static::$idField));
        if (!$request->execute([':id' => $model->{$model->getIdField()}])) {
            throw new RepositoryException("Failed to delete ".static::$class." with attributes: \n". json_encode($model, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }
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
        $friends = $request->fetchAll(PDO::FETCH_CLASS, Post::class); 
        $result = array_map([$this, 'parseValues'], $friends);

        return $result;
    }

    protected function updateModel(Model $model)
    {
        $currentUserValues = $this->get($model->{$model->getIdField()});
        $updateParams = $this->makeUpdateQueryParams($model, $currentUserValues);
        $params = $updateParams['params'];
        $filelds = $updateParams['filelds'];
        if (empty($params)) {
            return $model;
        }
        $params[':id'] = $model->{$model->getIdField()};
        if ($this->getConnection()->prepare("UPDATE ".static::$tableName." SET  $filelds WHERE ".static::$idField." = :id;")->execute($params)) {
            return $this->get($model->{$model->getIdField()});
        } else {
            throw new RepositoryException("Failed to update ".static::$class." with attributes: \n". json_encode($model, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }
        return $model;
    }

    protected function storeModel(Model $model)
    {
        if($this->isExistsIntoDb($model)){
            return $this->updateModel($model);
        } else {
            return $this->createModel($model);
        }
    }

}