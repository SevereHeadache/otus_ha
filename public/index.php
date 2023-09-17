<?php

require __DIR__.'/../bootstrap.php';

$klein = new \Klein\Klein();

/**
 * @todo Make controllers factory
 */
$callController = function ($controller, ...$args) {
    try {
        [$class, $method] = explode('::', $controller);
        $controllerInstance = new $class();
        return $controllerInstance->$method(...$args);
    } catch (SevereHeadache\OtusHa\Controllers\Exceptions\JsonException $e) {
        return $args[1]->json($e->toArray());
    } catch (SevereHeadache\OtusHa\Repositories\Exceptions\RepositoryException $e) {
        SevereHeadache\OtusHa\Helpers\Logger::logError($e);
        return $args[1]->json([
            'code' => 500,
            'message' => $e->getMessage(),
        ]);
    } catch (Throwable $e) {
        SevereHeadache\OtusHa\Helpers\Logger::logError($e);
        return $args[1]->json([
            'code' => 500,
            'message' => 'Unspecified server error'
        ]);
    }
};  

$klein->respond('POST', '/login', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\AuthController::login', ...$args);
});

$klein->respond('POST', '/register', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\AuthController::register', ...$args);
});

$klein->respond('GET', '/user/get/[:id]', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\UserController::get', ...$args);
});

$klein->dispatch();