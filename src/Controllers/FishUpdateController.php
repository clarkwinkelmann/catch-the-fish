<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Repositories\FishRepository;
use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FishUpdateController extends AbstractShowController
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
     * @return Fish
     * @throws ModelNotFoundException
     * @throws PermissionDeniedException
     * @throws ValidationException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = array_get($request->getQueryParams(), 'id');

        $fish = $this->fishes->findOrFail($id);

        $this->assertCan($request->getAttribute('actor'), 'update', $fish);

        $attributes = array_get($request->getParsedBody(), 'data.attributes', []);

        return $this->fishes->update($fish, $attributes);
    }
}
