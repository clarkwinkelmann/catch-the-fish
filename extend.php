<?php

namespace ClarkWinkelmann\CatchTheFish;

use ClarkWinkelmann\CatchTheFish\Controllers;
use ClarkWinkelmann\CatchTheFish\Extend as CTFExtend;
use Flarum\Extend;
use Flarum\Foundation\Application;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/resources/less/forum.less')
        ->js(__DIR__ . '/js/dist/forum.js')
        ->route('/catch-the-fish/rounds', 'catch-the-fish-rounds')
        ->route('/catch-the-fish/rounds/{id}', 'catch-the-fish-round'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Routes('api'))
        ->get('/catch-the-fish/rounds', 'catchthefish.api.rounds.index', Controllers\RoundIndexController::class)
        ->post('/catch-the-fish/rounds', 'catchthefish.api.rounds.store', Controllers\RoundStoreController::class)
        ->get('/catch-the-fish/rounds/{id:[0-9]+}', 'catchthefish.api.rounds.show', Controllers\RoundShowController::class)
        ->patch('/catch-the-fish/rounds/{id:[0-9]+}', 'catchthefish.api.rounds.update', Controllers\RoundUpdateController::class)
        ->delete('/catch-the-fish/rounds/{id:[0-9]+}', 'catchthefish.api.rounds.delete', Controllers\RoundDeleteController::class)
        ->get('/catch-the-fish/rounds/{id:[0-9]+}/fishes', 'catchthefish.api.fishes.index', Controllers\FishIndexController::class)
        ->post('/catch-the-fish/rounds/{id:[0-9]+}/fishes', 'catchthefish.api.fishes.store', Controllers\FishStoreController::class)
        ->patch('/catch-the-fish/fishes/{id:[0-9]+}', 'catchthefish.api.fishes.update', Controllers\FishUpdateController::class)
        ->delete('/catch-the-fish/fishes/{id:[0-9]+}', 'catchthefish.api.fishes.delete', Controllers\FishDeleteController::class)
        ->post('/catch-the-fish/fishes/{id:[0-9]+}/catch', 'catchthefish.api.fishes.catch', Controllers\FishCatchController::class)
        ->post('/catch-the-fish/fishes/{id:[0-9]+}/place', 'catchthefish.api.fishes.place', Controllers\FishPlaceController::class),
    (new Extend\Locales(__DIR__ . '/resources/locale')),
    new CTFExtend\Policies(),
    new CTFExtend\ForumRelationship(),
    new CTFExtend\ResourceFishRelationship(),
    new CTFExtend\UserFishBasketRelationship(),
    function (Dispatcher $events, Application $app) {
        $app->register(Providers\StorageServiceProvider::class);
    },
];
