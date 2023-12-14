<div class="site">
  <header class="site__header" id="header">
    @php(do_action('get_header'))
    @include('partials.header')
  </header>

  <main class="site__content">
    @yield('content')
  </main>

  <footer class="site__footer">
    @include('partials.footer')
  </footer>
</div>
