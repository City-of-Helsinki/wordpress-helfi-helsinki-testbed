<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;
use Log1x\Navi\Facades\Navi;

class Navigation extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.header',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'primary_navigation' => $this->primaryNavigation(),
            'language_navigation' => $this->languageNavigation(),
            'language_code' => $this->languageCode(),
        ];
    }

    public function primaryNavigation(): array
    {
        $navigation = Navi::build('primary_navigation')->toArray();
        if (is_array($navigation)) {
            return $navigation;
        }
        return [];
    }

    public function languageCode(): string
    {
        return mb_strtoupper(mb_substr(get_locale(), 0, 2));
    }

    public function languageNavigation(): array
    {
        $languages = apply_filters('wpml_active_languages', null, [
            'skip_missing' => 0,
            'orderby' => 'order',
            'order' => 'desc',
        ]);

        return collect($languages)
            ->map(function ($language) {
                $item = new \stdClass;
                $item->active = $language['active'];
                $item->activeAncestor = null;
                $item->title = $language['native_name'];
                $item->url = $language['url'];
                $item->label = sprintf(__('%s', 'helsinki-testbed'), $language['native_name']);
                $item->disabled = $language['missing'];
                $item->children = false;
                return $item;
            })
            ->toArray();
    }
}
