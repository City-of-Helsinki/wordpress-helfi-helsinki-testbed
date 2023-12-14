@if ($query->have_posts())
  <div class="wp-block-group alignfull is-style-koro-top-basic has-background has-light-grey-background-color related-content">
    <div class="wp-block-group__inner-container">
      <div class="{{ esc_attr($block->classes) }} alignwide" @if ($block->id || $use_pagination) id="{{ $block->id ?? 'listing' }}" @endif>
        @if($label)
          <h2 class="related-content__title">{{$label}}</h2>
        @endif

        <div class="grid">
          @while ($query->have_posts()) @php($query->the_post())
          <div class="cell xsmall:4 small:2 medium:4 large:3">
            @includeFirst(['teasers.' . get_post_type(), 'teasers.teaser'], ['post' => get_post()])
          </div>
          @endwhile
          @php(wp_reset_postdata())
        </div>

        @if (count($category) === 1)
          <div class="wp-block-buttons aligncenter related-content__read-more-button">
            <div class="wp-block-button is-style-outline">
              <a class="wp-block-button__link" href="{{ get_category_link($category[0]) }}">
                {{ __('More related content', 'sage')}}
              </a>
            </div>
          </div>
        </div>
        @endif
    </div>
  </div>
@endif
