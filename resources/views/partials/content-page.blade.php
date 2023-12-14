<article @php(post_class())>
  @if ($printPageHeading)
    @include('partials.page-header')
  @endif

  <div class="entry-content">
    @if (!is_front_page() && get_the_excerpt())
      <x-group align="wide">
        <p class="description description--light">
          {{ get_the_excerpt() }}
        </p>
      </x-group>
    @endif

    @if (get_the_post_thumbnail_url())
      <div class="koro koro--basic white top">
      </div>
      <figure class="wp-block-image alignfull size-large wp-block-image--featured">
        @php(the_post_thumbnail('large', ['sizes' => '100vw']))
      </figure>
    @endif

    @if (is_front_page() && get_the_excerpt())
      <x-group align="wide">
        <p class="description">
          {{ get_the_excerpt() }}
        </p>
      </x-group>
    @endif

    @php(the_content())
  </div>

  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>
</article>
