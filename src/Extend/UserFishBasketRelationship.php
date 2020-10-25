<?php

namespace ClarkWinkelmann\CatchTheFish\Extend;

use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Event\GetApiRelationship;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;

class UserFishBasketRelationship implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(GetApiRelationship::class, [$this, 'serializer']);
        $container['events']->listen(WillGetData::class, [$this, 'includes']);
    }

    public function serializer(GetApiRelationship $event)
    {
        if ($event->isRelationship(CurrentUserSerializer::class, 'catchTheFishBasket')) {
            return $event->serializer->hasMany($event->model, FishSerializer::class, 'catchTheFishBasket');
        }
    }

    public function includes(WillGetData $event)
    {
        if ($event->isController(ShowUserController::class)) {
            $event->addInclude([
                'catchTheFishBasket',
            ]);
        }
    }
}
