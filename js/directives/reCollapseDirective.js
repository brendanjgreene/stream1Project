angular.module('BandApp').directive('myRecollapse', function(){
	return {
		restrict: 'EA', // -> element/attribute
		link: function(scope,element,attrs){
			$('my-recollapse').on('click', function(event){
    	  		var $clickedOn = $(event.target),
    	  		$collapsableItems = $('my-recollapse .collapse'),
    	  		isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
    	  		isLink = ($clickedOn.closest('a').length == 1),
    	  		isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
    	
    	  		if( (!isToggleButton && isLink) || isOutsideNavbar ) {
    				$collapsableItems.each(function(){
    	  				$(this).collapse('hide');
    				});
    	  		}
    		});
		}
	};
});