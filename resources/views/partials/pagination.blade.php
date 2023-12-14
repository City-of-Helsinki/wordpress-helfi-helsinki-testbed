@php
  $query = $query ?? $GLOBALS['wp_query'];
@endphp
@if (isset($query) && $query->max_num_pages > 1)
  <div class="pagination">
    {!! paginate_links([
      'base' => str_replace(999999, '%#%', esc_url(get_pagenum_link(999999))),
      'format' => '?paged=%#%',
      'current' => max(1, get_query_var('paged')),
      'total' => $query->max_num_pages,
      'type' => 'list',
      'prev_text' => get_svg('images/icons/angle-left.svg', '', [
        'width' => 20,
        'height' => 20,
        'aria-label' => __('Previous page', 'helsinki-testbed'),
      ]),
      'next_text' => get_svg('images/icons/angle-right.svg', '', [
        'width' => 20,
        'height' => 20,
        'aria-label' => __('Next page', 'helsinki-testbed'),
      ]),
      'add_fragment' => !empty($fragment) ? "#$fragment" : null,
    ]) !!}
  </div>
@endif
