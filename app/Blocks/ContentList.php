<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use WP_Query;

class ContentList extends Block
{
    public $name = 'Content List';
    public $description = 'Show a list of content...';
    public $category = 'sage';
    public $icon = 'format-aside';
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
            'query' => $this->query(),
            'use_pagination' => get_field('use_pagination'),
            'title' => get_field('title'),
        ];
    }

    public function query()
    {
        $query = [
            'posts_per_page' => get_field('posts_per_page') ?: 3,
            'order_by' => get_field('order_by') ?: ['date'],
            'order' => get_field('order') ?: 'DESC',
            'post_type' => get_field('post_type'),
            'use_pagination' => get_field('use_pagination') ?? false,
            'post_status' => 'publish',
            'paged' => get_field('use_pagination') ? (get_query_var('paged') ?: 1) : null,
        ];

        if (get_field('exclude_quiet_posts')) {
            $query['meta_query'][] = [
                'relation' => 'OR',
                [
                    'key' => 'quiet_post',
                    'compare' => 'NOT EXISTS'
                ],
                [
                    'key' => 'quiet_post',
                    'value' => '1',
                    'compare' => '!='
                ],
            ];
        }

        if ($category = get_field('category')) {
            $query['tax_query'][] = [
                'taxonomy' => 'category',
                'field' => 'term_id',
                'terms' => $category,
            ];
        }

        return new WP_Query($query);
    }

    public function render($block, $content = '', $preview = false, $post = 0)
    {
        if (!$this->query()->have_posts()) {
            if (is_bool($preview) && $preview) {
                return '<div class="acf-block-placeholder text-center">' . __('No results found...') . '</div>';
            }
            return '';
        }

        return parent::render(...func_get_args());
    }
}
