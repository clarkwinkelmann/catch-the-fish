<?php

namespace ClarkWinkelmann\CatchTheFish\Repositories;

use Carbon\Carbon;
use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Validators\FishValidator;
use Flarum\Foundation\ValidationException;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\User;

class PlacementRepository
{
    use AssertPermissionTrait;

    protected function assertFishIsAtPlacement(Fish $fish, array $placement): void
    {
        foreach ([
                     'discussion_id',
                     'post_id',
                     'user_id',
                 ] as $key) {
            $value = $fish->{$key . '_placement'};
            if ($value && $value == array_get($placement, $key)) {
                return;
            }
        }

        throw new ValidationException([
            'placement' => 'There are no fishes there. Maybe you weren\'t quick enough and somebody got it first',
        ]);
    }

    public function catch(User $actor, Fish $fish, array $placement): Fish
    {
        $this->assertCan($actor, 'catch', $fish);

        $this->assertFishIsAtPlacement($fish, $placement);

        $fish->user_id_last_naming = null;
        $fish->user_id_last_placement = null;
        $fish->last_caught_at = Carbon::now();
        $fish->lastUserCatch()->associate($actor);
        Placement::random()->assign($fish);

        $placementValidSince = Carbon::now();

        // Using permission directly instead of policy to not over-complicate time-based conditions
        // In the worst case we block the fish for a few minutes while nobody can edit it
        if ($actor->can('catchthefish.choose-place')) {
            $placementValidSince->addMinutes(5); // TODO: setting
        }

        $fish->placement_valid_since = $placementValidSince;

        $fish->save();

        // TODO: count catches

        return $fish;
    }

    public function place(User $actor, Fish $fish, array $attributes): Fish
    {
        if (array_has($attributes, 'placement')) {
            $this->assertCan($actor, 'place', $fish);

            if (array_get($attributes, 'placement') !== 'random') {
                $placement = new Placement();
                $placement->discussionId = array_get($attributes, 'placement.discussion_id');
                $placement->postId = array_get($attributes, 'placement.post_id');
                $placement->userId = array_get($attributes, 'placement.user_id');

                if (!$placement->isValid()) {
                    throw new ValidationException([
                        'placement' => 'This is not a valid fish placement. Maybe the post is too old or the user inactive',
                    ]);
                }

                $placement->assign($fish);
                $fish->lastUserPlacement()->associate($actor);
            }

            // If the request contains placement=random, we don't change anything but still immediately validate the random placement
            $fish->placement_valid_since = Carbon::now();
        }

        if (array_has($attributes, 'name')) {
            $this->assertCan($actor, 'name', $fish);

            /**
             * @var $validator FishValidator
             */
            $validator = app(FishValidator::class);
            $validator->assertValid($attributes);

            $fish->name = array_get($attributes, 'name');
            $fish->lastUserNaming()->associate($actor);

            // If the user can only rename fishes, after rename we immediately release the fish
            // If the user can place fishes, he's free to rename the fish as many times as he want before placing it
            if (!$actor->can('place', $fish)) {
                $fish->placement_valid_since = Carbon::now();
            }
        }

        if ($fish->isDirty()) {
            $fish->save();
        }

        return $fish;
    }
}
