<?php

namespace ClarkWinkelmann\CatchTheFish\Extend;

use Carbon\Carbon;
use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\User\User;
use Illuminate\Contracts\Container\Container;
use Illuminate\Database\Eloquent\Builder;

class UserFishBasketRelationship implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(GetModelRelationship::class, [$this, 'relationships']);
        $container['events']->listen(GetApiRelationship::class, [$this, 'serializer']);
        $container['events']->listen(WillGetData::class, [$this, 'includes']);
    }

    public function relationships(GetModelRelationship $event)
    {
        if ($event->isRelationship(User::class, 'catchTheFishBasket')) {
            return $event->model->hasMany(Fish::class, 'user_id_last_catch')
                ->whereHas('round', function (Builder $query) {
                    $query->activeRound();
                })
                ->where('placement_valid_since', '>', Carbon::now())
                ->orderBy('name');
        }
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
