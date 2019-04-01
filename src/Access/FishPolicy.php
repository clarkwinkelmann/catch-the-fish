<?php

namespace ClarkWinkelmann\CatchTheFish\Access;

use Carbon\Carbon;
use ClarkWinkelmann\CatchTheFish\Fish;
use Flarum\Foundation\ValidationException;
use Flarum\User\AbstractPolicy;
use Flarum\User\User;

class FishPolicy extends AbstractPolicy
{
    protected $model = Fish::class;

    public function create(User $actor)
    {
        return $actor->can('catchthefish.moderate');
    }

    public function update(User $actor, Fish $fish)
    {
        return $this->create($actor);
    }

    public function delete(User $actor, Fish $fish)
    {
        return $this->update($actor, $fish);
    }

    public function catch(User $actor, Fish $fish)
    {
        if ($actor->id === $fish->user_id_last_placement) {
            throw new ValidationException([
                'placement' => 'Cannot catch a fish you placed',
            ]);
        }

        if (!$fish->placement_valid_since || $fish->placement_valid_since->gt(Carbon::now())) {
            throw new ValidationException([
                'placement' => 'The previous catcher needs to release the fish before you can catch it',
            ]);
        }

        return $actor->can('participate', $fish->round);
    }

    protected function updateCatched(User $actor, Fish $fish)
    {
        if (!$fish->user_id_last_catch || $fish->user_id_last_catch !== $actor->id) {
            throw new ValidationException([
                'placement' => 'You can no longer edit this fish. Somebody else has probably caught it.',
            ]);
        }

        if (!$fish->placement_valid_since || $fish->placement_valid_since->lt(Carbon::now())) {
            throw new ValidationException([
                'placement' => 'Too late, you can no longer edit this fish. It has automatically been placed somewhere in the meantime.',
            ]);
        }

        return true;
    }

    public function name(User $actor, Fish $fish)
    {
        return $this->updateCatched($actor, $fish) && $actor->can('catchthefish.choose-name');
    }

    public function place(User $actor, Fish $fish)
    {
        return $this->updateCatched($actor, $fish) && $actor->can('catchthefish.choose-place');
    }
}
