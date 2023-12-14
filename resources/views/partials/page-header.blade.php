<header class="entry-header">
  @if (!is_front_page() && function_exists('yoast_breadcrumb'))
    {{ yoast_breadcrumb( '<p id="breadcrumbs">','</p>' ) }}
  @endif
  <h1 class="entry-title">{!! $title !!}</h1>
</header>
