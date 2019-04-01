<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Repositories\FishRepository;
use ClarkWinkelmann\CatchTheFish\Repositories\RoundRepository;
use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller\AbstractListController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FishIndexController extends AbstractListController
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
     * @return mixed
     * @throws PermissionDeniedException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $roundId = array_get($request->getQueryParams(), 'id');

        $round = $this->rounds->findOrFail($roundId);

        $this->assertCan($request->getAttribute('actor'), 'listFishes', $round);

        return $this->fishes->all($round);
    }
}
