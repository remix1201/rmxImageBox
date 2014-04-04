// ==========================================================================
// RMXIMAGEBOX & RMXPRODUCTBOX // REMIX V6.2 - 4/3/2014 */
// ==========================================================================
/* Initial Run */
$(window).load(function () {
    run_rmxImageBox();
    run_rmxProductBox();
});

/* Loaders */
function load_rmxImageBox(){
	var counting = 1;
	var newcount = $(".rmxImageBox:visible:not(.processed) img").length;
	$(".rmxImageBox:not(.processed) img").load().each(function(){
		counting+=1;
		if (counting == newcount){
			run_rmxImageBox();
		}
	});
}

function load_rmxProductBox(){
	var counting = 1;
	var newcount = $(".rmxProductBox:visible:not(.processed) img").length;
	$(".rmxProductBox:not(.processed) img").load().each(function(){
		counting+=1;
		if (counting == newcount){
			run_rmxProductBox();
		}
	});
}

/* Functions */
function run_rmxProductBox(){

	// ONLY RUN IF IT HASNT BEEN PROCESSED YET
    $(".rmxProductBox:not(.processed)").each(function () {
		
		// ONLY PROCESS VISIBLE IMAGES IF ITS PARENT IS VISIBLE
		if ($("img",this).length > 0){
		
			if ($(this).parent().is(":visible")){
				$(this).css('overflow', 'hidden'); 					// SET CLASS TO OVERFLOW HIDDEN
				var imageContainerWidth = $(this).width(); 			// GET WIDTH OF IMAGE CONTAINER
				var imageContainerHeight = $(this).height(); 		// GET HEIGHT OF IMAGE CONTAINER
				var imageWidth = $("img", this).width(); 			// GET WIDTH OF IMAGE INSIDE CONTAINER
				var imageHeight = $("img", this).height(); 			// GET HEIGHT OF IMAGE INSIDE CONTAINER

				if ((imageContainerWidth < imageWidth) || (imageContainerHeight < imageHeight)) {

					// GET DIFFERENCE BETWEEN IMAGE WIDTH AND CONTAINER WIDTH
					var diff = imageWidth / imageContainerWidth;

					// IF HEIGHT DIVIDED BY DIFFERENCE IS SMALLER THAN CONTAINER HEIGHT, RESIZE BY WIDTH ELSE RESIZE BY HEIGHT
					if ((imageHeight / diff) < imageContainerHeight) {
						$("img", this).height('auto');
						$("img", this).width(imageContainerWidth);
						// SET IMAGE VARIABLES TO NEW DIMENSIONS
						imageWidth = imageContainerWidth;
						imageHeight = imageHeight / diff;
					} else {
						$("img", this).width('auto');
						$("img", this).height(imageContainerHeight);
						// SET IMAGE VARIABLES TO NEW DIMENSIONS
						imageWidth = imageWidth / (imageHeight / imageContainerHeight);
						imageHeight = imageContainerHeight;
					}

					// SET MARGINS
					var leftOffset = (imageWidth - imageContainerWidth) / -2;
					var topOffset = (imageHeight - imageContainerHeight) / -2;
					$("img", this).css("margin-top", topOffset + 'px');
					$("img", this).css("margin-left", leftOffset + 'px');

					// ADD CLASS PROCESSED SO WE KNOW THAT IMAGE HAS BEEN PROCESSED
					$(this).addClass("processed");

					// SHOW IMAGE AFTER RESIZING
					$("img", this).show();
					
				} else if ((imageHeight == imageContainerHeight) && (imageWidth == imageContainerWidth)){
					
					// ADD CLASS PROCESSED & NOCHANGE SO WE KNOW THAT IMAGE HAS BEEN PROCESSED & DOESNT NEED CHANGING
					$(this).addClass("processed").addClass("nochange");
					
					// SHOW IMAGE
					$("img", this).show();
					
				} else {
				// SHOW IMAGE IF NO RESIZING NEEDED
					// CENTER IMAGE IN DIV VERTICALLY AND HORIZONTALLY
					$(this).css('text-align', 'center').css('vertical-align', 'middle').css('display', 'table-cell');
					
					// ADD CLASS PROCESSED SO WE KNOW THAT IMAGE HAS BEEN PROCESSED
					$(this).addClass("processed");
					
					// SHOW IMAGE
					$("img", this).show();
				}
			}
		}
    });
}
function run_rmxImageBox(){

	// ONLY RUN IF IT HASNT BEEN PROCESSED YET
    $(".rmxImageBox:not(.processed)").each(function () {

		// ONLY PROCESS VISIBLE IMAGES IF ITS PARENT IS VISIBLE	
		if ($("img",this).length > 0){

			if ($(this).parent().is(":visible")){
				$(this).css('overflow', 'hidden'); 					// SET CLASS TO OVERFLOW HIDDEN
				var imageContainerWidth = $(this).width(); 			// GET WIDTH OF IMAGE CONTAINER
				var imageContainerHeight = $(this).height(); 		// GET HEIGHT OF IMAGE CONTAINER
				var imageWidth = $("img", this).width(); 			// GET WIDTH OF IMAGE INSIDE CONTAINER
				var imageHeight = $("img", this).height(); 			// GET HEIGHT OF IMAGE INSIDE CONTAINER
				
				if ((imageContainerWidth < imageWidth) || (imageContainerHeight < imageHeight)) {
				
					// GET DIFFERENCE BETWEEN IMAGE WIDTH AND CONTAINER WIDTH
					var diff = imageWidth / imageContainerWidth;

					// IF HEIGHT DIVIDED BY DIFFERENCE IS SMALLER THAN CONTAINER HEIGHT, RESIZE BY HEIGHT ELSE RESIZE BY WIDTH
					if ((imageHeight / diff) < imageContainerHeight) {
						$("img", this).width('auto');
						$("img", this).height(imageContainerHeight);
						// SET IMAGE VARIABLES TO NEW DIMENSIONS
						imageWidth = imageWidth / (imageHeight / imageContainerHeight);
						imageHeight = imageContainerHeight;
					} else {
						$("img", this).height('auto');
						$("img", this).width(imageContainerWidth);
						// SET IMAGE VARIABLES TO NEW DIMENSIONS
						imageWidth = imageContainerWidth;
						imageHeight = imageHeight / diff;
					}

					// SET MARGINS
					var leftOffset = (imageWidth - imageContainerWidth) / -2;
					var topOffset = (imageHeight - imageContainerHeight) / -2;
					$("img", this).css("margin-top", topOffset + 'px');
					$("img", this).css("margin-left", leftOffset + 'px');

					// ADD CLASS PROCESSED SO WE KNOW THAT IMAGE HAS BEEN PROCESSED
					$(this).addClass("processed");
					
					// SHOW IMAGE AFTER RESIZING
					$("img", this).show();
				
				} else if ((imageHeight == imageContainerHeight) && (imageWidth == imageContainerWidth)){
				
					// ADD CLASS PROCESSED & NOCHANGE SO WE KNOW THAT IMAGE HAS BEEN PROCESSED & DOESNT NEED CHANGING
					$(this).addClass("processed").addClass("nochange");
					
					// SHOW IMAGE
					$("img", this).show();

				} else {
				// SHOW IMAGE IF NO RESIZING NEEDED
					// CENTER IMAGE IN DIV VERTICALLY AND HORIZONTALLY
					$(this).css('text-align', 'center').css('vertical-align', 'middle').css('display', 'table-cell').css('background-image', 'none');
					
					// ADD CLASS PROCESSED SO WE KNOW THAT IMAGE HAS BEEN PROCESSED
					$(this).addClass("processed");
					
					// SHOW IMAGE
					$("img", this).show();
				}
			}
		}
    });
}
