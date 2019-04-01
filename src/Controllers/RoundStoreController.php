<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Repositories\RoundRepository;
use ClarkWinkelmann\CatchTheFish\Round;
use ClarkWinkelmann\CatchTheFish\Serializers\RoundSerializer;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Validation\ValidationException;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class RoundStoreController extends AbstractCreateController
{
    use AssertPermissionTrait;

    public $serializer = RoundSerializer::class;

    protected $rounds;

    public function __construct(RoundRepository $rounds)
    {
        $this->rounds = $rounds;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return Round
     * @throws PermissionDeniedException
     * @throws ValidationException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $this->assertCan($request->getAttribute('actor'), 'create', Round::class);

        $attributes = array_get($request->getParsedBody(), 'data.attributes', []);

        return $this->rounds->store($attributes);
    }
}
