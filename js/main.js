$(document).ready(function(){

	//Navigation menu scrollTo
	//$('header nav ul li a').click(function(event){
	//	event.preventDefault();
	//	var section = $(this).attr('href');
	//	var section_pos = $(section).position();

	//	if(section_pos){
	//		$(window).scrollTo({top:section_pos.top, left:'0px'}, 1000);
	//	}
		
	//});

	//$('.app_link').click(function(e){
	//	event.preventDefault();
	//	$(window).scrollTo({top:$("#hero").position().top, left:'0px'}, 1000);		
	//});
    
    
    
    
    

    //$('header nav ul li a').click(function(){
    //    $('li a').removeClass("active");
    //    $(this).addClass("active");
//        var active_section = $(this).attr('href'); //get active section id
   //     $('html, body').animate({
      //and scroll to the section
    //    scrollTop: $(active_section).offset().top
    //    }, 1000);
        
    //});
    
    
    
    
    //$(".nav-item").click(function () {
     // $("a.active").removeClass('active');
      //$(this).addClass('active');
      //var active_section = $(this).attr('href'); //get active section id
      //$('html, body').animate({
      //and scroll to the section
      //scrollTop: $(active_section).offset().top
      //}, 1000);
    //});
  
  
   $(document).scroll(function () {
   //get document scroll position
     var position = $(document).scrollTop(); 
     //get header height
     var header = $('nav').outerHeight();
     
     //check active section
     $('.section').each(function(i) {
         if($(this).position().top <= (position + header))
          {
               $("li a").removeClass('active');
               $("a").eq(i).addClass('active');
          }
      });
   }); 
    
    
    
    
    
    
    
    
    
    
    
    //$(document).ready(function(){
    //  $(window).scroll(function() { // check if scroll event happened
    //    if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
    //      $(".navbar-trans").css("color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white //(#f8f8f8)
    //    } else {
    //      $(".navbar-trans").css("background-color", "transparent"); // if not, change it back to transparent
    //    }
    //  });
    //});
    

/*
    ( function( window, $, undefined ) {
    'use strict';
    $(document).ready(function() {
      function is_scrolling() {
        var $element = $('.navbar-default'),
            $nav_height = $element.outerHeight( true );
        if ($(this).scrollTop() >= $nav_height ) { //if scrolling is equal to or greater than the nav height add a class
          $element.addClass( 'is-scrolling');
        } else { //is back at the top again, remove the class
          $element.removeClass( 'is-scrolling');
        }
      }//end is_scrolling();
    $( window ).scroll(_.throttle(is_scrolling, 200));
  }); //* end ready
})(this, jQuery);
*/

    var header = $(".navbar-default");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            header.removeClass('navbar-default').addClass("navbar-nondefault ");
            header.addClass("transition");
        } else {
            header.removeClass("navbar-nondefault").addClass('navbar-default');
            header.addClass("transition");
        }
    });

   
    

    
    //Navigation menu scrollTo
	/*$('header nav ul li a').click(function(){
        $(".nav-item").removeClass('active');
        var current = $(location).attr('href');

        if(current.search('#home') > 0){
            $("[href='#home']").addClass('active')
        } else if(current.search('#app_features') > 0){
            $("[href='#app_features']").addClass('active')
        } else if(current.search('#about') > 0){
            $("[href='#about']").addClass('active')
        }
		
	});*/







	//Show & Hide menu on mobile
	$('.burger_icon').click(function(){
		$('header nav').toggleClass('show');
		$('header .burger_icon').toggleClass('active');
	});

	






	//wow.js on scroll animations initialization
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 50
		}
	);
	wow.init();








	//parallax effect initialization
	$('.hero').parallax("50%", 0.3);








	//Nice scroll initialization
	$("html").niceScroll({
		scrollspeed: 50,
		autohidemode : false,
		cursorwidth : 8,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#1f1f1f',
		zindex : 999
	});








	//Testimonials slider initialization
	$("#tslider").owlCarousel({
		items : 1,
		navigation : true,
		pagination : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		responsive: true,
		autoPlay : true,
		transitionStyle : "fade"
	});







	//Mailchimp subscription form initialization
	$('#submit_form').submit(function(){
		$('#mc_submit').attr('disabled', 'disabled');		
   		processing('icon', 'loading');
	});

	if($('#submit_form').length){
		//Mailchim Subscription form
		$('#submit_form').ajaxChimp({
		    callback: chimpResponce
		});
	}	

	//Mail chimp callback function
	function chimpResponce(resp) {
   		if (resp.result === 'success') {   			
   			processing('loading', 'icon');
			$('#mc_submit').removeAttr('disabled', 'disabled');
	        $('#submit_form #mc-email').val('');
   			$('#error_msg').hide();
   			$('#success_msg').show();
	    }else{		
   			processing('loading', 'icon');
   			$('#success_msg').hide();
   			$('#error_msg').show();
	    	$('#mc_submit').removeAttr('disabled', 'disabled');
	    }
	}

	function processing(hide, show){
			$('#mc_submit i').removeClass(hide).addClass(show);
	}








	//Popup video
	$('#play_video').click(function(e){
		e.preventDefault();	

		var video_link = $(this).data('video');
		video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

		$('.about_video').append(video_link).fadeIn(200);
	});

	$('.close_video').click(function(e){
		e.preventDefault();	

		$('.about_video').fadeOut(200,function(){
			$('iframe', this).remove();
		});

	});




});

