$(document).ready(function(){
	let height = $("#header-top").height();
  let scroll = $(window).scrollTop();
 	if(height <= scroll){
 		changeHeader();
 	}
 	if(scroll == 0){
 		restartHeader();
 	}
})

$(window).scroll(function (event) {
	let height = $("#header-top").height();
  let scroll = $(window).scrollTop();
 	if(height <= scroll){
 		changeHeader();
 	}
 	if(scroll == 0){
 		restartHeader();
 	}
});

function changeHeader(){
	$("#header-bottom").addClass("hide");
	$("#header").addClass("sticky-nav");
	$("#header-med").removeClass("hide-large");
	setTimeout(function(){
	$("#header-top").addClass("hide-large");
	}, 1);
}

function restartHeader(){
	$("#header-bottom").removeClass("hide");
	$("#header").removeClass("sticky-nav");
	$("#header-top").removeClass("hide-large");
	setTimeout(function(){
	$("#header-med").addClass("hide-large");
	}, 1);
}