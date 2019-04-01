<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Repositories\RoundRepository;
use ClarkWinkelmann\CatchTheFish\Round;
use ClarkWinkelmann\CatchTheFish\Serializers\RoundSerializer;
use Flarum\Api\Controller\AbstractListController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class RoundIndexController extends AbstractListController
{
    use AssertPermissionTrait;

    public $serializer = RoundSerializer::class;

    /**
     * @var RoundRepository
     */
    protected $rounds;

    public function __construct(RoundRepository $rounds)
    {
        $this->rounds = $rounds;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return mixed
     * @throws PermissionDeniedException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $this->assertCan($request->getAttribute('actor'), 'list', Round::class);

        return $this->rounds->all();
    }
}
