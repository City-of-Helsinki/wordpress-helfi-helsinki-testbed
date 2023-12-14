<footer class="content-info has-ui-03-background-color has-background">
  <div class="footer">
    <div class="footer__above">
      <div class="footer__logo">
        <img src="{{ \Roots\asset('images/logo/business-helsinki.png')->uri() }}"/>
      </div>
      <div class="footer__menu">
        @php(dynamic_sidebar('footer-menu'))
      </div>
    </div>
    <hr/>
    <div class="footer__below">
      <div class="footer__disclaimers">
        @php(dynamic_sidebar('footer-disclaimers'))
      </div>
      <div class="footer__social">
        @php(dynamic_sidebar('footer-social'))
      </div>
      <div class="footer__contact">
        @php(dynamic_sidebar('footer-contact'))
      </div>
    </div>
  </div>
</footer>
