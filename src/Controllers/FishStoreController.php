<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Repositories\FishRepository;
use ClarkWinkelmann\CatchTheFish\Repositories\RoundRepository;
use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Validation\ValidationException;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FishStoreController extends AbstractCreateController
{
    use AssertPermissionTrait;

    public $serializer = FishSerializer::class;

    protected $rounds;
    protected $fishes;

    public function __construct(RoundRepository $rounds, FishRepository $fishes)
    {
        $this->rounds = $rounds;
        $this->fishes = $fishes;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return Fish
     * @throws PermissionDeniedException
     * @throws ValidationException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $roundId = array_get($request->getQueryParams(), 'id');

        $round = $this->rounds->findOrFail($roundId);

        $this->assertCan($request->getAttribute('actor'), 'createFish', $round);

        $attributes = array_get($request->getParsedBody(), 'data.attributes', []);

        return $this->fishes->store($round, $attributes);
    }
}
