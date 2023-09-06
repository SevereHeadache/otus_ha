<?php

require __DIR__.'/../bootstrap.php';

$klein = new \Klein\Klein();

/**
 * @todo Make controllers factory
 */
$callController = function ($controller, ...$args) {
    [$class, $method] = explode('::', $controller);
    $controllerInstance = new $class();
    return $controllerInstance->$method(...$args);
};  

$klein->respond('GET', '/login', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\LoginController::login', ...$args);
});

$klein->dispatch();