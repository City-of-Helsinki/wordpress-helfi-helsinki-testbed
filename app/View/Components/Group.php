<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Group extends Component
{
    public $style;
    public $color;
    public $background;
    public $align;

    public function __construct($style = null, $color = null, $background = null, $align = null)
    {
        $this->style = $style;
        $this->color = $color;
        $this->background = $background;
        $this->align = $align;
    }

    public function render()
    {
        return $this->view('components.group');
    }
}
