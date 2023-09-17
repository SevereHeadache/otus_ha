<?php


namespace Tests\Unit;

use Carbon\Carbon;
use DateTime;
use Ramsey\Uuid\Uuid;
use SevereHeadache\OtusHa\Models\Token;
use SevereHeadache\OtusHa\Models\User;
use SevereHeadache\OtusHa\Repositories\Database\TokenRepository;
use Tests\Support\Helper\Traits\DatabaseTransactions;
use Tests\Support\UnitTester;

class TokenRepositoryTest extends \Codeception\Test\Unit
{
    use DatabaseTransactions;

    protected UnitTester $tester;

    /**
     * @dataProvider createTokenProvider
     */
    public function testStore($token)
    {
        $sut = new TokenRepository();
        $created = $sut->store($token);

        $this->assertNotEmpty($created->token);
        $this->assertNotEmpty($created->userId);
        $this->assertNotEmpty($created->expiriedAt);
        
        $token->expiriedAt = Carbon::now()->addDays(5)->setMicrosecond(0);
        $updated = $sut->store($token);

        $this->assertEqualsCanonicalizing($token, $updated);

        $byUserId = $sut->getByUserId($token->userId);

        $this->assertNotEmpty($byUserId);

    }

    public function createTokenProvider()
    {
        return [
            'Create token without defined token' => [
                (function () {
                    $token = new Token();
                    $token->userId = Uuid::uuid4()->toString();
                    $token->expiriedAt = Carbon::now();

                    return $token;
                })()
            ],
            'Create token with defined token' => [
                (function () {
                    $token = new Token();
                    $token->token = Uuid::uuid4()->toString();
                    $token->userId = Uuid::uuid4()->toString();
                    $token->expiriedAt = Carbon::now();

                    return $token;
                })()
            ],
            'Create token without defined expiredAt' => [
                (function () {
                    $token = new Token();
                    $token->token = Uuid::uuid4()->toString();
                    $token->userId = Uuid::uuid4()->toString();

                    return $token;
                })()
            ]
        ];
    }
}
