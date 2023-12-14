<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use WP_Query;

class PersonList extends Block
{
    public $name = 'Person list';
    public $description = 'Show a list of persons...';
    public $category = 'sage';
    public $icon = 'admin-users';
    public $keywords = ['posts'];
    public $mode = 'preview';
    public $align = 'wide';
    public $supports = [
        'align' => ['full', 'wide'],
        'mode' => false,
    ];

    public function with()
    {
        return [
            'persons' => $this->persons(),
            'layout' => get_field('layout') ?? 'vertical',
        ];
    }

    public function persons()
    {
        return collect(get_field('persons') ?: [])
            ->map(function ($postId) {
                return get_post($postId);
            })
            ->filter(function ($post) {
                return $post->post_status == 'publish';
            })
            ->all();
    }

    public function render($block, $content = '', $preview = false, $post = 0)
    {
        if (!$this->persons()) {
            if (is_bool($preview) && $preview) {
                return '<div class="acf-block-placeholder text-center">' . __('No results found...') . '</div>';
            }
            return '';
        }

        return parent::render(...func_get_args());
    }
}
