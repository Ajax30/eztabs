/*
 * EZ Tabs
 * by Razvan Zamfir
 */

(function($) {
  $.fn.eztabs = function(options) {

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend({
      tabsList      :  '.ez_tabs',
      boxContainer  :  '.ez_content',
      animation     :  'none',
      animationTime :  500,
      fullWidthTabs :  true
    }, options);

    return this.each(function() {

      var elem = this;
      var tabsList = settings.tabsList;
      var boxContainer = settings.boxContainer

      // Full width tabs
      if (settings.fullWidthTabs === true) {
        $(tabsList).addClass("fullwidth");  
      }

      var allContentBoxes = $(elem).find(boxContainer).children();

      // Hide boxes
      $(allContentBoxes).hide();

      // Show the first box
      $(allContentBoxes[0]).show();

      var tab = $(elem).find(tabsList).children('li');

      // Add class "active" to first tab
      $(tab[0]).addClass('active');

      $(tab).each(function(index) {

        $(this).on('click', function() {
          // Add class "active" to clicked tab
          $(this).addClass('active');

          // Remove class "active" from all other tabs
          $(tab).not(this).removeClass('active');

          // active article
          var activeBox = $(allContentBoxes[index]);

          // Animations
          if (settings.animation === 'none') {
              $(allContentBoxes).hide();
              $(activeBox).show();
          } else if (settings.animation === 'slideUpDown') {
              $(allContentBoxes).slideUp(settings.animationTime);
              $(activeBox).slideDown(settings.animationTime);
          } else if (settings.animation === 'slideLeftRight') {
              $(boxContainer).css('overflow', 'hidden');
              $(allContentBoxes).css({
                'width' : '100%',
                'display' : 'none'
              });
              $(allContentBoxes).animate({'marginLeft': '-110%'},settings.animationTime);
              $(activeBox).css('display' , 'block').animate({'marginLeft': '0'},settings.animationTime);
          }
          return false;
        });
      });
    });
  };
})(jQuery);