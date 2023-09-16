<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use Carbon\Carbon;
use Exception;
use PDO;
use SevereHeadache\OtusHa\Models\User;

/**
 * Class for work with users repository.
 * 
 * @todo typing exception
 * @todo make interface repository
 */
class UserRepository
{
    public function generateNewId()
    {
        return \Ramsey\Uuid\Rfc4122\UuidV4::uuid4()->toString();
    }

    public function store(User $user): User
    {
        if($this->isExists($user)){
            return $this->update($user);
        } else {
            return $this->create($user);
        }
    }

    public function get(string $id): User
    {
        $request = $this->getConnection()->prepare('SELECT * FROM users WHERE id = :id LIMIT 1;');
        $request->execute([':id' => $id]);
        $user = $request->fetchObject(User::class);
        if (!($user instanceof User)) {
            throw new Exception('Failed to find user with id: '. $id);
        }

        return $this->parseValues($user);
    }

    protected function parseValues(User $user)
    {
        foreach(get_object_vars($user) as $name => $value) {
            $attrName = $this->toCamelCase($name);
            unset($user->$name);
            $user->$attrName = $value;
        }

        if (!empty($user->birthdate)) {
            $user->birthdate = Carbon::parse($user->birthdate);
        }

        return $user;
    }

    protected function isExists(User $user): bool
    {
        if (empty($user->id)) {
            return false;
        }

        $request = $this->getConnection()->prepare('SELECT COUNT(*) FROM users WHERE id = :id;');
        $request->execute([':id' => $user->id]);
        $count = $request->fetchColumn();

        return $count !== 0;
    }

    protected function update(User $user)
    {
        $currentUserValues = $this->get($user->id);
        $params = [];
        $filelds = [];
        foreach(get_object_vars($user) as $name => $value) {
            if ($currentUserValues->$name !== $value) {
                $snakeName = $this->toSnakeCase($name);
                $paramName = ':'.$snakeName;
                $params[$paramName] = $value;
                $filelds[] = sprintf('%s = %s', $snakeName, $paramName);
            }
        }
        if (empty($params)) {
            return $user;
        }
        $params[':id'] = $user->id;
        $fileldsString = implode(',', $filelds);
        if ($this->getConnection()->prepare("UPDATE users SET  $fileldsString WHERE id = :id;")->execute($params)) {
            return $this->get($user->id);
        } else {
            throw new Exception("Failed to update user with attributes: \n". json_encode($user, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }
        return $user;
    }

    protected function create(User $user)
    {
        if (empty($user->id)) {
            $user->id = $this->generateNewId();
        }
        $params = $this->makeQueryParams($user);
        $filelds = implode(',', array_map(fn ($paramName) => str_replace(':', '', $paramName), array_keys($params)));
        $values = implode(',', array_keys($params));

        if ($this->getConnection()->prepare("INSERT INTO users ($filelds) VALUES ($values);")->execute($params)) {
            return $this->get($user->id);
        } else {
            throw new Exception("Failed to create user with attributes: \n". json_encode($user, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }

        return $user;
    }

    protected function makeQueryParams(User $user): array
    {
        $params = [];

        foreach(get_object_vars($user) as $name => $value) {
            if ($value !== null) {
                $paramName = $this->toSnakeCase($name);
                $params[':'.$paramName] = $value;
            }
        }

        if (empty($params)){
            throw new Exception('User is nullable object');
        }

        return $params;

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