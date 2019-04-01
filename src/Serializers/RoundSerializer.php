<?php

namespace ClarkWinkelmann\CatchTheFish\Serializers;

use ClarkWinkelmann\CatchTheFish\Round;
use Flarum\Api\Serializer\AbstractSerializer;

class RoundSerializer extends AbstractSerializer
{
    protected $type = 'catchthefish-rounds';

    /**
     * @param Round $round
     * @return array
     */
    protected function getDefaultAttributes($round)
    {
        return [
            'name' => $round->name,
            'starts_at' => $this->formatDate($round->starts_at),
            'ends_at' => $this->formatDate($round->ends_at),
        ];
    }
}
