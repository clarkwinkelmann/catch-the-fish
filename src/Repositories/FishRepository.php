<?php

namespace ClarkWinkelmann\CatchTheFish\Repositories;

use Carbon\Carbon;
use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Round;
use ClarkWinkelmann\CatchTheFish\Validators\FishValidator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use League\Flysystem\FilesystemInterface;

class FishRepository
{
    const BASE_IMAGES = [
        'pixabay-30828-640.png',
        'pixabay-30837-640.png',
        'pixabay-33712-640.png',
        'pixabay-36828-640.png',
        'pixabay-294469-640.png',
        'pixabay-1331813-640.png',
    ];

    public function all(Round $round)
    {
        return $round->fishes;
    }

    /**
     * @param $id
     * @return Model|Fish
     * @throws ModelNotFoundException
     */
    public function findOrFail($id): Fish
    {
        return Fish::query()->where('id', $id)->firstOrFail();
    }

    /**
     * @param Round $round
     * @param array $attributes
     * @return Fish
     * @throws ValidationException
     * @throws \Flarum\Foundation\ValidationException
     */
    public function store(Round $round, array $attributes): Fish
    {
        /**
         * @var $validator FishValidator
         */
        $validator = app(FishValidator::class);

        $validator->assertValid($attributes);

        $fish = new Fish($attributes);
        $fish->round()->associate($round);
        Placement::random()->assign($fish);
        $fish->placement_valid_since = Carbon::now();
        $fish->save();

        return $fish;
    }

    /**
     * @param Fish $fish
     * @param array $attributes
     * @return Fish
     * @throws ValidationException
     */
    public function update(Fish $fish, array $attributes): Fish
    {
        /**
         * @var $validator FishValidator
         */
        $validator = app(FishValidator::class);

        $validator->assertValid($attributes);

        if (array_has($attributes, 'name')) {
            // Remove the link to the last user who renamed the fish if an admin renames it via the admin panel
            $fish->user_id_last_naming = null;
        }

        $fish->fill($attributes);
        $fish->save();

        return $fish;
    }

    public function updateImage(Fish $fish, array $attributes): Fish
    {
        //TODO
    }

    /**
     * @param Fish $fish
     * @throws \Exception
     */
    public function delete(Fish $fish): void
    {
        $fish->delete();
    }

    /**
     * @param Round $round
     * @throws \Flarum\Foundation\ValidationException
     */
    public function storeDefaultData(Round $round): void
    {
        /**
         * @var $storage FilesystemInterface
         */
        $storage = app('catchthefish-assets');

        $now = Carbon::now();

        foreach (self::BASE_IMAGES as $index => $originalImagePath) {
            $imagePath = Str::random() . '.png';

            $storage->put($imagePath, file_get_contents(__DIR__ . '/../../resources/images/' . $originalImagePath));

            $fish = new Fish();
            $fish->round_id = $round->id;
            $fish->name = 'Fish #' . ($index + 1);
            $fish->image = $imagePath;
            Placement::random()->assign($fish);
            $fish->placement_valid_since = $now;
            $fish->save();
        }
    }
}
