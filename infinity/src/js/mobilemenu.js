(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.main-menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu-left').on('click', function() {
      // do something

      $(this).closest('.main-menu')
        .removeClass('menu_state_open');
    });
    $('.menu-right').on('click', function() {
      // do something

      $(this).closest('.main-menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);