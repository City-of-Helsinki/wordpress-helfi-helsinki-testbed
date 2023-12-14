<div class="{{ esc_attr($block->classes) }} layout-{{ $layout }}">
  <div @if (count($persons) > 1) class="grid" @endif>
    @foreach ($persons as $person)
      <div @if (count($persons) > 1 || $layout === 'vertical') class="cell {{ $layout === 'vertical' ? 'xsmall:4 small:2 medium:4 large:3' : 'medium:4 large:6' }}" @endif>
        @includeFirst(['teasers.' . $person->post_type, 'teasers.teaser'], ['post' => $person, 'layout' => $layout])
      </div>
    @endforeach
    @php(wp_reset_postdata())
  </div>
</div>
