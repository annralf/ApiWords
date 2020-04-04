<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Connection\Mongo;

/**
 *
 */
class MongoConnectorProvider extends ServiceProvider
{
  public function register() {
      $this->app->singleton(mongo::class, function ($app) {
          return new Mongo();
      });
  }
}
