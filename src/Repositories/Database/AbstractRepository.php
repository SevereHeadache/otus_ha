<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use Carbon\Carbon;
use PDO;
use PDOStatement;
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

    protected function getById(string $id): PDOStatement
    {
        $request = $this->getConnection()->prepare(sprintf('SELECT * FROM %s WHERE %s = :id LIMIT 1;', static::$tableName, static::$idField));
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

    protected function getConnection(): PDO
    {
        return DB::getConnection();
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
}