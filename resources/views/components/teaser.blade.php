<div class="teaser type {{ $post_type }} type-{{ $post_type }}--teaser {{ $custom_class }}">
  <a
    class="teaser__link"
    href="{{ $permalink }}"
    aria-label="{{ $aria_label }}"
    @if ($excerpt)
    aria-describedby="teaser-{{ $id }}-excerpt"
    @endif
  >
    @if ($label)
      <div class="teaser__label">
        {!! $label !!}
      </div>
    @endif
    @if ($thumbnail)
      <div class="teaser__thumbnail">
        {!! $thumbnail !!}
      </div>
    @else
      <div class="teaser__thumbnail teaser__thumbnail--placeholder">
        <img src="{{ \Roots\asset('images/post-placeholder.png')->uri() }}" alt="{{ $label }}" />
      </div>
    @endif
    <div class="teaser__content">
      @if ($title)
        <h2 class="teaser__title has-medium-heading-font-size">{!! $title !!}</h2>
      @endif
      @if ($excerpt)
        <p class="teaser__excerpt" id="teaser-{{ $id }}-excerpt">{!! $excerpt !!}</p>
      @endif
    </div>
  </a>
  @if ($tags || $categories)
  <ul class="teaser__tags">
    @foreach ($categories as $category)
    <li>
        <a href={!! get_category_link($category) !!}>{!! $category->name !!}</a>
    </li>
    @endforeach
    @if ($tags)
      @foreach ($tags as $tag)
        <li>
          <a href="{!! get_tag_link($tag) !!}">{!! $tag->name !!}</a>
        </li>
      @endforeach
    @endif
  </ul>
  @endif
</div>
