<?php

namespace App\Blocks;

use Genero\Sage\NativeBlock\NativeBlock;

class IconAndText extends NativeBlock
{
    public $name = 'hds/icon-and-text';

    public function with()
    {
        return [
            'iconName' => $this->attributes->iconName,
            'heading' => $this->attributes->heading,
            'body' => $this->attributes->body,
            'backgroundColor' => $this->attributes->backgroundColor,
            'iconColor' => $this->attributes->iconColor,
            'textColor' => $this->attributes->textColor,
        ];
    }
}
