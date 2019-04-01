<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Repositories\RoundRepository;
use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class RoundDeleteController extends AbstractDeleteController
{
    use AssertPermissionTrait;

    protected $rounds;

    public function __construct(RoundRepository $rounds)
    {
        $this->rounds = $rounds;
    }

    /**
     * @param ServerRequestInterface $request
     * @throws ModelNotFoundException
     * @throws PermissionDeniedException
     * @throws \Exception
     */
    protected function delete(ServerRequestInterface $request)
    {
        $id = Arr::get($request->getQueryParams(), 'id');

        $round = $this->rounds->findOrFail($id);

        $this->assertCan($request->getAttribute('actor'), 'delete', $round);

        $this->rounds->delete($round);
    }
}
