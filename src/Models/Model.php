<?php


namespace SevereHeadache\OtusHa\Models;

abstract class Model
{
    abstract public function getIdField(): string;
}