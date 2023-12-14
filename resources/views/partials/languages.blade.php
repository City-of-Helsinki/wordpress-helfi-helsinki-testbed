@if ($language_navigation)
  <div class="site-languages">
    <button
      class="site-languages__button"
      aria-haspopup="true"
      aria-controls="site-languages"
      aria-expanded="false"
    >
      {{ $language_code }}
      <span class="site-languages__trigger has-angle-down-icon" aria-hidden="true"></span>
    </button>
    <ul
      class="site-languages__menu"
      id="site-languages"
      role="menu"
    >
      @foreach ($language_navigation as $item)
        @include('partials.menu-item', ['item' => $item, 'name' => 'site-languages'])
      @endforeach
    </ul>
  </div>
@endif
