<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Repositories\FishRepository;
use ClarkWinkelmann\CatchTheFish\Repositories\RoundRepository;
use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller\AbstractListController;
use Flarum\User\AssertPermissionTrait;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FishImageBulkController extends AbstractListController
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
     * @return Fish[]
     * @throws \Flarum\User\Exception\PermissionDeniedException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $roundId = array_get($request->getQueryParams(), 'id');

        $round = $this->rounds->findOrFail($roundId);

        $this->assertCan($request->getAttribute('actor'), 'createFish', $round);

        $files = array_filter($request->getUploadedFiles(), function (string $key) {
            return starts_with($key, 'image');
        }, ARRAY_FILTER_USE_KEY);

        return $this->fishes->bulkImageImport($round, $files);
    }
}
