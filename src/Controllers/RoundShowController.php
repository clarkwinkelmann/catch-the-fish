<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Repositories\RoundRepository;
use ClarkWinkelmann\CatchTheFish\Round;
use ClarkWinkelmann\CatchTheFish\Serializers\RoundSerializer;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class RoundShowController extends AbstractShowController
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
     * @throws ModelNotFoundException
     * @throws PermissionDeniedException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = array_get($request->getQueryParams(), 'id');

        $round = $this->rounds->findOrFail($id);

        $this->assertCan($request->getAttribute('actor'), 'view', $round);

        return $round;
    }
}
