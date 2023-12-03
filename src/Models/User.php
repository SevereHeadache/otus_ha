<?php

namespace SevereHeadache\OtusHa\Models;

class User extends Model
{
    public string $id;
    public string $firstName;
    public string $secondName;
    public string $password;
    public int    $age;
    public string $birthdate;
    public string $biography;
    public string $city;

    public function getIdField(): string
    {
        return 'id';
    }
}