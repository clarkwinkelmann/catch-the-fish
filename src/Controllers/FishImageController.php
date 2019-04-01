<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Repositories\FishRepository;
use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\User\AssertPermissionTrait;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FishImageController extends AbstractShowController
{
    use AssertPermissionTrait;

    public $serializer = FishSerializer::class;

    protected $fishes;

    public function __construct(FishRepository $fishes)
    {
        $this->fishes = $fishes;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return \ClarkWinkelmann\CatchTheFish\Fish
     * @throws \Flarum\User\Exception\PermissionDeniedException
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = array_get($request->getQueryParams(), 'id');

        $fish = $this->fishes->findOrFail($id);

        $this->assertCan($request->getAttribute('actor'), 'update', $fish);

        $file = array_get($request->getUploadedFiles(), 'image');

        return $this->fishes->updateImage($fish, $file);
    }
}
