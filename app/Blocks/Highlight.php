<?php

namespace App\Blocks;

use Genero\Sage\NativeBlock\NativeBlock;

class Highlight extends NativeBlock
{
    public $name = 'hds/highlight';

    public function with()
    {
        return [
            'iconName' => $this->attributes->iconName,
            'heading' => $this->attributes->heading,
            'body' => $this->attributes->body,
            'backgroundColor' => $this->attributes->backgroundColor,
            'iconColor' => $this->attributes->iconColor,
            'textColor' => $this->attributes->textColor,
            'linkText' => $this->attributes->linkText,
            'linkUrl' => $this->attributes->linkUrl,
        ];
    }
}
