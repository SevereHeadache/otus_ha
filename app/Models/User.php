<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;
use Ramsey\Uuid\Uuid;

class User extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory, HasUuids;

    public string $id;
    public string $first_name;
    public string $second_name;
    public int    $age;
    public string $birthdate;
    public string $biography;
    public string $city;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'id',
        'first_name',
        'second_name',
        'age',
        'birthdate',
        'biography',
        'city',
        'password'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var string[]
     */
    protected $hidden = [
        'password',
    ];

    // /**
    //  * Generate a new UUID for the model.
    //  */
    // public function newUniqueId(): string
    // {
    //     return (string) Uuid::uuid4();
    // }

    // public function uniqueIds(): array
    // {
    //     return ['id'];
    // }
}
