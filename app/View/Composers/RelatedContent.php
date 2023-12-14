<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;
use WP_Query;

class RelatedContent extends Component
{
    public $type;
    public $label;
    public $query;
    public $category;

    /**
     * Create the component instance.
     */
    public function __construct(
        string $label = null,
        WP_Query $query = null,
        array $category = null
    ) {
        $this->label = $label;
        $this->query = $query;
        $this->category = $category;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render()
    {
        return $this->view('components.related-content');
    }
}
