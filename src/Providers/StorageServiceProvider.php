<?php

namespace ClarkWinkelmann\CatchTheFish\Providers;

use ClarkWinkelmann\CatchTheFish\Repositories\FishImageUploader;
use Flarum\Foundation\Paths;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemInterface;

class StorageServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('catchthefish-assets', function () {
            return new Filesystem(new Local($this->app->make(Paths::class)->public . '/assets/catch-the-fish'));
        });

        $this->app->when(FishImageUploader::class)
            ->needs(FilesystemInterface::class)
            ->give('catchthefish-assets');
    }
}
