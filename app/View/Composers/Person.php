<?php

namespace App\View\Composers;

use App\View\Composers\Concerns\HasFields;
use App\View\Composers\Concerns\HasPostData;
use Roots\Acorn\View\Composer;

class Person extends Composer
{
    use HasFields;
    use HasPostData;

    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'teasers.person',
    ];

    public function with()
    {
        return [
            'post_type' => get_post_type(),
            'title' => $this->title(),
            'description' => $this->field('description'),
            'email' => $this->field('email'),
        ];
    }
}
