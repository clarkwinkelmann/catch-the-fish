<?php

namespace ClarkWinkelmann\CatchTheFish\Repositories;

use Carbon\Carbon;
use ClarkWinkelmann\CatchTheFish\Fish;
use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
use Flarum\Foundation\ValidationException;
use Flarum\Post\Post;
use Flarum\User\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Placement
{
    public $discussionId;
    public $postId;
    public $userId;

    public function isValid(): bool
    {
        // One and only one anchor resource must be chosen
        if (!is_null($this->discussionId) + !is_null($this->postId) + !is_null($this->userId) !== 1) {
            return false;
        }

        switch (false) {
            case is_null($this->discussionId):
                if (!Discussion::where('is_private', false)->where('id', $this->discussionId)->exists()) {
                    return false;
                }
                break;
            case is_null($this->postId):
                if (!Post::where('is_private', false)->where('id', $this->postId)->exists()) {
                    return false;
                }
                break;
            case is_null($this->userId):
                // TODO: prevent ignored users
                if (!User::where('id', $this->discussionId)->exists()) {
                    return false;
                }
                break;
        }

        return true;
    }

    /**
     * @param AbstractModel $model
     * @throws ValidationException
     */
    protected function assertPlacementOnResource(AbstractModel $model)
    {
        if ($model instanceof Discussion || $model instanceof Post) {
            if ($model->is_private) {
                throw new ValidationException([
                    'placement' => 'Can\'t place fish on a private discussion or post',
                ]);
            }
            // TODO: check modified since
        }

        if ($model instanceof User) {
            if ($model->last_seen_at->lt(Carbon::now()->subDays(7))) {
                throw new ValidationException([
                    'placement' => 'Can\'t place fish on a user that hasn\'t been seen for n days',
                ]);
            }

            // TODO: extensions
            if ($model->suspended_at) {
                throw new ValidationException([
                    'placement' => 'Can\'t place fish on a suspended user',
                ]);
            }
        }
    }

    protected static function randomUser(): User
    {
        // TODO: suspend
        // TODO: activity instead of online time ?
        return User::where('last_seen_at', '>', Carbon::now()->subDays(7))
            ->inRandomOrder()
            ->firstOrFail();
    }

    protected static function randomDiscussion(): Discussion
    {
        return Discussion::where('is_private', false)
            ->whereNull('hidden_at')
            //->where('last_posted_at', '>', Carbon::now()->subDays(7)) // TODO: setting
            ->inRandomOrder()
            ->firstOrFail();
    }

    protected static function randomPost(): Post
    {
        // TODO: also for old posts of recently active discussions ?
        return Post::where('is_private', false)
            ->whereNull('hidden_at')
            ->where('type', 'comment')
            //->where('created_at', '>', Carbon::now()->subDays(7)) // TODO: setting
            ->inRandomOrder()
            ->firstOrFail();
    }

    public static function random(): self
    {
        $rand = random_int(1, 3);

        $placement = new self();

        try {
            switch ($rand) {
                case 1:
                    $placement->discussionId = self::randomDiscussion()->id;
                    break;
                case 2:
                    $placement->postId = self::randomPost()->id;
                    break;
                case 3:
                    $placement->userId = self::randomUser()->id;
                    break;
            }
        } catch (ModelNotFoundException $exception) {
            throw new ValidationException([
                'placement' => 'Could not find a suitable place for the fish',
            ]);
        }

        return $placement;
    }

    public function assign(Fish $fish)
    {
        $fish->discussion_id_placement = $this->discussionId;
        $fish->post_id_placement = $this->postId;
        $fish->user_id_placement = $this->userId;
    }
}
