<div class="{{ esc_attr($block->classes) }}" @if ($block->id || $use_pagination) id="{{ $block->id ?? 'listing' }}" @endif>
  @if($title)
    <h2>{{$title}}</h2>
  @endif

  <div class="grid">
    @while ($query->have_posts()) @php($query->the_post())
    <div class="cell xsmall:4 small:2 medium:4">
      @includeFirst(['teasers.' . get_post_type(), 'teasers.teaser'], ['post' => get_post()])
    </div>
    @endwhile
    @php(wp_reset_postdata())
  </div>

  @if ($use_pagination)
    <div class="wp-block-buttons aligncenter">
      @include('partials.pagination', ['query' => $query, 'fragment' => $block->id ?? 'listing'])
    </div>
  @endif
</div>
