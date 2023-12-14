<?php

/**
 * Theme helpers.
 */

namespace App;

/**
 * Build a URL string based on URL parts as returned by `parse_url()`
 * @see https://stackoverflow.com/a/35207936/319855
 */
function build_url(array $parts): string
{
    return (isset($parts['scheme']) ? "{$parts['scheme']}:" : '') .
        ((isset($parts['user']) || isset($parts['host'])) ? '//' : '') .
        (isset($parts['user']) ? "{$parts['user']}" : '') .
        (isset($parts['pass']) ? ":{$parts['pass']}" : '') .
        (isset($parts['user']) ? '@' : '') .
        (isset($parts['host']) ? "{$parts['host']}" : '') .
        (isset($parts['port']) ? ":{$parts['port']}" : '') .
        (isset($parts['path']) ? "{$parts['path']}" : '') .
        (isset($parts['query']) ? "?{$parts['query']}" : '') .
        (isset($parts['fragment']) ? "#{$parts['fragment']}" : '');
}

// Workarounds
function current_locale_code(): string
{
    return mb_strtoupper(mb_substr(get_locale(), 0, 2));
}

function languages_list(): array
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
