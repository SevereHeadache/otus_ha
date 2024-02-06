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

$klein->respond('GET', '/user/search', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\UserController::search', ...$args);
});

$klein->respond('PUT', '/friend/set/[:user_id]', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\FriendController::set', ...$args);
});

$klein->respond('PUT', '/friend/delete/[:user_id]', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\FriendController::delete', ...$args);
});

$klein->respond('POST', '/post/create', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\PostController::create', ...$args);
});

$klein->respond('PUT', '/post/update', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\PostController::update', ...$args);
});

$klein->respond('PUT', '/post/delete/[:id]', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\PostController::delete', ...$args);
});

$klein->respond('GET', '/post/get/[:id]', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\PostController::get', ...$args);
});

$klein->respond('GET', '/post/feed', function (...$args) use ($callController) {
    return $callController('SevereHeadache\\OtusHa\\Controllers\\PostController::feed', ...$args);
});

$klein->dispatch();