<?php
use GuzzleHttp\Client;
use Illuminate\Http\Request;

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/test', function(){
    return "testing..!";
});

$router->get('api', 'ApiController@getWord');
