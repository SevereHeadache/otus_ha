<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use Carbon\Carbon;
use PDO;
use SevereHeadache\OtusHa\Models\Model;
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
        return $this->storeModel($token);
    }

    public function get(string $id): Token
    {
        return parent::get($id);
    }

    public function find(array $where): ?Token
    {
        return parent::find($where);
    }

    public function delete(Token $token)
    {
        return parent::deleteModel($token);
    }

    protected function isExists(Token $token): bool
    {
        return $this->isExistsIntoDb($token);
    }

    protected function update(Token $token)
    {
        return $this->updateModel($token);
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

        return $this->createModel($token);
    }

    protected function parseValues($token)
    {
        $token = $this->castObjectProperties($token);

        if (!empty($token->expiriedAt)) {
            $token->expiriedAt = Carbon::parse($token->expiriedAt);
        }

        return $token;
    }
}