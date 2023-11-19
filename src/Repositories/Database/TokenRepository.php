<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use Carbon\Carbon;
use PDO;
use SevereHeadache\OtusHa\Models\Token;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException;

/**
 * Class for work with token repository.
 * 
 * @todo make interface repository
 */
class TokenRepository extends AbstractRepository
{
    protected static $tableName = 'tokens';
    protected static $idField = 'token';
    protected static $class = Token::class;

    public function generateNewId()
    {
        return \Ramsey\Uuid\Rfc4122\UuidV4::uuid4()->toString();
    }

    public function makeExspiriedAt()
    {
        return Carbon::now()->addDays(3);
    }

    public function store(Token $token): Token
    {
        if($this->isExists($token)){
            return $this->update($token);
        } else {
            return $this->create($token);
        }
    }

    public function get(string $id): Token
    {
        $request = $this->getById($id, slave: true);
        $token = $request->fetchObject(Token::class);
        if (!($token instanceof Token)) {
            throw new RepositoryException('Failed to find token item with token: '. $id);
        }

        return $this->parseValues($token);
    }

    public function getByUserId(string $userId): Token|null
    {
        $request = $this->getConnection()->prepare('SELECT * FROM tokens WHERE user_id = :user_id LIMIT 1;');
        $request->execute([':user_id' => $userId]);
        $token = $request->fetchObject(Token::class);
        if (!($token instanceof Token)) {
            return null;
        }

        return $this->parseValues($token);
    }

    public function createForUser(User $user)
    {
        $token = new Token();
        $token->userId = $user->id;

        return $this->create($token);
    }

    protected function parseValues(Token $token)
    {
        $token = $this->castObjectProperties($token);

        if (!empty($token->expiriedAt)) {
            $token->expiriedAt = Carbon::parse($token->expiriedAt);
        }

        return $token;
    }

    protected function isExists(Token $token): bool
    {
        return $this->isExistsIntoDb($token);
    }

    protected function update(Token $token)
    {
        $currentTokenValues = $this->get($token->token);
        $updateParams = $this->makeUpdateQueryParams($token, $currentTokenValues);
        $params = $updateParams['params'];
        $filelds = $updateParams['filelds'];
        if (empty($params)) {
            return $token;
        }
        $params[':id'] = $token->token;
        if ($this->getConnection()->prepare("UPDATE tokens SET  $filelds WHERE token = :id;")->execute($params)) {
            return $this->get($token->token);
        } else {
            throw new RepositoryException("Failed to update token with attributes: \n". json_encode($token, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }
        return $token;
    }

    protected function create(Token $token)
    {
        if (empty($token->token)) {
            $token->token = $this->generateNewId();
        }
        if (empty($token->expiriedAt)) {
            $token->expiriedAt = (string) $this->makeExspiriedAt();
        }
        $insertParams = $this->makeInserQueryParams($token);
        $filelds = $insertParams['filelds'];
        $values = $insertParams['values'];
        $params = $insertParams['params'];

        if ($this->getConnection()->prepare("INSERT INTO tokens ($filelds) VALUES ($values);")->execute($params)) {
            return $this->get($token->token);
        } else {
            throw new RepositoryException("Failed to create user token attributes: \n". json_encode($token, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        }

        return $token;
    }
}