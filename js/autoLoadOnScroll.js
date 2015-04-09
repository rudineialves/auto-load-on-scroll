

$.fn.autoLoadOnScroll = function(options){

	return this.each(function(){

		var settings = $.extend({
			onScroller : function(){},
			onScrollTop : function(){},
			onScrollBottom : function(){}
		}, options);


		$(this).scroll(function() { 				

			var scrollTop	 = parseFloat($(this).scrollTop());
			var scrollBottom = eval(scrollTop + parseFloat($(this).outerHeight()));
			var scrollHeight = ( this == '[object Window]' ? $('body').prop('scrollHeight') : $(this).prop('scrollHeight') );

			settings.onScroller({
				'scrollTop'    : scrollTop,
				'scrollBottom' : scrollBottom,
				'scrollHeight' : scrollHeight
			});
			if(scrollTop === 0){
				settings.onScrollTop();
			}
			if(scrollBottom >= scrollHeight) {	
				settings.onScrollBottom();			
			}					
		});

	});
}