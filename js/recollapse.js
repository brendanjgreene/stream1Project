/*$(document.body.children[3]).on('click', function(event){
  var $clickedOn = $(event.target),
  $collapsableItems = $('.collapse'),
  isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
  isLink = ($clickedOn.closest('a').length == 1),
  isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

  if( (!isToggleButton && isLink) || isOutsideNavbar ) {
    $collapsableItems.each(function(){
      $(this).collapse('hide');
    });
  }
});*/
$($location.path("/aboutUs")).on('click', function(event){
  var $clickedOn = $(event.target),
  $collapsableItems = $('.collapse'),
  isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
  isLink = ($clickedOn.closest('a').length == 1),
  isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

  if( (!isToggleButton && isLink) || isOutsideNavbar ) {
    $collapsableItems.each(function(){
      $(this).collapse('hide');
    });
  }
});