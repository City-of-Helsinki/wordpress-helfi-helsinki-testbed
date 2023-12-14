<article @php(post_class())>
  @if ($printPageHeading)
    @include('partials.page-header')
  @endif

  <div class="entry-content">
    @php(the_content())
  </div>
</article>
