$(document).ready(function() {
	var img = $('img');
	img.css({'margin-top' : 0, 'margin-left' : 0});
	var zoom = 1;
	var imgw = 0;
	var imgh = 0;
	var clicking = false;
	var mousex;
	var mousey;
	
	$('.conteiner').click(function(e) {
		sleft = $(this).scrollLeft();
		stop = $(this).scrollTop();
		cx = sleft + e.clientX;
		cy = stop + e.clientY;
		param = $("textarea").val();
		$("textarea").val(param + cx + ',' + cy + ',');
	});
	
	$('.showcoor').mouseenter(function() {
		if ($(this).css('right') == 'auto') {
			$(this).css('left', 'auto');
			$(this).css('right', '50px');
		} else {
			$(this).css('right', 'auto');
			$(this).css('left', '50px');
		}
	});
	
	$('.conteiner').bind('mousewheel', function(event, delta, deltaX, deltaY) {
		if (imgw == 0) { imgw = parseInt(img.css('width'));	}
		if (imgh == 0) { imgh = parseInt(img.css('height')); }
	    if (delta > 0) { zoom = zoom + 0.1; } 
	    else { zoom = zoom - 0.1; }
	    img.css({'width' : imgw * zoom, 'height' : imgh * zoom});
	});


	$('.conteiner').mousedown(function(e){
	    clicking = true;
	    mousex = e.pageX;
	    mousey = e.pageY;
	});
	
	$('.conteiner').mouseup(function(){
	    clicking = false;
	});
	
	$('.conteiner').mousemove(function(e){
		sleft = $(this).scrollLeft();
		stop = $(this).scrollTop();
		cx = sleft + e.clientX;
		cy = stop + e.clientY;
		$('.coordx').text(cx);
		$('.coordy').text(cy);
	    if(clicking == false) { return; }
	    else {
	    	image = 
	    	deltax = e.pageX - mousex;
	    	deltay = e.pageY - mousey;
		    mousex = e.pageX;
		    mousey = e.pageY;
		    img.css({
		    	'margin-top' : parseInt(img.css('margin-top')) - deltay,
		    	'margin-left' : parseInt(img.css('nmargin-left')) - deltax
		    });
	    }
	    
	});
});