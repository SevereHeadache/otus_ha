<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use Carbon\Carbon;
use PDO;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

/**
 * Class for work with users repository.
 * 
 * @todo make interface repository
 */
class UserRepository extends AbstractRepository
{
    protected static $tableName = 'users';
    protected static $idField = 'id';
    protected static $class = User::class;

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
        $request = $this->getById($id);
        $user = $request->fetchObject(User::class);
        if (!($user instanceof User)) {
            throw new RepositoryException('Failed to find user with id: '. $id);
        }

        return $this->parseValues($user);
    }

    protected function parseValues(User $user)
    {
        $user = $this->castObjectProperties($user);

        if (!empty($user->birthdate)) {
            $user->birthdate = Carbon::parse($user->birthdate);
        }

        return $user;
    }

    protected function isExists(User $user): bool
    {
        return $this->isExistsIntoDb($user);
    }

    protected function update(User $user)
    {
        $currentUserValues = $this->get($user->id);
        $updateParams = $this->makeUpdateQueryParams($user, $currentUserValues);
        $params = $updateParams['params'];
        $filelds = $updateParams['filelds'];
        if (empty($params)) {
            return $user;
        }
        $params[':id'] = $user->id;
        if ($this->getConnection()->prepare("UPDATE users SET  $filelds WHERE id = :id;")->execute($params)) {
            return $this->get($user->id);
        } else {
            throw new RepositoryException("Failed to update user with attributes: \n". json_encode($user, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }
        return $user;
    }

    protected function create(User $user)
    {
        if (empty($user->id)) {
            $user->id = $this->generateNewId();
        }
        $insertParams = $this->makeInserQueryParams($user);
        $filelds = $insertParams['filelds'];
        $values = $insertParams['values'];
        $params = $insertParams['params'];

        if ($this->getConnection()->prepare("INSERT INTO users ($filelds) VALUES ($values);")->execute($params)) {
            return $this->get($user->id);
        } else {
            throw new RepositoryException("Failed to create user with attributes: \n". json_encode($user, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }

        return $user;
    }
}