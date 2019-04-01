<?php

namespace ClarkWinkelmann\CatchTheFish\Extend;

use ClarkWinkelmann\CatchTheFish\Repositories\RoundRepository;
use ClarkWinkelmann\CatchTheFish\Serializers\RoundSerializer;
use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\WillGetData;
use Flarum\Event\GetApiRelationship;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Container\Container;

class ForumRelationship implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(WillSerializeData::class, [$this, 'loadRelationship']);
        $container['events']->listen(GetApiRelationship::class, [$this, 'getApiAttributes']);
        $container['events']->listen(WillGetData::class, [$this, 'includes']);
        $container['events']->listen(Serializing::class, [$this, 'permissions']);
    }

    public function loadRelationship(WillSerializeData $event)
    {
        /**
         * @var $rounds RoundRepository
         */
        $rounds = app(RoundRepository::class);

        if ($event->isController(ShowForumController::class)) {
            $event->data['catchTheFishActiveRounds'] = $rounds->allActive();
        }
    }

    public function getApiAttributes(GetApiRelationship $event)
    {
        if ($event->isRelationship(ForumSerializer::class, 'catchTheFishActiveRounds')) {
            return $event->serializer->hasMany($event->model, RoundSerializer::class, 'catchTheFishActiveRounds');
        }
    }

    public function includes(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude('catchTheFishActiveRounds');
        }
    }

    public function permissions(Serializing $event)
    {
        if ($event->serializer instanceof ForumSerializer) {
            $event->attributes['catchTheFishCanModerate'] = $event->actor->can('catchthefish.moderate');
        }
    }
}
