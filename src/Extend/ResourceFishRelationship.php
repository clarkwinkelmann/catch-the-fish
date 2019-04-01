<?php

namespace ClarkWinkelmann\CatchTheFish\Extend;

use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Serializer;
use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Post\Post;
use Flarum\User\User;
use Illuminate\Contracts\Container\Container;
use Illuminate\Database\Eloquent\Builder;

class ResourceFishRelationship implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(GetModelRelationship::class, [$this, 'relationships']);
        $container['events']->listen(GetApiRelationship::class, [$this, 'serializer']);
        $container['events']->listen(WillGetData::class, [$this, 'includes']);
    }

    protected function addFishRelationship(AbstractModel $model, string $foreignKey)
    {
        return $model->hasMany(Fish::class, $foreignKey)
            ->whereHas('round', function (Builder $query) {
                $query->activeRound();
            })
            ->activeFish();
    }

    public function relationships(GetModelRelationship $event)
    {
        if ($event->relationship === 'catchTheFishFishes') {
            if ($event->model instanceof Discussion) {
                return $this->addFishRelationship($event->model, 'discussion_id_placement');
            }

            if ($event->model instanceof Post) {
                return $this->addFishRelationship($event->model, 'post_id_placement');
            }

            if ($event->model instanceof User) {
                return $this->addFishRelationship($event->model, 'user_id_placement');
            }
        }
    }

    public function serializer(GetApiRelationship $event)
    {
        if (
            $event->isRelationship(Serializer\DiscussionSerializer::class, 'catchTheFishFishes') ||
            $event->isRelationship(Serializer\PostSerializer::class, 'catchTheFishFishes') ||
            $event->isRelationship(Serializer\UserSerializer::class, 'catchTheFishFishes')
        ) {
            return $event->serializer->hasMany($event->model, FishSerializer::class, 'catchTheFishFishes');
        }
    }

    public function includes(WillGetData $event)
    {
        if (
            $event->isController(Controller\ListDiscussionsController::class) ||
            $event->isController(Controller\ShowDiscussionController::class) ||
            $event->isController(Controller\UpdateDiscussionController::class) ||
            $event->isController(Controller\ListPostsController::class) ||
            $event->isController(Controller\ShowPostController::class) ||
            $event->isController(Controller\UpdateUserController::class) ||
            $event->isController(Controller\ListUsersController::class) ||
            $event->isController(Controller\ShowUserController::class) ||
            $event->isController(Controller\UpdateUserController::class)
        ) {
            $event->addInclude([
                'catchTheFishFishes.lastUserPlacement',
                'catchTheFishFishes.lastUserNaming',
            ]);
        }

        if ($event->isController(Controller\ShowDiscussionController::class)) {
            $event->addInclude([
                'posts.catchTheFishFishes.lastUserPlacement',
                'posts.catchTheFishFishes.lastUserNaming',
            ]);
        }
    }
}
