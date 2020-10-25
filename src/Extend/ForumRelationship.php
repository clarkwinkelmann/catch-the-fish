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
        if ($event->isController(ShowForumController::class)) {
            if ($event->actor->can('catchthefish.visible')) {
                /**
                 * @var $rounds RoundRepository
                 */
                $rounds = app(RoundRepository::class);

                $event->data['catchTheFishActiveRounds'] = $rounds->allActive();
            } else {
                $event->data['catchTheFishActiveRounds'] = [];
            }
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
        if ($event->isController(ShowForumController::class) && app(SettingsRepositoryInterface::class)->get('catch-the-fish.alertRound', true)) {
            $event->addInclude('catchTheFishActiveRounds.ranking');
        }
    }

    public function permissions(Serializing $event)
    {
        if ($event->serializer instanceof ForumSerializer) {
            /**
             * @var $settings SettingsRepositoryInterface
             */
            $settings = app(SettingsRepositoryInterface::class);

            $event->attributes['catchTheFishCanModerate'] = $event->actor->can('catchthefish.moderate');
            $event->attributes['catchTheFishCanSeeRankingsPage'] = $event->actor->can('catchthefish.list-rankings');
            $event->attributes['catchTheFishAnimateFlip'] = (bool)$settings->get('catch-the-fish.animateFlip', true);
        }
    }
}
