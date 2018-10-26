$( document ).ready( function() {

	var rightBar = $( "#right-bar" );

	var sideBarHeight = rightBar.height();
	var sideBarPosition = rightBar.offset();
	var sideBarTotal = sideBarHeight + sideBarPosition.top + 100;

	mySideBarScroll( rightBar ); 

	$( window ).scroll( function(){
		mySideBarScroll( rightBar ); 
	});
	$( window ).resize( function(){
		mySideBarScroll( rightBar ); 
	});


	var leftBarHeight = $( "#left-bar" ).height();
	var rightBarHeight = $( "#right-bar" ).height();

	var leftBarPosition = $( "#left-bar" ).offset();
	var rightBarPosition = $( "#right-bar" ).offset();

	var leftTotal = leftBarHeight + leftBarPosition.top + 100;
	var rightTotal = rightBarHeight + rightBarPosition.top + 100;


	/*console.log( "Right: " + rightBarHeight + "/" +rightBarPosition.top
		+ "\n" 
		+ "Left: " + leftBarHeight + "/" + leftBarPosition.top
		);*/

	function mySideBarScroll( sideBar ) {

		//var documentHeight = $( document ).height();
		var windowHeight = $( window ).height();
		var scrollTop = $(window).scrollTop();

		//var cssTop = $( "#right-bar" ).css("top");
		//var cssPosition = sideBar.css("position");


/*		console.log( "Window: " + windowHeight 
			+ "\n"
			+ "Document: " + documentHeight
			+ "\n" 
			+ scrollTop
			+ "\n" 
			+ cssTop
			+ "\n" 
			+ cssPosition
			);*/

		if( windowHeight <= 450 ) {
			sideBar.css({
				"position": "absolute",
				"top": "0px"
			});
		} else if( windowHeight >= sideBarTotal ){
			sideBar.css({
				"position": "fixed",
				"top": "50px"
			});
		} else if( (windowHeight + scrollTop) >= sideBarTotal ) {
			sideBar.css({
				"position": "fixed",
				"top": ( windowHeight - sideBarHeight - 100 ) + "px"
			});
		} else {
			sideBar.css({
				"position": "absolute",
				"top": "0px"
			});
		}
	};

});