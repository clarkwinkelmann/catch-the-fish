<?php

namespace ClarkWinkelmann\CatchTheFish\Providers;

use ClarkWinkelmann\CatchTheFish\Repositories\FishImageUploader;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemInterface;

class StorageServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('catchthefish-assets', function () {
            return new Filesystem(new Local(public_path('assets/catch-the-fish')));
        });

        $this->app->when(FishImageUploader::class)
            ->needs(FilesystemInterface::class)
            ->give('catchthefish-assets');
    }
}
