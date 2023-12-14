<div class="search-result type {{ $post_type }} type-{{ $post_type }}--search {{ $custom_class }}">
  <div class="grid">
    <div class="cell small:1 medium:2 search-result__thumbnail-wrapper">
      @if ($thumbnail)
        <div class="search-result__thumbnail">
          {!! $thumbnail !!}
        </div>
      @else
        <div class="search-result__thumbnail search-result__thumbnail--placeholder"></div>
      @endif
    </div>
    <div class="cell xsmall:auto search-result__content">
      @if ($categories)
        <ul class="search-result__categories">
          @foreach ($categories as $category)
            <li>
              <a href="{!! get_category_link($category) !!}">{!! $category->name !!}</a>
            </li>
          @endforeach
        </ul>
      @endif
      @if ($title)
        <h2 class="search-result__title has-medium-heading-font-size">
          <a
            href="{{ $permalink }}"
            aria-label="{{ $aria_label }}"
            @if ($excerpt)
            aria-describedby="excerpt-{{ $id }}"
            @endif
          >
          {!! $title !!}
          </a>
        </h2>
      @endif
      @if ($excerpt)
        <p class="search-result__excerpt" id="excerpt-{{ $id }}">{!! $excerpt !!}</p>
      @endif
    </div>
  </div>
</div>
