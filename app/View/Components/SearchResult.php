<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;
use WP_Post;

class SearchResult extends Component
{
    public $post;
    public $label;
    public $id;
    public $post_type;
    public $title;
    public $aria_label;
    public $excerpt;
    public $categories;
    public $permalink;
    public $thumbnail;
    public $thumbnail_width;
    public $thumbnail_height;
    public $custom_class;

    public function __construct(
        WP_Post $post,
        string $title = null,
        string $label = null,
        string $ariaLabel = null,
        string $excerpt = null,
        string $categories = null,
        string $permalink = null,
        string $thumbnail = null,
        string $customClass = null
    ) {
        $this->post = $post;
        $this->label = $label;
        $this->id = get_the_ID($this->post);
        $this->post_type = get_post_type($this->post);
        $this->title = $title ?? get_the_title($this->post);
        $this->aria_label = $ariaLabel ?? sprintf(__('Read article: %s', 'helsinki-testbed'), $this->title);
        $this->excerpt = $excerpt ?? get_the_excerpt($this->post);
        $this->categories = $categories ?? wp_get_post_categories($this->post, ['fields' => 'all']);
        $this->permalink = $permalink ?? get_permalink($this->post);
        $this->thumbnail = $thumbnail ?? get_the_post_thumbnail($this->post, 'post-thumbnail', [
                'sizes' => '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 402px'
            ]);
        $this->custom_class = $customClass;
    }

    public function render()
    {
        return $this->view('components.search-result');
    }
}
