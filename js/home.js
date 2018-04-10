var marginy=0;
var destination=0;
var speed = 3;
var scroller= null;

function initScroll(elementId) {
	// body...
	destination=document.getElementById(elementId).offsetTop;
	scroller= setTimeout(function(){
		initScroll(elementId);
	},1)
	marginy=marginy+speed;
	if (marginy>=destination) {
		clearTimeout(scroller);
	}
	window.scroll(0,marginy);

}

$('a').on('click', function(){
  $('.wrap, a').toggleClass('active');
  
  return false;
});