$( document ).ready( function() {

	var rightBar = $( "#right-bar" );

	var rightBarHeight = rightBar.height();
	var rightBarPosition = rightBar.offset();
	var rightBarTotal = rightBarHeight + rightBarPosition.top + 100;

	var rightProp = {
		Height: rightBarHeight,
		Total: rightBarTotal,
		absoluteTop: "0px"
	};

	var leftBar = $( "#left-bar" );
	
	var leftBarHeight = leftBar.height();
	var leftBarPosition = leftBar.offset();
	var leftBarTotal = leftBarHeight + leftBarPosition.top + 100;

	var leftProp = {
		Height: leftBarHeight,
		Total: leftBarTotal,
		absoluteTop: "50px"
	};

	
	mySideBarScroll( rightBar, rightProp ); 
	mySideBarScroll( leftBar, leftProp ); 


	$( window ).scroll( function(){
		mySideBarScroll( rightBar, rightProp ); 
		mySideBarScroll( leftBar, leftProp ); 

	});
	$( window ).resize( function(){
		mySideBarScroll( rightBar, rightProp );
		mySideBarScroll( leftBar, leftProp ); 
	});

	function mySideBarScroll( sideBar, sideProp ) {

		var windowHeight = $( window ).height();
		var scrollTop = $(window).scrollTop();

		if( windowHeight <= 450 ) {
			sideBar.css({
				"position": "absolute"/*,
				"top": sideProp.absoluteTop*/
			});
		} else if( windowHeight >= sideProp.Total ){
			sideBar.css({
				"position": "fixed"/*,
				"top": "0px"*/
			});
		} else if( (windowHeight + scrollTop) >= sideProp.Total ) {
			sideBar.css({
				"position": "fixed",
				"top": ( windowHeight - sideProp.Height - 100 ) + "px"
			});
		} else {
			sideBar.css({
				"position": "absolute"/*,
				"top": "0px"*/
			});
		}
	};

});