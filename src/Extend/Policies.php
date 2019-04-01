<?php

namespace ClarkWinkelmann\CatchTheFish\Extend;

use ClarkWinkelmann\CatchTheFish\Access\FishPolicy;
use ClarkWinkelmann\CatchTheFish\Access\RoundPolicy;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;

class Policies implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->subscribe(FishPolicy::class);
        $container['events']->subscribe(RoundPolicy::class);
    }
}
