<?php

namespace ClarkWinkelmann\CatchTheFish\Providers;

use Illuminate\Support\ServiceProvider;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;

class StorageServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('catchthefish-assets', function () {
            return new Filesystem(new Local(public_path('assets/catch-the-fish')));
        });
    }
}
