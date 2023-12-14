<form action="{{ home_url('/') }}" method="get" role="search" class="site-search">
  <input class="site-search__field" type="search" name="s" placeholder="{{ __('Search', 'helsinki-testbed') }}" data-swplive="true" />

  <button class="site-search__button" type="submit">
    @svg('images/icons/search.svg', '', ['width' => 24, 'height' => 24])
    <span class="sr-only">{{ __('Search', 'helsinki-testbed') }}</span>
  </button>
</form>
