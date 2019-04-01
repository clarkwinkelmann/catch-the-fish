<?php

namespace ClarkWinkelmann\CatchTheFish\Repositories;

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
        'pixabay-30837-640.png',
        'pixabay-33712-640.png',
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

    public function storeDefaultData(Round $round): void
    {
        /**
         * @var $storage FilesystemInterface
         */
        $storage = app('catchthefish-assets');

        $images = [];

        foreach (self::BASE_IMAGES as $originalImagePath) {
            $imagePath = Str::random() . '.png';

            $storage->put($imagePath, file_get_contents(__DIR__ . '/../../resources/images/' . $originalImagePath));

            $images[] = $imagePath;
        }

        $fish = new Fish();
        $fish->round_id = $round->id;
        $fish->name = 'Fish #1';
        $fish->image = $images[0];
        $fish->save();

        $fish = new Fish();
        $fish->round_id = $round->id;
        $fish->name = 'Fish #2';
        $fish->image = $images[1];
        $fish->save();
    }
}
