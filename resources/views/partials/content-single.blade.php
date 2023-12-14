<article @php(post_class())>
  @if ($printPageHeading)
    <header class="entry-header">
      @if (function_exists('yoast_breadcrumb'))
        {{ yoast_breadcrumb( '<p id="breadcrumbs">','</p>' ) }}
      @endif

      <h1 class="entry-title">
        @php(the_title())
      </h1>

      @include('partials/entry-meta')
    </header>
  @endif

  <div class="entry-content">
    @if (get_the_post_thumbnail_url())
    <div class="koro koro--basic white top">
      </div>
      <figure class="wp-block-image alignfull size-large wp-block-image--featured">
        @php(the_post_thumbnail('large', ['sizes' => '100vw']))
      </figure>
    @endif

    @if (get_the_excerpt())
      <p class="description">
        {{ get_the_excerpt() }}
      </p>
    @endif

    <ul class="share">
      <li>
        <a
          class="share-button share-button--facebook"
          href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(get_permalink()) }}"
          target="_blank"
          title="{{ __('Share on Facebook', 'gds') }}"
          aria-label="{{ __('Share on Facebook', 'gds') }}"
          rel="nofollow"
        >
          <img class="icon" src="{{ \Roots\Asset('/images/fontawesome/facebook-f-brands.svg') }}" />
          <span class="text">Facebook</span>
        </a>
      </li>
      <li>
        <a
          class="share-button share-button--linkedin"
          href="https://www.linkedin.com/sharing/share-offsite/?url={{ urlencode(get_permalink()) }}"
          target="_blank"
          title="{{ __('Share on LinkedIn', 'gds') }}"
          aria-label="{{ __('Share on LinkedIn', 'gds') }}"
          rel="nofollow"
        >
          <img class="icon" src="{{ \Roots\Asset('/images/fontawesome/linkedin-in-brands.svg') }}" />
          <span class="text">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/intent/tweet?text={{ urlencode(sprintf('%s %s', get_the_title(), get_permalink())) }}"
          target="_blank"
          title="{{ __('Share on Twitter', 'hds') }}"
          aria-label="{{ __('Share on Twitter', 'hds') }}"
          rel="nofollow"
        >
          <img class="icon" src="{{ \Roots\Asset('/images/fontawesome/twitter-brands.svg') }}" />
          <span class="text">Twitter</span>
        </a>
      </li>
    </ul>


    @php(the_content())

  </div>

  <x-related-content
    :type="$related->type"
    :label="$related->label"
    :query="$related->query"
    :category="$related->category"
  />

  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>

  @php(comments_template())
</article>
